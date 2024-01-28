const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://games-backend-ctzu.vercel.app/",
      // target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
