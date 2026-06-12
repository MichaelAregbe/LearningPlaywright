function logResults(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`)
    console.log(`Results: ${results.join(",")}`)
}

logResults("Suite", "pass", "fail", "pass", "skip")
// Suite: Suite
// Results: pass,fail,pass,skip