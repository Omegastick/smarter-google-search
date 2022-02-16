chrome.storage.sync.get("autoconvertSites", (result) => {
    if (
        result.autoconvertSites == null ||
        result.autoconvertSites == undefined
    ) {
        result.autoconvertSites == [];
    }
    console.log("Sites: ", result.autoconvertSites);
    const textArea = <HTMLInputElement>document.getElementById("sites");
    if (textArea == null) {
        throw new Error("Could not find text area");
    }
    textArea.value = result.autoconvertSites.join("\n");
});

document.getElementById("save-button")?.addEventListener("click", () => {
    const textArea = <HTMLInputElement>document.getElementById("sites");
    if (textArea == null) {
        throw new Error("Could not find text area");
    }
    const sites = textArea.value.split("\n");
    console.log("Setting sites: ", sites);
    chrome.storage.sync.set({ autoconvertSites: sites }, () => {
        chrome.runtime.sendMessage({ type: "recreateMutators" });
    });
});
