# Real Estate App Frontend

This project is a responsive real estate listing platform that allows users to browse, search, and save property listings. Users can also register, log in, update their profiles, and add new property listings. The platform is built using React and various other modern web technologies.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [APIs](#apis)
- [Components](#components)
- [Routes](#routes)
- [Context](#context)
- [License](#license)

## Features

- **User Authentication**: Users can register, log in, and update their profiles.
- **Real Estate Listings**: Users can view property listings, search by filters, and view details on individual listings.
- **Property Management**: Authenticated users can add new listings.
- **Responsive Design**: The platform is designed to work on a variety of screen sizes.
- **Notifications**: Snackbar notifications for user interactions like saving posts, updating profiles, etc.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Router**: For handling routing and navigation.
- **Scss**: For styling components.
- **Notistack**: For providing snackbar notifications.
- **React Hook Form**: For managing form states and validations.
- **DOMPurify**: To sanitize HTML content.
- **Cloudinary**: For handling image uploads.
- **Axios**: For making HTTP requests to the backend API.
- **Socket.io**: For real-time communication.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Boamah-Powers/real-estate-app.git
   cd real-estate-app/client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
/client
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── /node_modules
├── /public
├── /src
│   ├── App.jsx
│   ├── index.scss
│   ├── layout.scss
│   ├── main.jsx
│   ├── response.scss
│   ├── /components
│   ├── /context
│   ├── /lib
│   ├── /routes
```

### Components

- **Card** (`/components/card`): Displays individual property information.
- **Chat** (`/components/chat`): Manages user conversations.
- **Filter** (`/components/filter`): Provides search filters for property listings.
- **List** (`/components/list`): Displays a list of properties.
- **Map** (`/components/map`): Renders a map showing property locations.
- **Navbar** (`/components/navbar`): The navigation bar for the app.
- **Pin** (`/components/pin`): Custom map pin for properties.
- **SearchBar** (`/components/searchBar`): Search bar for filtering properties.
- **Slider** (`/components/slider`): Image slider for property details.
- **UploadWidget** (`/components/uploadWidget`): Handles image uploads.

### Routes

- **HomePage** (`/routes/homePage`): The landing page.
- **ListPage** (`/routes/listPage`): Displays filtered property listings.
- **SinglePage** (`/routes/singlePage`): Detailed view of a single property.
- **Login** (`/routes/login`): User login page.
- **Register** (`/routes/register`): User registration page.
- **ProfilePage** (`/routes/profilePage`): Displays user profile information.
- **ProfileUpdatePage** (`/routes/profileUpdatePage`): Allows users to update their profile information.
- **NewPostPage** (`/routes/newPostPage`): Form for adding new property listings.
- **Layout** (`/routes/layout`): Shared layout for authenticated routes.

### Context

- **AuthContext** (`/context/AuthContext.jsx`): Manages user authentication state.
- **SocketContext** (`/context/SocketContext.jsx`): Manages socket connections for real-time communication.

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

This project is licensed under the MIT License.