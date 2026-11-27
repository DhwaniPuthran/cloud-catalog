
const express = require('express');

const app = express();

// Port configuration
const PORT = process.env.PORT || 8080;

// Serve static files from public folder
app.use(express.static('public'));

// API 1: Cloud Services
app.get('/api/services', (req, res) => {
    res.json([
        {
            serviceId: 1,
            serviceName: "Amazon EC2",
            category: "IaaS",
            pricingModel: "Pay-as-you-go"
        },
        {
            serviceId: 2,
            serviceName: "AWS Lambda",
            category: "PaaS",
            pricingModel: "Pay-per-request"
        },
        {
            serviceId: 3,
            serviceName: "Amazon S3",
            category: "IaaS",
            pricingModel: "Pay-for-storage"
        },
        {
            serviceId: 4,
            serviceName: "Google Cloud Run",
            category: "PaaS",
            pricingModel: "Pay-per-use"
        }
    ]);
});

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "Dhwani Puthran",
        environment: "Cloud PaaS"
    });
});

// Start server locally
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export app for cloud deployment
module.exports = app;
