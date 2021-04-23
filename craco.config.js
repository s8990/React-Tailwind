const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Components": path.resolve(__dirname, "src/components"),
    },
  },
};
