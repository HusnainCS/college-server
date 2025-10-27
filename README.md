# college-server

A small backend server for managing a college's students, teachers and courses. Built with Express and Mongoose, using dotenv for configuration and nodemon for local development. This README explains how to run the project, environment variables, installed packages, and the core API endpoints.

## Table of contents

- About
- Tech stack
- Installation
- Environment variables
- Run (development / production)
- API (endpoints + examples)
- requirements.txt

## About

This project exposes a minimal REST API to manage:
- Students
- Teachers
- Courses

It uses MongoDB via mongoose for persistence, Express for routing, dotenv for environment configuration, and nodemon for hot reload during development.

## Tech stack

- Node.js
- Express
- Mongoose
- dotenv
- nodemon (dev)

## Installation

1. Clone the repo
   ```
   git clone https://github.com/HusnainCS/college-server.git
   cd college-server
   ```

2. Install Node dependencies
   ```
   npm install
   ```
   Typical dependencies to be installed (already referenced in package.json):
   - express
   - mongoose
   - dotenv
   - nodemon

3. If you use any Python helper scripts, install Python deps:
   ```
   pip install -r requirements.txt
   ```
   (See the requirements.txt section below.)

## Environment variables

Create a `.env` file in the project root with values like:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/college_db
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here   # if you add auth later
```

Make sure your MongoDB server is running and the MONGO_URI is reachable.

## Run

- Development (uses nodemon)

  Example package.json scripts:
  ```json
  "scripts": {
    "start": "nodemon src/index.js",
  }
  ```

- Production
  ```
  npm start
  ```

## API

Base URL: http://localhost:4000 (or the PORT you set)

All endpoints are JSON-based. Example request/response payloads below.

Common endpoints (implemented in this project):
- Students
  - GET /students
    - Description: List all students

  - POST /students
    - Description: Create a new student
 

- Teachers
  - GET /teachers
    - Description: List all teachers
     
  - POST /teachers
    - Description: Create a new teacher


- Courses
  - GET /courses
    - Description: List all courses

  - POST /courses
    - Description: Create a new course


Notes:
- Validate input in your route handlers (e.g., required fields).
- Implement proper error handling and status codes (400 for bad requests, 404 for not found, 500 for server errors).
- Add authentication/authorization (JWT) if needed for protected routes.

## requirements.txt

This repository contains a `requirements.txt` file for any optional Python helper scripts. If you are not using Python in this project you can ignore or remove it. If present, install it with:

```
pip install -r requirements.txt
```

## Contact

Maintainer: HusnainCS