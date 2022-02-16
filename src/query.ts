export function getQuery(): string {
    var searchBarElement = window.document.querySelector(
        '[aria-label="Search"]'
    );
    if (!searchBarElement) {
        throw new Error("Could not find search input");
    }
    var value = searchBarElement.getAttribute("value") ?? "";
    return value;
}

export function setQuery(value: string): void {
    var searchBarElement = window.document.querySelector(
        '[aria-label="Search"]'
    );
    if (!searchBarElement) {
        throw new Error("Could not find search input");
    }
    searchBarElement.setAttribute("value", value);
    var formElement = <HTMLFormElement>window.document.getElementById("tsf");
    if (!formElement) {
        throw new Error("Could not find search form");
    }
    formElement.submit();
}
