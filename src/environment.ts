const environment = {
    "baseURL": "http://localhost:44366/api/"
};

if (process.env.REACT_APP_ENV === "development") {
    environment.baseURL = "http://localhost:55071/api/"
}

if (process.env.REACT_APP_ENV === "staging") {
    environment.baseURL = "http://localhost:55071/api/"
}

if (process.env.REACT_APP_ENV === "production") {
    environment.baseURL = "http://localhost:55071/api/"
}

export default environment;
