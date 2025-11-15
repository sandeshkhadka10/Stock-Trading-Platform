# Stock Trading Platform

A comprehensive MERN-based stock trading platform inspired by ZERODHA, designed to provide users with hands-on learning of trading mechanisms, portfolio management, and stock market fundamentals using static stock data.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Setup Procedure](#setup-procedure)
- [Project Structure](#project-structure)
- [Sample Static Data](#sample-static-data)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Static Stock Data** - Pre-defined stocks with realistic market data for learning
- **User Authentication** - Secure signup, login, and profile management
- **Trading Dashboard** - Intuitive interface for buying and selling stocks
- **Portfolio Management** - Track holdings, performance, and diversification
- **Order Management** - Place, modify, and cancel orders with status tracking
- **Market Analysis** - Charts and price trends visualization
- **Watchlist** - Save and monitor favorite stocks
- **Transaction History** - Complete trading records and statements
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Educational Focus** - Learn trading mechanics without real money involvement

---

## Tech Stack

### Frontend
- **HTML**
- **CSS**
- **BootStrap**
- **React.js** - UI library for building dynamic interfaces
- **Context API** - State management
- **Axios** - HTTP client for API requests
- **Chart.js / TradingView Lightweight Charts** - Stock charting and visualization


### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for REST APIs
- **MongoDB** - NoSQL database for data persistence
- **JWT** - Secure authentication tokens
- **Mongoose** - MongoDB object modeling

### Additional Tools
- **dotenv** - Environment variable management
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)
- Git

---

## Setup Procedure

Follow these steps to set up and run the Stock Trading Platform:

### 1. Clone the Repository

```bash
git clone https://github.com/sandeshkhadka10/Stock-Trading-Platform.git
cd Stock-Trading-Platform
```

### 2. Setup Backend

#### Navigate to the backend directory:
```bash
cd backend
```

#### Install dependencies:
```bash
npm install
```

#### Create a `.env` file in the backend directory:
```env
# Database
MONGO_URL =mongodb+srv://<username>:<password>@cluster.mongodb.net/stock_trading_db
# OR for local MongoDB
MONGO_URL =mongodb://localhost:27017/stock_trading_db

# JWT
SESSION_SECRET==your_jwt_secret_key_here

EMAIL_USER=
EMAIL_PASSWORD=

```

#### Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

---

### 3. Setup Dashboard

#### Open a new terminal and navigate to the frontend directory:
```bash
cd dashboard
```

#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm start
```

The dashboard will run on `http://localhost:3000`

---

### 3. Setup Frontend

#### Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3001`

---


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **Author:** Sandesh Khadka
- **GitHub:** [sandeshkhadka10](https://github.com/sandeshkhadka10)

---

## Disclaimer

⚠️ **Educational Purpose Only**

This is an educational project designed to teach MERN stack development and stock trading concepts. It uses **static/dummy data** and is NOT intended for real trading. 

- No real money is involved
- Prices are simulated and not real-time
- This is a learning tool, not a financial platform
- Always consult with a financial advisor for real investments

---

*Inspired by ZERODHA - Building a comprehensive stock trading platform using MERN stack with static data for learning purposes.*