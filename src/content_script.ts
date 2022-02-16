import { getQuery, setQuery } from "./query";
import { SiteReplacer } from "./mutators/site_replacer";

const mutators = [new SiteReplacer()];

if (
    window.location.hostname === "www.google.com" &&
    window.location.pathname === "/search"
) {
    const originalQuery = getQuery();
    var query = originalQuery;
    for (const mutator of mutators) {
        query = mutator.mutate(query);
    }
    if (query !== originalQuery) {
        setQuery(query);
    }
}
