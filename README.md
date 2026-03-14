# Global Brand & Digital Expo

> A comprehensive B2B platform for brand exhibitions and digital commerce.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- Redis (optional)
- Python 3.8+ (for AI)

### Installation

```bash
# Clone the project
git clone <repository-url>
cd global-brand-expo

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Install AI dependencies
cd ../ai
pip install -r requirements.txt
```

### Configuration

```bash
# Copy environment files
cp backend/.env.example backend/.env
# Edit backend/.env with your database credentials
```

### Running the Application

```bash
# Frontend (development)
cd frontend
npm run dev

# Backend (development)
cd backend
npm run start:dev

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

## 📁 Project Structure

```
global-brand-expo/
├── frontend/           # Next.js 14 frontend
│   ├── src/
│   │   ├── app/     # App router pages
│   │   ├── components/
│   │   ├── store/   # Zustand state
│   │   ├── lib/     # Utilities
│   │   └── styles/
│   └── package.json
├── backend/           # NestJS 10 backend
│   ├── src/
│   │   ├── modules/ # Feature modules
│   │   └── ...
│   └── package.json
├── ai/               # Python AI services
│   └── requirements.txt
├── database/         # Database schema
│   └── schema.sql
└── docs/            # Documentation
```

## 🎯 Features

### Frontend (16 pages)
- 🏠 Home - Hero, Features, Stats
- 📦 Products - Listing, Detail
- 👥 Customers - Management
- 🎪 Exhibitions - Management
- 🎯 Leads - CRM
- 📊 Dashboard - Analytics
- 🛒 Cart & Orders
- 👤 Auth - Login/Register
- ℹ️ About & Contact
- ⚙️ Settings & Admin

### Backend (10 modules)
- 👤 Users - Authentication & management
- 📦 Products - CRUD & categories
- 👥 Customers - CRM
- 🎪 Exhibitions - Event management
- 🎯 Leads - Lead tracking
- 🛒 Orders - Order management
- 📧 Auth - JWT authentication
- 📊 Analytics - Business intelligence
- 📢 Marketing - Campaign management
- 📈 Analytics API

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State)
- Ant Design

### Backend
- NestJS 10
- TypeORM
- MySQL
- JWT Authentication
- Redis (Cache)
- Elasticsearch (Search)

### AI
- FastAPI
- Python
- PyTorch
- Transformers

## 📊 API Endpoints

### Users
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `GET /api/users/:id` - Get user
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products
- `GET /api/products` - List products
- `GET /api/products/featured` - Featured products
- `POST /api/products` - Create product
- `GET /api/products/:id` - Get product
- `PATCH /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Customers
- `GET /api/customers` - List customers
- `GET /api/customers/stats` - Customer statistics
- `POST /api/customers` - Create customer

### Orders
- `GET /api/orders` - List orders
- `GET /api/orders/stats` - Order statistics
- `POST /api/orders` - Create order

### Analytics
- `GET /api/analytics/overview` - Business overview
- `GET /api/analytics/sales` - Sales data
- `GET /api/analytics/customers` - Customer analytics

### Auth
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get profile (protected)

## 📄 License

MIT License - feel free to use this project for any purpose.

---

Built with ❤️ using Next.js, NestJS, and AI.
