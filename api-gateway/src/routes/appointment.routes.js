const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: process.env.APPOINTMENT_SERVICE_URL, // http://localhost:4004
    changeOrigin: true,
    pathRewrite: {
        "^/api/appointments": "/appointments"
    }
});
