const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: process.env.User_SERVICE_URL, // User Service
    changeOrigin: true,

    onProxyReq: (proxyReq, req) => {
        if (req.headers.authorization) {
            proxyReq.setHeader(
                "Authorization",
                req.headers.authorization
            );
        }
    },

    pathRewrite: {
        "^/api/users": "/users"
    }
});
