class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;// baseURL which is "https://staging.api.com" or "https://prod.api.com" is assigned to this.baseURL attribute
    }

    get(path) {
        return this.baseURL + path;// this returns the baseURL of the object which is "https://staging.api.com" or "https://prod.api.com"
    }
}

let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com");

console.log(staging.get("/users")); // Output: https://staging.api.com/users
console.log(prod.get("/users")); // Output: https://prod.api.com/users