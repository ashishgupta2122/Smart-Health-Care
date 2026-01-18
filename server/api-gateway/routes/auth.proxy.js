const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: "http://localhost:5000/api/auth",
    changeOrigin: true
});
