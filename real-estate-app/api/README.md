# Real Estate App Backend

This repository contains the backend of a Real Estate application, built using Node.js, Express, Prisma ORM, and Socket.io for real-time communication. The backend handles user authentication, chat functionality, and the management of real estate posts.

## Backend Structure

```
/real-estate-app
│
├── api/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── chat.controller.js
│   │   ├── message.controller.js
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── lib/
│   │   └── prisma.js
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── chat.routes.js
│   │   ├── message.routes.js
│   │   ├── post.routes.js
│   │   └── user.routes.js
│   └── app.js
│
└── socket/
    └── app.js
```

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm or yarn
- Prisma CLI
- PostgreSQL (or another compatible database)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Boamah-Powers/real-estate-app.git
   ```

2. Navigate to the `api` directory:

   ```bash
   cd real-estate-app/api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:

   Create a `.env` file in the `/real-estate-app/api` directory and configure the following environment variables:

   ```
   DATABASE_URL=your_database_url
   JWT_SECRET_KEY=your_secret_key
   ```

5. Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev
   ```

6. Start the server:

   ```bash
   npm start
   ```

The server will run on `http://localhost:8800`.

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in an existing user
- **POST** `/api/auth/logout` - Log out the current user

### Users

- **GET** `/api/users/` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **PUT** `/api/users/:id` - Update user by ID
- **DELETE** `/api/users/:id` - Delete user by ID
- **GET** `/api/users/notifications` - Get unread chat notifications
- **POST** `/api/users/save` - Save or unsave a post
- **GET** `/api/users/profile-posts` - Get user's posts and saved posts

### Posts

- **GET** `/api/posts/` - Get all posts with optional filtering
- **GET** `/api/posts/:id` - Get post by ID
- **POST** `/api/posts/` - Create a new post
- **PUT** `/api/posts/:id` - Update post by ID
- **DELETE** `/api/posts/:id` - Delete post by ID

### Chats

- **GET** `/api/chats/` - Get all chats for the logged-in user
- **GET** `/api/chats/:id` - Get chat by ID
- **POST** `/api/chats/` - Create a new chat
- **PUT** `/api/chats/:id/read` - Mark chat as read

### Messages

- **POST** `/api/messages/:chatId` - Add a new message to a chat

## Real-Time Communication

The Socket.io server handles real-time communication, allowing users to send and receive messages instantly.

### Socket.io Events

- **newUser**: Registers a new user to the online users list.
- **sendMessage**: Sends a message to the specified receiver.
- **disconnect**: Removes a user from the online users list upon disconnection.

The Socket.io server listens on `http://localhost:4000`.

## Prisma

Prisma ORM is used for database interactions. The Prisma schema is defined in the `prisma/schema.prisma` file. Make sure to run migrations and generate the Prisma client:

```bash
npx prisma migrate dev
npx prisma generate
```

## Middleware

### `verifyToken.js`

This middleware is used to protect routes that require authentication. It verifies the JWT token passed in cookies and attaches the user's ID to the request object.

## Environment Variables

Make sure to set up the following environment variables:

- `DATABASE_URL`: The connection string for your database.
- `JWT_SECRET_KEY`: The secret key used for JWT token generation and verification.

## Conclusion

This README.md provides an overview of the Real Estate App backend. Ensure you have configured the necessary environment variables and have set up your database before running the application.