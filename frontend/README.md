# 🛍️ Shopper - React E-Commerce Application

Shopper is a responsive e-commerce web application built with **React.js**.  
The project was developed as a hands-on learning project to understand important React concepts such as **components, props, state management, Context API, React Router, dynamic routing, and reusable UI components**.

The application allows users to browse products by category, view individual product details, select product sizes, add products to a shopping cart, modify quantities, and calculate cart totals.

---

## 🚀 Features

- 🏠 Modern e-commerce home page
- 👕 Men's product category
- 👗 Women's product category
- 🧒 Kids' product category
- 🔍 Dynamic product detail pages
- 🖼️ Product image gallery
- ⭐ Product rating display
- 📏 Product size selection
- 🛒 Add to Cart functionality
- 🔔 "Added to Cart" notification
- ➕ Increase product quantity
- ➖ Decrease product quantity
- ❌ Remove products from cart
- 🔢 Dynamic cart count in Navbar
- 💰 Automatic cart total calculation
- 🔐 Login / Signup UI
- 🧭 React Router based navigation
- 📱 Responsive design for desktop, tablet, and mobile

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM
- React Context API
- Vite

---

## 🧠 React Concepts Used

This project helped me practice and understand several important React concepts:

### Components

The application is divided into reusable components such as:

- Navbar
- Item
- Product
- ShopCategory
- Cart
- Login/Signup
- Footer

This makes the application easier to maintain and reuse.

### Props

Props are used to pass page-specific and product-specific information between components.

For example:

```jsx
<ShopCategory
  banner={men_banner}
  category="men"
/>
```

Here, `banner` and `category` are passed from the parent component to `ShopCategory`.

### Context API

The React Context API is used for global product and cart state management.

The `ShopContext` provides shared data and functions such as:

```js
all_product
cartItems
addToCart()
removeFromCart()
increaseQuantity()
decreaseQuantity()
getTotalCartAmount()
getTotalCartItems()
```

Because of Context API, components such as `Product`, `Cart`, and `Navbar` can access the same cart state without prop drilling.

### React Router

React Router is used for navigation between different pages.

Example routes:

```text
/
 /mens
 /womens
 /kids
 /product/:productId
 /cart
 /login
```

Dynamic routing is used for individual products:

```jsx
<Route
  path="/product/:productId"
  element={<Product />}
/>
```

So products can have URLs such as:

```text
/product/1
/product/7
/product/15
```

---

## 🛒 Cart Functionality

The shopping cart is managed globally using `ShopContext`.

When a user clicks **ADD TO CART**:

```text
Product Page
     ↓
addToCart(product.id)
     ↓
ShopContext
     ↓
cartItems updated
     ↓
Navbar cart count updated
     ↓
Cart page updated
```

The cart allows users to:

- Add products
- Increase quantity
- Decrease quantity
- Remove products
- View individual product totals
- View the complete cart total

---

## 📂 Project Structure

```text
src/
│
├── Components/
│   │
│   ├── Assets/
│   │   ├── all_product.js
│   │   ├── banner_mens.png
│   │   ├── banner_women.png
│   │   └── banner_kids.png
│   │
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── Item/
│   │   ├── Items.jsx
│   │   └── Items.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── Context/
│   └── ShopContext.jsx
│
├── Pages/
│   ├── CSS/
│   │   ├── ShopCategory.css
│   │   ├── Product.css
│   │   ├── Cart.css
│   │   └── Loginsignup.css
│   │
│   ├── Shop.jsx
│   ├── ShopCategory.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   └── Loginsignup.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

Open it in your browser to run the application.

---

## 🔄 Application Flow

```text
                    ShopContext
                         │
              Product + Cart State
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
      Navbar         Product.jsx      Cart.jsx
          │              │              │
     Cart Count      Add to Cart     +/- Quantity
          │              │           Remove Item
          │              │              │
          └──────────────┴──────────────┘
                         │
                    Shared State
```

---

## 🎯 Purpose of the Project

The main purpose of this project is to strengthen my understanding of React by building a practical application instead of learning concepts individually.

Through this project, I practiced:

- Component-based architecture
- Props and data passing
- `useState`
- `useContext`
- Context API
- Array methods such as `map()`, `filter()`, and `find()`
- Conditional rendering
- Event handling
- Dynamic routing
- Shared state management
- Responsive CSS
- Reusable component design

---

## 🔮 Future Improvements

Some features that can be added in future versions:

- User authentication
- Backend API integration
- Product search
- Product filtering and sorting
- Wishlist functionality
- Checkout page
- Shipping address management
- Payment gateway integration
- Order history
- Product reviews
- LocalStorage cart persistence
- Backend database integration

---

## 👨‍💻 Author

**Saurabh Tripathi**

Software Engineer | React Developer

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐.