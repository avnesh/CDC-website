# Mine to Action Website

A responsive company website featuring facility management, manpower services, and dehydrated food trading.

## Project Structure

- `index.html`: Home page
- `about.html`, `services.html`, `products.html`, `contact.html`: Inner pages
- `partials/`: Reusable header and footer HTML fragments
- `assets/`: CSS styles and JavaScript logic
- `images/`: Website images and assets

## How to Run

This project uses client-side JavaScript (`fetch`) to load the header and footer dynamically. Because of browser security restrictions (CORS), **you cannot simply open the HTML files directly from the file system**. You must run them via a local web server.

### Option 1: Using Python (Recommended)

If you have Python installed:

1.  Open a terminal in the project directory.
2.  Run the following command:
    ```bash
    python -m http.server 8000
    ```
3.  Open your browser and navigate to: [http://localhost:8000](http://localhost:8000)

### Option 2: Using Node.js (http-server)

If you have Node.js installed:

1.  Open a terminal.
2.  Run (using `npx` so no installation is required):
    ```bash
    npx http-server .
    ```
3.  Open the URL shown in the terminal (usually [http://localhost:8080](http://localhost:8080)).

## Features

- Dynamic loading of Header and Footer.
- Responsive design.
- Contact form (frontend only).
