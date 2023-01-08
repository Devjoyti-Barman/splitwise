const path = require('path');

const config = {
    target: "node",
    mode: "production",
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.[contenthash].js"
    },
    devtool: 'source-map'
}

module.exports = config;