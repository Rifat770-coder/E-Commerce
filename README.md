# QuickCart - Modern E-commerce Platform

A full-featured e-commerce platform built with Next.js 13+, MongoDB, Clerk authentication, and modern UI components.

## Features

### Frontend
- **Responsive Design**: Beautiful, mobile-first design using Tailwind CSS
- **Product Showcase**: Hero sections, product grids, and featured categories
- **Shopping Cart**: Real-time cart updates with persistent storage
- **User Authentication**: Secure authentication powered by Clerk
- **Admin Dashboard**: Product and order management interface
- **Search & Filtering**: Advanced product discovery features

### Backend
- **MongoDB Integration**: Robust database schema for products, orders, and users
- **API Routes**: RESTful APIs for all e-commerce operations
- **Webhook Support**: Real-time updates via Clerk and Stripe webhooks
- **Role-based Access**: Admin and customer role management

### Technology Stack
- **Framework**: Next.js 13+ with App Router
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand for cart state
- **Icons**: Lucide React
- **Payments**: Stripe integration ready
- **Background Jobs**: Inngest integration ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB instance
- Clerk account
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quickcart-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy `.env.local` and fill in your environment variables:
   ```bash
   cp .env.local .env.local
   ```

   Required environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `MONGODB_URI`
   - `WEBHOOK_SECRET`

4. **Database Setup**
   Ensure MongoDB is running and accessible via your `MONGODB_URI`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   ├── home/              # Homepage components
│   └── cart/              # Shopping cart components
├── lib/                   # Utility functions and configurations
│   ├── models/            # MongoDB models
│   └── utils.ts           # Helper functions
├── hooks/                 # Custom React hooks
└── middleware.ts          # Clerk middleware
```

## Key Features

### Homepage
- Dynamic hero carousel with product showcases
- Popular products grid with ratings and reviews
- Featured product categories
- Newsletter subscription

### Shopping Cart
- Persistent cart state using Zustand
- Real-time quantity updates
- Order summary with tax calculations
- Responsive design for all devices

### Authentication
- Secure user authentication via Clerk
- Role-based access control
- User profile management
- Social login support

### Admin Dashboard
- Product management (CRUD operations)
- Order tracking and management
- User management
- Analytics and reporting (coming soon)

## Database Schema

### Products
- Basic product information (name, description, price)
- Image management
- Category relationships
- Inventory tracking
- Reviews and ratings

### Orders
- Order lifecycle management
- Payment status tracking
- Shipping information
- Order history

### Users
- Clerk integration for authentication
- User profiles and preferences
- Address management
- Order history

## API Endpoints

- `GET /api/products` - Fetch products with filtering
- `POST /api/products` - Create new product (admin only)
- `GET /api/orders` - Fetch user orders
- `POST /api/orders` - Create new order
- `POST /api/webhook/clerk` - Handle Clerk user events

## Deployment

### Environment Variables for Production
Ensure all environment variables are set in your production environment:
- Database connection strings
- Authentication keys
- Payment processor keys
- Webhook secrets

### Build and Deploy
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email contact@greatstack.dev or join our community discussions.