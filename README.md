# 🛡️ RPG Creature Search App

A modern, responsive web application that allows users to search for fantasy creatures by **Name** or **ID**. This project was developed as part of the freeCodeCamp "Build an RPG Creature Search App" certification.

---

## 🌐 Live Demo
[View the Live Project Here](https://LuisMiguelMiranda92.github.io/
rpg-creature-search-app-freeCodeCamp-project/)

## 🚀 Features

* **Dynamic Search:** Fetches real-time data from the freeCodeCamp RPG Creature API.
* **Intelligent UI:** Automatically updates creature names, IDs, physical stats, and base attributes.
* **Type Badges:** Dynamically generates individual HTML elements for creature types (e.g., FIRE, WATER, GRASS).
* **Error Handling:** Includes robust logic to handle "Not Found" states with UI resets and alerts.
* **Modern Layout:** A clean, card-based interface optimized for both desktop and mobile viewing.

---

## 🛠️ Built With

This project represents a collaborative effort between human logic and AI-assisted styling:

* **HTML5:** Structured the semantic layout of the search interface and data display.
* **TypeScript:** I authored the core logic using **TypeScript**. I focused on type safety, efficient DOM caching (selecting elements at the top level for performance), and asynchronous `async/await` patterns.
* **CSS3:** The visual design and responsive layout were generated with the assistance of **AI** to create a professional, "Pokedex-style" aesthetic.

---

## 📋 Technical Highlights

* **DOM Caching:** Elements are selected once at the top of the file to prevent redundant DOM tree searches during user interaction.
* **Clean Architecture:** Separated the fetching logic (`fetchData`) from the UI rendering (`updateUI`) and the error state handling (`resetUI`).
* **Dynamic Element Injection:** Instead of using flat strings, the app uses `document.createElement()` to inject type badges, ensuring the DOM structure meets strict testing requirements.

---

## 📸 How It Works

1.  Enter a creature name (e.g., "Pikachu") or an ID (e.g., "25") into the search bar.
2.  Click the **Search Button**.
3.  The app sends a fetch request to the API.
4.  On success, the creature
