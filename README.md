# Yo-Yo Dance Academy Website

This project is a simple, responsive website for a fictional dance academy called "Yo-Yo Dance Academy". It is built with a Node.js and Express.js backend, uses Pug for server-side templating, and integrates with MongoDB for data storage.

## Features

*   **Home Page:** A welcoming landing page for the dance academy.
*   **Contact Form:** A functional contact form that allows users to submit their inquiries.
*   **Database Integration:** Contact form submissions are saved directly to a MongoDB database.
*   **Static Asset Serving:** Serves CSS, client-side JavaScript, and images.

## Technology Stack

*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB with Mongoose ODM
*   **Template Engine:** Pug (formerly Jade)
*   **Development:** `nodemon` for automatic server restarts

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/en/)
*   [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/subhankar55/DanceWebsite.git
cd DanceWebsite
```

### 2. Install Dependencies

Install the required npm packages.

```bash
npm install
```

### 3. Set up MongoDB

Make sure your local MongoDB server is running. The application will connect to a database named `contactDance`. Mongoose will automatically create this database and the `contacts` collection when the first document is saved.

The default connection string used in `app.js` is `mongodb://127.0.0.1:27017/contactDance`. If your MongoDB instance is running on a different host or port, you will need to update this string.

### 4. Start the Server

You can start the server using `node`.

```bash
node app.js
```

For development, you can use `nodemon` to automatically restart the server on file changes (if you have it installed globally or run it via an npm script).

```bash
nodemon app.js
```

The application will be running at `http://localhost:80`.

## Project Structure

```
├── app.js                # Main application file (server, routes, DB connection)
├── package.json          # Project metadata and dependencies
├── static/               # Contains all static files (CSS, JS, images)
│   ├── style.css         # Main stylesheet for the website
│   └── ...
├── Views/                # Contains Pug template files
│   ├── base.pug          # Base layout template for other pages
│   ├── Home.pug          # Home page template
│   └── Contact.pug       # Contact page template
└── README.md             # This file
```