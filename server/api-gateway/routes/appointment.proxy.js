const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: "http://localhost:5002/api/appointments",
    changeOrigin: true
});
