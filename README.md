# AI Genius Backend

A secure backend API built with Node.js, Express, and MongoDB Atlas implementing JWT authentication, refresh tokens, and Role-Based Access Control (RBAC).

---

## Features

- User Registration with encrypted passwords (bcrypt)
- User Login with JWT authentication
- Access Token + Refresh Token system
- HTTP-only cookie based refresh token storage
- Role-Based Access Control (RBAC)
  - Free_User
  - Premium_User
  - Admin
- Protected AI routes
- Middleware-based authentication system
- MongoDB Atlas cloud database integration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt.js
- cookie-parser
- dotenv

---

##  Project Structure
AI-GENIUS-BACKEND

├── server.js

├── config/

│   └── db.js

├── models/

│   └── User.js

├── middleware/

│   ├── authMiddleware.js

│   └── roleMiddleware.js

├── routes/

│   └── authRoutes.js

│   └── aiRoutes.js

├── controllers/

│   └── authController.js


---

## Authentication Flow

1. User registers → password is hashed
2. User logs in → receives JWT access token
3. Refresh token stored in HTTP-only cookie
4. Protected routes require valid token
5. Role-based middleware controls access

---

## API Endpoints

### Auth Routes

#### Register
POST /api/auth/register
#### Login

POST /api/auth/login


#### Refresh Token

POST /api/auth/refresh


---

### AI Routes

#### Free Model (All users)

GET /api/ai/free-model


#### Premium Model

POST /api/ai/premium-model


#### Admin Only Route

DELETE /api/ai/purge-cache


---

## Environment Variables

Create `.env` file:

PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

ACCESS_TOKEN_EXPIRES=15m

REFRESH_TOKEN_EXPIRES=7d

---

## Run Project Locally

```bash
npm install
npm run dev
