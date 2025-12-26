const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
    target: "http://localhost:4003", // Doctor Service
    changeOrigin: true,

    onProxyReq: (proxyReq, req) => {
        // Forward JWT token
        if (req.headers.authorization) {
            proxyReq.setHeader(
                "Authorization",
                req.headers.authorization
            );
        }
    },

    pathRewrite: {
        "^/api/doctors": "/doctors"
    }
});
