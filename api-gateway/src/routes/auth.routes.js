const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: process.env.USER_SERVICE_URL, // http://localhost:4002
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
