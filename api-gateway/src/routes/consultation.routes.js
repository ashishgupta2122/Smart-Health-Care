const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: process.env.CONSULTATION_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/consultations": "/consultations" }
});
