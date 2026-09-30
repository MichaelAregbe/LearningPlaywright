enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(Severity.High);

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High;
}

console.log("Low urgent?", needsImmediateAttention(Severity.Low));
console.log("Critical urgent?", needsImmediateAttention(Severity.Critical));
console.log("Severity name:", Severity[2]);

// we can store environment variables in the enum.
// This is more like dictionary or map
enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);