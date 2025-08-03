# Welcome to the Multi-Theme Switcher App

This is a modern React (TypeScript) web application that allows you to switch between three distinct themes, each with its own unique layout, fonts, spacing, and component structure. You can easily toggle between Minimalist, Dark Mode, and Colorful themes based on your preference.

You can check out the live app here:  
https://multy-theme-switcher.netlify.app/

---

## Features

- Three visually and structurally distinct themes (Minimalist, Dark, Colorful)
- Fully responsive design for a seamless experience on all device sizes
- Theme state persistence using localStorage
- Routing with React Router: Home, About, Contact pages
- Fetch sample product data from the Fake Store API
- Smooth animated transitions between themes
- Built with React, TypeScript, CSS Modules, and React Context API for state management
- Accessibility-friendly with keyboard navigable controls and semantic markup

---

## Folder Structure Overview

- **components** – Contains reusable UI components like Header, Button, Card that can be used throughout the app.

- **context** – Holds React Context files, specifically to manage and provide the theme state globally.

- **hooks** – Custom React hooks for reusable logic such as syncing state with localStorage.

- **layout** – Different layout components that correspond to each theme, implementing distinct structure and styling.

- **pages** – Defines the main route pages like Home, About, and Contact.

- **routes** – Contains routing configuration, setting up routes for navigation between pages.

- **styles** – Global and theme-specific CSS files; includes CSS variables and base styling.

- **types** – TypeScript declaration files defining types used across the app (like theme types).

- **assets** – Static assets such as images and icons used in the app.

- **App.tsx** – The root React component coordinating theming, routing, and layout.

- **main.tsx** – Entry point that renders the React application.

---

## Getting Started

Follow the steps below to get the project running locally:

