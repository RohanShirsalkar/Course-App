# Course Crat Web Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setting Up the Development Environment](#setting-up-the-development-environment)
5. [Running the Application](#running-the-application)
6. [Starting Json Server](#starting-json-server)

## Introduction

Welcome to the documentation for Course Crat, a web application designed to manage and display course information. This document provides an overview of the technologies used, project structure, and instructions for setting up and running the application.

## Technologies Used

- **Vite React:** The project is built using Vite, a fast development server and build tool for React applications.
- **Json Server:** Used for handling data and providing a RESTful API for the application.
- **Axios:** Enables making HTTP requests from the React application.
- **React-Redux:** Implements application state management.
- **Redux Toolkit:** Simplifies Redux setup and reduces boilerplate code.
- **HTML and SCSS:** Utilized for markup and styling.

## Project Structure

The project structure is organized for clarity and maintainability. Key directories include:

- **src:** Contains the React application source code.
- **public:** Holds static assets.
- **db.json:** JSON file serving as the database for Json Server.
- **scss:** Contains SCSS files for styling.

## Setting Up the Development Environment

Before running the application, ensure that Node.js and npm are installed on your machine. You can install them by visiting the [Node.js website](https://nodejs.org/).

After installing Node.js and npm, run the following command in your project directory to install dependencies:

npm install

## Running the Application

To start the application, run the following command:

npm run dev

## Starting Json Server

To start Json Server and provide the necessary data for the application, run the following command in a separate terminal in the project directory:

json-server --watch db.json
