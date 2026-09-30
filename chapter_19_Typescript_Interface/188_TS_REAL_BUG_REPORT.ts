interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

/*
logBug is the name of the function.
bug: BugReport means the function expects to receive one argument (named bug), 
and that argument must perfectly match the structure of the BugReport interface 
(meaning it must have an id, title, severity, and stepsToReproduce).
void means this function does not return any value. It just performs an action (printing text) and then finishes.
*/
function logBug(bug: BugReport): void {
    console.log("BUG- Report -> " + bug.id + " [" + bug.severity + "] " + bug.title);
    // This loops through the stepsToReproduce array and prints each step
    // For every item in the array, it runs the function provided inside it.
    // It passes two variables into that inner function:
    //   - step: The actual text of the current step in the loop.
    //   - i: The index (the position) of that step in the array. Arrays in programming start counting at 0, so the first step has an index of 0, the second step is 1, etc
    bug.stepsToReproduce.forEach(function (step: string, i: number) {
        console.log("  " + (i + 1) + ". " + step);
    })
}



logBug({
    id: 1,
    title: "VWO login is not working. ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});

logBug({
    id: 2,
    title: "VWO login is not working with arabic lang ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});