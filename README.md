Dashboard Task
This project is a front-end application that uses React, Vite, and JSON Server for a mock backend. It provides a development environment with both the Vite development server and a mock REST API powered by json-server.

Features
React 18: A popular JavaScript library for building user interfaces.
Vite: A fast build tool for modern web development.
json-server: A mock REST API for development purposes.
Material UI: A React UI framework for building modern, responsive designs.
Prerequisites
Before running the project, ensure you have the following installed:

Node.js: Version 16 or higher.
npm: Node's package manager (or yarn).
Installation
Clone the repository:

Install the dependencies:

npm install
Available Scripts
npm run dev
Runs both the Vite development server and json-server (mock API) concurrently:

The frontend will be served at http://localhost:3000.
The mock API will be available at http://localhost:5000.
npm run build
Builds the project for production by first compiling the TypeScript files and then running the Vite build process.

npm run lint
Runs ESLint to check the code for any issues or violations of style rules.

npm run preview
Runs the preview of the production build of the app (after using npm run build).

npm run start:server
Starts the json-server mock API on port 5000. This is used when you need to mock your backend for development.

Project Structure
src/: Contains the source code for the React app.
public/: Public assets (e.g., index.html, images).
db.json: The file that contains mock data for the json-server API.
vite.config.ts: Configuration file for Vite.
tsconfig.json: TypeScript configuration file.
eslint.json: ESLint configuration file.
Development
Start the development environment with the following command:

npm run dev
The application will be available at http://localhost:3000.

The mock API will be available at http://localhost:5000.

License
This project is open-source and available under the MIT License.

This README file should help you or other developers understand how to work with the project, the available scripts, and the setup process. Feel free to add more project-specific details as necessary.
