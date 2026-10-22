# MiddlewareLab 🚀

A beginner-friendly Node.js and Express.js project exploring how middleware works in a web server, from request processing and logging to token-based access control and 404 error handling.

## ✨ Features

- **Middleware Chaining:** Understand how multiple middleware functions execute in sequence using `next()`.
- **Request Logger:** Logs the HTTP method, request path, timestamp, and hostname.
- **Custom Request Properties:** Attaches a timestamp to the request object using `req.responseTime`.
- **Token-Based Access Control:** Protects the `/api` endpoint using a query parameter.
- **Express Routing:** Implements home, API, and random routes.
- **404 Handling:** Returns a custom response for undefined routes.

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript

## 📁 Project Structure

```text
MiddlewareLab/
├── index.js
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

If Express is not already listed in your dependencies, install it with:

```bash
npm install express
```

### 3. Start the server

```bash
node index.js
```

The server starts at:

`http://localhost:8080`

## 🌐 Available Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Displays the server status |
| GET | `/random` | Displays a random page message |
| GET | `/api?token=giveaccess` | Grants access to the API |
| GET | `/api?token=wrong` | Returns an access-denied message |
| GET | `/unknown` | Returns a 404 response |

## 🧠 Concepts Demonstrated

### 1. Middleware Chaining

Middleware functions execute in the order they are registered. Calling `next()` passes control to the next middleware or route handler.

### 2. Request Logging

The logger records information about incoming requests, including the HTTP method, URL path, request timestamp, and hostname.

### 3. Token-Based Access Control

The API checks the `token` query parameter before allowing access. This is a basic learning example, not production-grade authentication.

### 4. Custom 404 Handling

The final middleware returns an HTTP 404 status when no earlier handler responds to the request.


## 👨‍💻 Contributor

**Likith G**

GitHub: [@likithg2](https://github.com/likithg2)

## 📜 License

This project is intended for educational and practice purposes.
