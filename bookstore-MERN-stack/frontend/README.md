# Bookstore Frontend

This is the frontend component of the Bookstore application built using React. The application allows users to browse, view details, create, update, and delete books.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

The Bookstore frontend is a Single Page Application (SPA) built with React and styled using Tailwind CSS. It interacts with a backend API to perform CRUD operations on books and provides a user-friendly interface.

## Features

- Display a list of books
- View book details
- Create new books
- Edit existing books
- Delete books
- Responsive design

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios, Notistack
- **State Management**: React Context API and React Hooks

## Installation

To install and run the frontend locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Boamah-Powers/web-apps.git
    cd web-apps/bookstore-MERN-stack/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Ensure the backend server is running and accessible.
2. Follow the installation steps for the specific project.
3. Open your browser and navigate to `http://localhost:5173` to access the frontend application.

## API Endpoints

This frontend application interacts with the following backend API endpoints:

- `GET /api/books`: Fetch all books
- `GET /api/books/:id`: Fetch a single book by ID
- `POST /api/books`: Create a new book
- `PUT /api/books/:id`: Update a book by ID
- `DELETE /api/books/:id`: Delete a book by ID

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to all contributors and the open-source community for their invaluable resources and support.
