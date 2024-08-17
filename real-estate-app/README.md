# Real Estate App

This project is a full-stack real estate platform that allows users to browse, search, save property listings, register, log in, update profiles, and add new property listings. The application also supports real-time communication between users. The frontend is built with React, while the backend is powered by Node.js, Express, MongoDB, and Socket.io.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [Usage](#usage)
- [License](#license)

## Features

- **User Authentication**: Users can register, log in, and update their profiles.
- **Real Estate Listings**: Users can view property listings, search by filters, and view details on individual listings.
- **Property Management**: Authenticated users can add new listings.
- **Responsive Design**: The platform is designed to work on various screen sizes.
- **Real-Time Chat**: Users can communicate with property owners or other users in real-time using Socket.io.
- **Notifications**: Snackbar notifications for user interactions like saving posts, updating profiles, etc.

## Technologies Used

### Frontend

- **React**: Frontend library for building the user interface.
- **React Router**: For handling routing and navigation.
- **Scss**: For styling components.
- **Notistack**: For providing snackbar notifications.
- **React Hook Form**: For managing form states and validations.
- **DOMPurify**: To sanitize HTML content.
- **Cloudinary**: For handling image uploads.
- **Axios**: For making HTTP requests to the backend API.
- **Socket.io**: For real-time communication.

### Backend

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building the backend API.
- **MongoDB**: NoSQL database for storing user data, property listings, and chat messages.
- **Socket.io**: Enables real-time communication between clients and server.
- **JWT (JSON Web Tokens)**: For securing user authentication.
- **bcrypt.js**: For hashing user passwords.
- **Dotenv**: For environment variable management.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Boamah-Powers/real-estate-app.git
cd real-estate-app
```

### 2. Install Dependencies

#### Backend

```bash
cd api
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

### 3. Environment Variables

Set up your environment variables in a `.env` file in the `/api` directory. Here are the variables you need:

```plaintext
CLIENT_URL=http://localhost:5173
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the Application

#### Backend

```bash
cd ../api
npm start
```

#### Frontend

```bash
cd ../client
npm run dev
```

### 5. Build for Production

#### Backend

The backend does not require building for production. Make sure your server is set to run the `npm start` script in your deployment environment.

#### Frontend

```bash
cd ../client
npm run build
```

## Project Structure

```
/real-estate-app
├── /client
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
│   ├── /node_modules
│   ├── /public
│   ├── /src
│   │   ├── App.jsx
│   │   ├── index.scss
│   │   ├── layout.scss
│   │   ├── main.jsx
│   │   ├── response.scss
│   │   ├── /components
│   │   │   ├── /card
│   │   │   ├── /chat
│   │   │   ├── /filter
│   │   │   ├── /list
│   │   │   ├── /map
│   │   │   ├── /navbar
│   │   │   ├── /pin
│   │   │   ├── /searchBar
│   │   │   ├── /slider
│   │   │   └── /uploadWidget
│   │   ├── /context
│   │   ├── /lib
│   │   ├── /routes
│   │   │   ├── /homePage
│   │   │   ├── /layout
│   │   │   ├── /listPage
│   │   │   ├── /login
│   │   │   ├── /newPostPage
│   │   │   ├── /profilePage
│   │   │   ├── /profileUpdatePage
│   │   │   ├── /register
│   │   │   └── /singlePage
├── /api
│   ├── app.js
│   ├── package.json
│   ├── README.md
│   ├── package-lock.json
│   ├── /node_modules
│   ├── /routes
│   ├── /prisma
│   ├── /middleware
│   ├── /lib
│   └── /controllers
├── /socket
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   ├── /node_modules
└── README.md
```

## Backend

The backend of the Real Estate App provides the API and handles user authentication, property listing management, and real-time communication. It is located in the `/api` directory.

#### Key Features

- **Authentication**: Secure user authentication with JWT.
- **CRUD Operations**: Full CRUD capabilities for property listings.
- **Real-Time Communication**: Chat functionality powered by Socket.IO.
- **Database Management**: Uses Prisma ORM with MongoDB.

#### API Endpoints

- **Authentication**: `/api/auth`
- **Users**: `/api/users`
- **Posts**: `/api/posts`
- **Chats**: `/api/chats`
- **Messages**: `/api/messages`

#### Data Models (Prisma Schema)

- **Post**: Represents a property listing.
- **PostDetail**: Contains detailed information about a post.
- **SavedPost**: Represents a saved post by a user.
- **User**: Represents a user in the system.
- **Chat**: Represents a chat between users.
- **Message**: Represents messages within a chat.

## Frontend

The frontend of the Real Estate App is built with React and is located in the `/client` directory. It interacts with the backend API to provide a seamless user experience.

### Components

- **Card**: Displays individual property information.
- **Chat**: Manages user conversations.
- **Filter**: Provides search filters for property listings.
- **List**: Displays a list of properties.
- **Map**: Renders a map showing property locations.
- **Navbar**: The navigation bar for the app.
- **Pin**: Custom map pin for properties.
- **SearchBar**: Search bar for filtering properties.
- **Slider**: Image slider for property details.
- **UploadWidget**: Handles image uploads.

### Routes

- **HomePage**: The landing page.
- **ListPage**: Displays filtered property listings.
- **SinglePage**: Detailed view of a single property.
- **Login**: User login page.
- **Register**: User registration page.
- **ProfilePage**: Displays user profile information.
- **ProfileUpdatePage**: Allows users to update their profile information.
- **NewPostPage**: Form for adding new property listings.
- **Layout**: Shared layout for authenticated routes.

### Context

- **AuthContext**: Manages user authentication state.
- **SocketContext**: Manages socket connections for real-time communication.

### APIs

- **API Requests**: Managed through `apiRequest.js` in the `/lib` folder.
- **Loaders**: Data loading functions for routes, implemented in `loaders.js`.
- **Notification Store**: Manages state for notifications in `notificationStore.js`.

## Usage

### Authentication

- **Register**: Create an account to access more features.
- **Login**: Log in to save properties and add new listings.
- **Update Profile**: Update user information such as username, email, and avatar.

### Property Listings

- **View Listings**: Browse and search properties on the platform.
- **Save Listings**: Save properties to your profile for later viewing.
- **Add Listings**: Authenticated users can add new property listings.

### Real-Time Communication

- **Chat**: Users can communicate with property owners or other users in real-time.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.