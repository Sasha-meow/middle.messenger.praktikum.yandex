const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/layout/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/layout/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "images": path.resolve(__dirname, "static/images"),
            "@constants": path.resolve(__dirname, "src/constants/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@controllers": path.resolve(__dirname, "src/controllers/"),
            "@hocs": path.resolve(__dirname, "src/hocs"),
            "@modals": path.resolve(__dirname, "src/modals"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@views": path.resolve(__dirname, "src/views"),
            handlebars: "handlebars/dist/handlebars.min.js",
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.module\.scss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.hbs$/i,
                loader: "handlebars-loader",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
};
