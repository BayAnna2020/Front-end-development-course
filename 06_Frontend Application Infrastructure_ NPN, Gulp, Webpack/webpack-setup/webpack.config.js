const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //подключение плагина, чтобы автоматически менять ссылки на js в html

module.exports = {
    mode: 'development',
    entry:  './src/script0.js',   //откуда следует начать
    output: {
        path: path.resolve(__dirname, './dist'), //в какую папку все складывать
        filename: 'bundle.js'  //единый файл после сборки
    },
    plugins: [new HtmlWebpackPlugin()]
};