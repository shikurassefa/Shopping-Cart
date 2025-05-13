# 🛒 Shopping Cart Application

A real-world e-commerce shopping cart built using **React** and **Zustand**, featuring:

- User authentication with persisted state
- Protected routes using Zustand and React Router
- Dynamic cart management (add/remove/update quantity)
- Product fetching from external API
- Custom hooks for form validation and data fetching
- Deployed via Vercel with GitHub integration

## 🚀 Live Demo

👉 [View Live App](https://your-app-name.vercel.app)

## 🧑‍💻 Tech Stack

- **React**
- **Zustand** for global state
- **React Router DOM**
- **Vercel** for deployment
- **FakeStoreAPI** for product data
- **CSS3** for styling

## 📦 Features

- 🔐 Login system with validation and protected routing
- 🛍️ Add/remove items to/from cart
- 🧮 Real-time cart quantity and total price updates
- 🔁 Cart persists between refreshes (localStorage via Zustand)
- ✍️ Custom `useForm` and `useFetch` hooks for reuse

## 🛠️ Getting Started

```bash
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app
npm install
npm run dev   # or npm start
