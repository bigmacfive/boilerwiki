function doSearch(text) {
    if (window.find(text)) {
        console.log(window.find(text));
    if (!text) {
        console.error("Hmmm, We didn't find anythig.");
        return;
    }
}

    if (typeof window.find !== 'function') {
        console.error("mmm, We didn't find anythig.");
        return;
    }

    var found = window.find(text);
    if (found) {
        console.log("text search: " + text);
    } else {
        console.log("mmm, We didn't find anythig. " + text);
    }
}
