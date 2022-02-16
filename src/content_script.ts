import { getQuery, setQuery } from "./query";

if (
    window.location.hostname === "www.google.com" &&
    window.location.pathname === "/search"
) {
    const query = getQuery();
    chrome.runtime.sendMessage(
        { type: "mutateQuery", query: query },
        (response) => {
            if (response.mutatedQuery !== query) {
                setQuery(response.mutatedQuery);
            }
        }
    );
}
