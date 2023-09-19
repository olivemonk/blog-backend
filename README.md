# Blog App Backend

Welcome to the Blog App Backend! This backend server provides the core functionality for managing blog posts and user accounts in our Blog App. It offers RESTful API endpoints for various operations, including user registration, authentication, and CRUD operations on blog posts.

![Node.js](https://img.shields.io/badge/Node.js-v12.0.0-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.18.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.0-orange)

## Features

- User registration with password hashing for security.
- User authentication and login.
- Create, Read, Update, and Delete (CRUD) operations for blog posts.
- User-specific management of blog posts.
- Secure and scalable backend architecture.
- Comprehensive API documentation for easy integration with frontend.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **MongoDB**: Make sure you have MongoDB installed locally or have access to a MongoDB database. You can download MongoDB from [mongodb.com](https://www.mongodb.com/).

- **npm or yarn**: You will need either npm (Node Package Manager) or yarn for package management. npm is included with Node.js, and you can install yarn via [yarnpkg.com](https://yarnpkg.com/).

### Usage

The Blog App Backend exposes a set of API endpoints that you can use to interact with the server. Below are the available endpoints:

- `POST /api/users/signup`: Register a new user.
- `POST /api/users/login`: Authenticate and log in a user.
- `GET /api/blogs`: Get a list of all blog posts.
- `GET /api/blogs/:id`: Get a single blog post by ID.
- `POST /api/blogs/add`: Create a new blog post (requires authentication).
- `PUT /api/blogs/:id`: Update an existing blog post (requires authentication).
- `DELETE /api/blogs/:id`: Delete a blog post (requires authentication).
- `GET /api/users`: Get a list of all users (requires authentication).

For detailed information on each endpoint and how to use them, please refer to the API documentation provided in the code.


