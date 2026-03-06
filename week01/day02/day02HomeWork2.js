////week 01 day 02 home assignment 2

function launchBrowser(browser) {
    if (browser === "chrome") {
        console.log("Launching Chrome browser...");
    } else if (browser === "firefox") {
        console.log("Launching Firefox browser...");
    } else if (browser === "safari") {
        console.log("Launching Safari browser...");
    } else if (browser === "Edge") {
        console.log("Launching Edge browser...");
    } else {
        console.log("Browser not supported.");
    }
}

function runTests(string) {
    switch (string) {
        case "smoke":
            console.log("Running Smoke Test ...");
            break;
        case "sanity":
            console.log("Running Sanity Test ...");
            break;
        case "regression":
            console.log("Running Regression Test ...");
            break;
        default:
            console.log("Running Smoke Test...");
    }
}

launchBrowser("chrome");
launchBrowser("firefox");
launchBrowser("safari");
launchBrowser("Edge");
launchBrowser("Opera");
runTests("smoke");
runTests("sanity");
runTests("regression");

runTests("UAT");
