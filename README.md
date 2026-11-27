# Enterprise Cloud Service Catalog

## Project Overview
The **Enterprise Cloud Service Catalog** is a web application developed using Node.js and Express.js. It provides information about cloud services and allows users to access service details and system status through REST API endpoints. The application is deployed on Vercel, a Cloud PaaS platform.

## Student Details
- **Name:** Dhwani Puthran
- **Registration Number:** 2648048
- **Course:** MSc Data Science
- **Subject:** Cloud Computing

## Technologies Used
- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- Git and GitHub
- Vercel (Cloud PaaS)

## Features
- Displays information about four cloud services.
- Provides a REST API to retrieve cloud service details.
- Provides a system status API.
- Supports local development and cloud deployment.
- Responsive and user-friendly interface.

## Cloud Services Included
1. **Amazon EC2** – Scalable virtual computing servers.
2. **AWS Lambda** – Serverless computing service.
3. **Amazon S3** – Cloud object storage service.
4. **Google Cloud Run** – Platform for deploying containerized applications.

## API Endpoints

| Endpoint | Description |
|---|---|
| `/api/services` | Returns the list of cloud services in JSON format. |
| `/api/status` | Returns application status and developer information. |

### Example API Responses

**GET /api/services**

Returns an array containing service ID, service name, category and pricing model.

**GET /api/status**

Returns the following information:
- Status: Operational
- Developer: Dhwani Puthran
- Environment: Cloud PaaS

## Local Development vs Cloud Deployment

During local development, the application uses port 8080 through the expression `process.env.PORT || 8080`. If no PORT environment variable is available, Node.js starts the Express server on port 8080. We can access the application using http://localhost:8080. In production, Vercel manages incoming HTTP requests through its deployment platform, so the application does not need to expose a fixed public port. The `process.env.PORT` setting keeps the server configurable in environments that provide a PORT value. This makes the same code easier to run locally and in different hosting environments without manually changing the port configuration. This helps maintain one portable codebase across environments.

## Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/DhwaniPuthran/cloud-catalog.git
   ```

2. Navigate to the project folder:
   ```bash
   cd cloud-catalog
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```text
   http://localhost:8080
   ```

## Project Deployment

**GitHub Repository:**  
https://github.com/DhwaniPuthran/cloud-catalog

**Live Vercel Application:**  
https://cloud-catalog-ten.vercel.app/

## Conclusion

This project demonstrates the development and deployment of a cloud-based web application using Node.js and Express.js. It provides REST API functionality and demonstrates how an application can be deployed and accessed through a Cloud PaaS platform such as Vercel.