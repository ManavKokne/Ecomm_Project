# Rabbit - Modern E-Commerce Platform

A full-stack e-commerce application built with React, Node.js, and MongoDB, featuring comprehensive product management, secure payment processing, and an intuitive admin dashboard.

## Features

### 🛒 Customer Features
- **User Authentication** - Secure registration and login with JWT
- **Product Browsing** - Browse products with filtering and search capabilities
- **Shopping Cart** - Add, remove, and manage items in cart
- **Secure Checkout** - PayPal payment integration
- **Order Management** - Track order status and history
- **User Profile** - Manage personal information and preferences
- **Newsletter Subscription** - Stay updated with latest products
- **Responsive Design** - Mobile-first design approach

### 👨‍💼 Admin Features
- **Admin Dashboard** - Comprehensive overview of store metrics
- **Product Management** - CRUD operations for products
- **User Management** - View and manage registered users
- **Order Management** - Track and update order statuses
- **Image Upload** - Cloudinary integration for product images
- **Inventory Tracking** - Monitor stock levels and product availability

### 🔧 Technical Features
- **Real-time Updates** - Dynamic content updates
- **Guest Shopping** - Shopping without registration
- **Toast Notifications** - User-friendly feedback system
- **Multiple Color/Size Variants** - Product customization options
- **Search and Filtering** - Advanced product discovery
- **Data Seeding** - Pre-populated sample data

## Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Redux Toolkit** - State management with modern Redux patterns
- **React Router** - Client-side routing and navigation
- **Axios** - HTTP client for API communication
- **React Icons** - Comprehensive icon library
- **Sonner** - Toast notification system
- **PayPal React SDK** - Payment processing integration

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling library
- **JWT** - JSON Web Tokens for authentication
- **Bcryptjs** - Password hashing and encryption
- **Cloudinary** - Cloud-based image upload and management
- **Multer** - Middleware for handling multipart/form-data
- **CORS** - Cross-Origin Resource Sharing support
- **Dotenv** - Environment variable management

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ManavKokne/Ecomm_Project.git
   cd Ecomm_Project
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
MONGO_URI=mongodb://localhost:27017/ecommerce
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5000

# PayPal Configuration (optional)
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

## Running the Application

### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will start on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`

### Production Mode

1. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```

## Database Seeding

To populate the database with sample data:

```bash
cd backend
npm run seed
```

This will create:
- Sample products
- Default admin user (admin@example.com / 123456)
- Clear existing data

## API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/search/:query` - Search products

### Cart
- `GET /api/cart/:userId` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/:userId/:productId` - Remove cart item

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/user/:userId` - Get user orders
- `GET /api/orders/:id` - Get single order

### Admin Routes
- `GET /api/admin/users` - Get all users
- `GET /api/admin/products` - Get all products (admin)
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `GET /api/admin/orders` - Get all orders

### File Upload
- `POST /api/upload` - Upload image to Cloudinary

## Project Structure

```
Ecomm_Project/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── data/
│   │   └── products.js        # Sample product data
│   ├── middleware/
│   │   ├── auth.js            # Authentication middleware
│   │   └── admin.js           # Admin authorization middleware
│   ├── models/
│   │   ├── User.js            # User model
│   │   ├── Product.js         # Product model
│   │   ├── Cart.js            # Cart model
│   │   ├── Order.js           # Order model
│   │   └── Subscriber.js      # Newsletter subscriber model
│   ├── routes/
│   │   ├── userRoutes.js      # User authentication routes
│   │   ├── productRoutes.js   # Product routes
│   │   ├── cartRoutes.js      # Shopping cart routes
│   │   ├── orderRoutes.js     # Order management routes
│   │   ├── uploadRoutes.js    # File upload routes
│   │   ├── adminRoutes.js     # Admin user management
│   │   └── ...
│   ├── seeder.js              # Database seeding script
│   └── server.js              # Express server entry point
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Admin/         # Admin dashboard components
│   │   │   ├── Cart/          # Shopping cart components
│   │   │   ├── Common/        # Shared components
│   │   │   ├── Layout/        # Layout components
│   │   │   └── Products/      # Product-related components
│   │   ├── pages/             # Page components
│   │   ├── redux/
│   │   │   └── slices/        # Redux store slices
│   │   ├── App.jsx            # Main App component
│   │   └── main.jsx           # Application entry point
│   ├── package.json
│   └── vite.config.js         # Vite configuration
└── README.md
```

## Default Admin Credentials

After running the seeder script:
- **Email:** admin@example.com
- **Password:** 123456

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email your-email@example.com or create an issue in the GitHub repository.

## Screenshots

### Home Page
*Browse featured products and new arrivals*

### Admin Dashboard
*Comprehensive management interface for products, orders, and users*

### Shopping Cart
*Intuitive cart management with real-time updates*

---

**Built with ❤️ by [Manav Kokne](https://github.com/ManavKokne)**