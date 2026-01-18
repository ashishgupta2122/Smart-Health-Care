const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: "http://localhost:5003/api/records", // ✅ correct
    changeOrigin: true
});
