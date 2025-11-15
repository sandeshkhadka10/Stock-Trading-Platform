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

### 4. Database Setup (MongoDB)

#### Option A: Local MongoDB
```bash
# Make sure MongoDB is running locally
mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Add it to your `.env` file as `MONGO_URL`

---

### 5. Initialize Sample Data (Optional)

The backend includes sample static stock data that will be loaded into the database automatically on first run. This includes:
- 50+ pre-defined stocks with realistic prices
- Sample user portfolios
- Historical price data for charting

---

### 6. Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

**Test Account:**
- Email: `demo@example.com`
- Password: `demo123` (or create your own account)

---

## Project Structure

```
Stock-Trading-Platform/
├── backend/
│   ├── models/              # Mongoose schemas (User, Stock, Order, Portfolio)
│   ├── routes/              # API endpoints
│   ├── controllers/         # Business logic
│   ├── middleware/          # Authentication, validation
│   ├── utils/               # Helper functions
│   ├── data/                # Static stock data (JSON files)
│   ├── .env                 # Environment variables
│   ├── server.js            # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Context API for state management
│   │   ├── services/        # API service calls
│   │   ├── styles/          # CSS files
│   │   ├── App.js           # Main app component
│   │   └── index.js         # React DOM render
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── public/
│
├── dashboard/               # (Optional) Dashboard directory
│
└── README.md
```

---

## Available Scripts

### Backend

```bash
# Start the server
npm start

# Start with nodemon (auto-reload)
npm run dev

# Run tests
npm test
```

### Frontend

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Stock Data (Static)
- `GET /api/stocks` - Get all available stocks
- `GET /api/stocks/:symbol` - Get specific stock data
- `GET /api/stocks/:symbol/chart` - Get historical price data for charting

### Trading
- `POST /api/orders/buy` - Place buy order
- `POST /api/orders/sell` - Place sell order
- `GET /api/orders` - Get user orders
- `PUT /api/orders/:orderId` - Modify order
- `DELETE /api/orders/:orderId` - Cancel order

### Portfolio
- `GET /api/portfolio` - Get portfolio summary
- `GET /api/portfolio/holdings` - Get all holdings
- `GET /api/portfolio/performance` - Get performance metrics

### Watchlist
- `GET /api/watchlist` - Get watchlist
- `POST /api/watchlist` - Add to watchlist
- `DELETE /api/watchlist/:stockId` - Remove from watchlist

---

## Sample Static Data

This project uses pre-defined static stock data for educational purposes. The data includes:

### Available Stocks
```
AAPL - Apple Inc.
GOOGL - Alphabet Inc.
MSFT - Microsoft Corporation
AMZN - Amazon.com Inc.
TSLA - Tesla Inc.
META - Meta Platforms Inc.
NVDA - NVIDIA Corporation
JPM - JPMorgan Chase & Co.
V - Visa Inc.
WMT - Walmart Inc.
... and many more
```

### Stock Information
- Company name and symbol
- Current price
- Day high/low
- 52-week high/low
- Market cap
- P/E ratio
- Historical price data (last 30 days)

### Data Location
Static data is stored in:
- `backend/data/stocks.json` - Stock master data
- `backend/data/historicalPrices.json` - Historical price data for charts

---

## Environment Variables

### Backend `.env`
```env
MONGODB_URI=mongodb://localhost:27017/stock_trading_db
PORT=5000
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_12345
CLIENT_URL=http://localhost:3000
```

### Frontend `.env`
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## How to Use

1. **Sign Up** - Create a new account with your email
2. **Explore Stocks** - Browse available stocks and view their details
3. **Add to Watchlist** - Save your favorite stocks for quick access
4. **Place Orders** - Buy and sell stocks using static prices
5. **Monitor Portfolio** - Track your holdings and performance
6. **View History** - Check your transaction history and statements
7. **Analyze Charts** - View price trends and historical data

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check MongoDB connection string in `.env`
- Verify IP whitelist in MongoDB Atlas (if using cloud)
- For local MongoDB: `mongod` should be running in another terminal

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Cannot Connect to Backend
- Verify backend is running on port 5000
- Check `REACT_APP_API_URL` in frontend `.env`
- Ensure CORS is enabled in backend
- Check browser console for errors

---

## Learning Objectives

This project helps you learn:

✅ **MERN Stack Development** - Full-stack JavaScript development  
✅ **Authentication** - User signup, login, and JWT tokens  
✅ **REST APIs** - Building and consuming APIs  
✅ **Database Design** - MongoDB collections and relationships  
✅ **State Management** - Using Context API for app state  
✅ **React Components** - Building reusable UI components  
✅ **Data Visualization** - Creating charts with Chart.js  
✅ **Trading Logic** - Order placement, portfolio tracking  
✅ **Real-World Application** - Building a feature-rich platform  

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
- **Email:** attkhadka551@gmail.com

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