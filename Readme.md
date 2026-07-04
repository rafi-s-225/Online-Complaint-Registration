# Online Complaint Registration

A simple full-stack project for submitting and managing complaints online.

## Features
- User-friendly complaint submission form
- Separate frontend and backend structure
- MongoDB connection support for the backend

## Project Structure
- backend/ - Express server and API logic
- frontend/ - React + Vite user interface

## Getting Started

### 1. Install dependencies

Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd frontend
npm install
```

### 2. Run the app

Start the backend:
```bash
cd backend
node server.js
```

Start the frontend:
```bash
cd frontend
npm run dev
```

### 3. Environment setup
Create a `.env` file in the backend folder and add your MongoDB connection string:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Technologies Used
- React
- Vite
- Express.js
- MongoDB
- Mongoose
