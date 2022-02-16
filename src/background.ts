import { Mutator } from "./mutators/mutator";
import { SiteReplacer } from "./mutators/site_replacer";

var mutators: Mutator[];

function refreshMutators(): void {
    chrome.storage.sync.get("autoconvertSites", (result) => {
        var sites: string[] = result.autoconvertSites;
        if (sites == null || sites == undefined) {
            sites = [];
        }
        mutators = [new SiteReplacer(sites)];
    });
}

refreshMutators();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "mutateQuery") {
        const originalQuery = request.query;
        var query = originalQuery;
        for (const mutator of mutators) {
            query = mutator.mutate(query);
        }
        sendResponse({ mutatedQuery: query });
    } else if (request.type == "recreateMutators") {
        refreshMutators();
    }
});
