const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //подключение плагина, чтобы автоматически менять ссылки на js в html

module.exports = {
    mode: 'development',
    entry: {
        script0: './src/script0.js',
        script1: './src/script1.js', 
        script2: './src/script2.js', 
        script3: './src/script3.js', 
        script4: './src/script4.js', 
        script5: './src/script5.js', 
        script6: './src/script6.js'  
    },    
    output: {
        path: path.resolve(__dirname, './dist'), //в какую папку все складывать
        filename: '[name].bundle.js'  //единый файл после сборки
    },
    plugins: [new HtmlWebpackPlugin()]
};