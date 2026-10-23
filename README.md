# MiddlewareLab 🚀

A hands-on Node.js and Express.js project exploring middleware execution, request logging, custom error classes, token-based access control, and centralized error handling.

## ✨ Features

- **Middleware Chaining:** Understand sequential middleware execution using `next()`.
- **Request Logging:** Logs HTTP methods, request paths, timestamps, and hostnames.
- **Custom Error Class:** Uses `ExpressError` to create errors with custom status codes and messages.
- **Centralized Error Handling:** Handles application errors through Express error-handling middleware.
- **Token-Based Access Control:** Protects the `/api` endpoint using query parameters.
- **Intentional Error Testing:** Demonstrates runtime errors and error propagation.
- **404 Handling:** Returns a custom response for undefined routes.

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript

## 📁 Project Structure

```text
MiddlewareLab/
├── index.js
├── ExpressError.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd MiddlewareLab
```

### 2. Install dependencies

```bash
npm install
```

If Express is not already included in your dependencies:

```bash
npm install express
```

### 3. Start the server

```bash
node index.js
```

The application runs at:

`http://localhost:8080`

## 🌐 Available Routes

| Method | Endpoint | Expected response |
|---|---|---|
| GET | `/` | Server working properly |
| GET | `/random` | Random page |
| GET | `/api?token=giveaccess` | `data` |
| GET | `/api?token=wrong` | 401 Unauthorized |
| GET | `/admin` | 403 Forbidden |
| GET | `/err` | Demonstrates a runtime error |
| GET | `/unknown` | 404 Not Found |

**Note:** The `/err` route intentionally triggers an error and is intended for testing, not production use.

## 🧠 Concepts Demonstrated

### 1. Middleware Chaining

Multiple middleware functions execute in registration order. Calling `next()` passes control to the next middleware or route handler.

### 2. Request Logging

The logger records the HTTP method, request path, timestamp, and hostname for incoming requests.

### 3. Custom Error Class

The `ExpressError` class allows errors to carry an HTTP status code and a custom message.

Example:

```js
throw new ExpressError(403, "Access Forbidden");
```

### 4. Token-Based API Access

The `/api` middleware checks the `token` query parameter. Requests with the expected token continue to the route handler; other requests throw a custom error.

Example:

```text
/api?token=giveaccess
```

This is a learning demonstration, not secure production authentication.

### 5. Centralized Error Handling

Express error-handling middleware uses four parameters:

```js
(err, req, res, next)
```

It can extract a status code and message from an error and send an appropriate HTTP response.

### 6. Error Propagation

Calling `next(err)` passes an error to the next error-handling middleware. This allows logging and centralized error responses to be separated.

### 7. 404 Handling

A final regular middleware handles requests that do not match any defined route.

## ⚠️ Important Implementation Notes

- Register error-handling middleware **after the routes and middleware that can generate errors**. In the current code, the first error handler appears before the `/api` middleware and routes, so it will not catch errors raised later in the stack.
- The error-logging middleware calls `next(err)`, which forwards the error rather than responding to it. A final error handler must follow it.
- In modern Express 5, rejected promises from async handlers are forwarded automatically. In Express 4, async errors generally need to be passed to `next(err)` or handled with a wrapper.
- The `/err` route deliberately references an undefined variable to demonstrate a runtime error.

## 👨‍💻 Contributor

**Likith G**

GitHub: [@likithg2](https://github.com/likithg2)

## 📜 License

Created for learning and practicing Express.js middleware and error handling.
