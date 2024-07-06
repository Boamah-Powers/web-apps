# Book Store Project

This is a full-stack book store application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The project covers both backend and frontend development aspects, including CRUD operations, routing, CORS policy, and user experience improvements.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Content](#project-content)
- [Topics Covered](#topics-covered)

## Introduction

This project demonstrates a comprehensive book store application with a robust backend and a dynamic frontend. The backend is developed using Node.js, Express.js, and MongoDB, while the frontend is built using React, Vite, and Tailwind CSS.

## Features

- Create, Read, Update, and Delete (CRUD) operations for books
- Backend routing with Express
- Frontend routing with React Router
- Handling CORS policy
- User interface enhancements with Tailwind CSS and beautiful alerts

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React, Vite, Tailwind CSS, React Router

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Boamah-Powers/web-apps.git
    cd bookstore-MERN-stack
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Start the backend server:
    ```bash
    cd ../backend
    npm start
    ```

5. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

## Usage

1. Ensure MongoDB is running on your local machine or provide a MongoDB URI in the environment variables.
2. Start the backend and frontend servers as described in the Installation section.
3. Open your browser and navigate to `http://localhost:5173` to access the book store application.

## Project Content

In this project, I started by creating a Node.js project from scratch and set up the first HTTP route. I integrated MongoDB and Mongoose into the Node.js environment and created a Book model with Mongoose. I implemented CRUD operations to save a new book, get all books, get one book by ID, update a book, and delete a book using Mongoose. The backend was refactored using Express Router, and I addressed the CORS policy in Node.js and Express.js. On the frontend, I created a React project using Vite and Tailwind CSS, set up a Single Page Application (SPA), and added React Router DOM. I displayed a list of books, showed book details, and implemented CRUD operations for books in React. I enhanced the user interface by displaying books as cards, making the book card a single component, and adding a book modal. Additionally, I improved the user experience with beautiful alerts.

## Topics Covered

This project covers various topics including backend CRUD operations, backend routing with Express, managing CORS policy in Node.js and Express.js, MongoDB operations using Mongoose, frontend CRUD operations, frontend routing with React Router, and enhancing user experience with Tailwind CSS and alerts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the freeCodeCamp, Mohammad Taheri, and resources that made this project possible.