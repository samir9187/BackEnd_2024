class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

// By creating this file, you can easily import and use the ApiResponse class in other parts of your codebase, ensuring consistency and reusability when dealing with API responses.
