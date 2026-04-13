# TechShop 🛒

A modern e-commerce web application for browsing and purchasing tech products, built with React, Redux, and Clerk authentication.

🔗 **Live Demo:** [techshop-ten.vercel.app](https://techshop-ten.vercel.app)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Routes](#routes)

---

## About

**TechShop** is a fully functional e-commerce frontend application where users can browse tech products, view product details, manage a shopping cart, and authenticate via Clerk. State is managed globally with Redux Toolkit.

---

## Features

- 🏠 **Home page** — browse all available products
- 🔍 **Single product page** — detailed view per product
- 🛒 **Shopping cart** — add, remove, and manage items
- 🔐 **Authentication** — sign in / sign up via Clerk
- 📦 **Global state** — cart and product state managed with Redux Toolkit
- 📱 **Responsive design** — built with Tailwind CSS and MUI

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 6 | Build tool / dev server |
| React Router DOM | 7 | Client-side routing |
| Redux Toolkit | 2 | Global state management |
| Clerk | 5 | Authentication |
| MUI (Material UI) | 6 | UI components |
| Tailwind CSS | 3 | Styling |
| Axios | 1 | HTTP client |
| react-icons | 5 | Icon library |

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm v9 or newer
- A free [Clerk](https://clerk.com) account for authentication keys

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Bozidar99/techshop.git

# 2. Navigate to the project folder
cd techshop

# 3. Install dependencies
npm install
```

---

## Environment Variables

Create a `.env` file in the root of the project and add your Clerk publishable key:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

> You can get your key from the [Clerk Dashboard](https://dashboard.clerk.com).

---

## Running the App

### Development mode

```bash
npm run dev
```

App runs at `http://localhost:5173`

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
techshop/
├── public/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx        # Product listing
│   │   ├── SingleProductPage.jsx  # Product detail
│   │   └── CartPage.jsx        # Shopping cart
│   ├── store/
│   │   └── store.js            # Redux store setup
│   ├── App.jsx                 # Root layout
│   ├── main.jsx                # Entry point + router + providers
│   └── index.css
├── .env                        # Environment variables (not committed)
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Routes

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Browse all products |
| `/singleProduct/:id` | SingleProductPage | Product detail view |
| `/cart` | CartPage | Shopping cart |

---

## Author

**Bozidar Bajovic** — [@Bozidar99](https://github.com/Bozidar99)

---

## License

ISC
