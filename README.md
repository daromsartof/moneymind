# Moneymind 

## Description

Moneymind is a comprehensive personal finance management application built with modern web technologies. 
This application allows users to manage their financial transactions, budgets, and categories with ease. 
The backend is powered by Express.js and MongoDB, providing a robust and scalable solution for personal accounting needs.

## Features

- **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
- **User Management:** Manage user information and ensure data security.
- **Category Management:** Create and manage categories for organizing transactions.
- **Transaction Management:** Record and categorize income and expense transactions.
- **Budget Management:** Set and track budgets for different categories over specific periods.
- **Data Security:** All passwords are hashed using bcrypt, ensuring user data protection.
- **RESTful API:** Provides a well-structured RESTful API for easy integration with frontend applications.

## Technologies Used

- **Backend:**
  - [Express.js](https://expressjs.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [JSON Web Tokens (JWT)](https://jwt.io/)
  - [bcryptjs](https://github.com/dcodeIO/bcrypt.js/)
- **Database:**
  - [MongoDB](https://www.mongodb.com/)
- **Environment Configuration:**
  - [dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/daromsartof/moneymind.git
   cd moneymind```

2. install dependencies:

   ```bash
   npm install```

3. Set up environment variables:
   ```bash
    MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000```
4. Start the server:
```bash
    npm start
```
