# Barter - A Web Service for Item Exchange

Barter is a web service that allows users to upload items they want to exchange and find other users' items for potential swaps. This README provides an overview of the project's structure, how to set it up, and basic usage instructions.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)

## Project Overview

Barter is built using Node.js, Express.js, and MongoDB. The project is organized into the following components:

- **Routes**: The API routes define how users can interact with the service. We have routes for users, items, and item exchanges.

- **Controllers**: Controllers handle the business logic for each route. For example, they handle user registration, item creation, and exchange management.

- **Models**: MongoDB models define the structure of the data. We have models for users, items, and exchanges.

- **Swagger Documentation**: The project uses Swagger for API documentation. You can access the documentation by visiting `https://swagger.io` in your web browser.

## Prerequisites

Before you can run the project, you need to have the following software installed on your machine:

- Node.js and npm
- MongoDB (Make sure MongoDB is running)
- Git (optional for cloning the repository)
- Swagger (for API documentation)

## Getting Started

Follow these steps to set up and run the Barter web service:

1. Clone the repository (if you haven't already):
2. Install project dependencies:
    ```shell
    npm install
3. Start the Node.js server:
    ```shell
    npm run dev

## API Documentation

Overview of available endpoints:

- **/user**: User-related operations.
    - Use this endpoint to manage user data, including listing users and creating new users.

- **/exchange**: Exchange-related operations.
    - This endpoint handles the creation and management of exchanges. An exchange refers to two advertised objects that users want to swap with each other.

- **/advertisement**: Advertisement-related operations.
    - Use this endpoint to manage advertisements for items available for exchange. It allows users to list items they want to trade with others.


