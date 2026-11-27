
# Enterprise Cloud Service Catalog

## Project Description
A web application developed using Node.js and Express
to display cloud services and system health information.

## Technologies Used
- Node.js
- Express.js
- HTML
- CSS
- JavaScript

## Features
- Enterprise Cloud Service Catalog interface
- Cloud Services JSON API
- System Status JSON API
- Local server on port 8080
- Cloud deployment compatibility

## API Endpoints

### 1. Cloud Services
GET /api/services

Returns details of four cloud services.

### 2. System Status
GET /api/status

Returns application health information.

## Port Configuration: Local vs Vercel

During local development, the application uses port 8080 through the expression `process.env.PORT || 8080`. If no PORT environment variable is available, Node.js starts the Express server on port 8080. We can access the application using http://localhost:8080. In production, platforms such as Vercel manage the execution environment and provide the required configuration for incoming requests. Applications should not assume that a fixed port is available in the cloud. Using `process.env.PORT` makes the application adaptable to its deployment environment. This approach supports local testing and cloud deployment without manually changing the server code between environments.

## Developer
Dhwani Puthran
