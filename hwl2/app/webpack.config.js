module.exports = {
    entry: './App.js',
    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

};