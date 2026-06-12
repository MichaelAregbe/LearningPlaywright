class Browser {

    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched"); // ← runs automatically on every "new"
    }

    startBrowser() {
        console.log("starting the browser")
    }
    closeBrowser() {
        console.log("starting the browser")
    }

}

let chrome = new Browser("Chrome"); // Output: Chrome launched
let firefox = new Browser("Firefox"); // Output: Firefox launched

console.log(chrome.isOpen); // Output: true