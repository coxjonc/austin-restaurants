var path = require('path')
var webpack = require('webpack')

module.exports = {

    context: __dirname,

    entry: './map', 
    
    output: {
        path: path.resolve('./public/'), 
        filename: '[name].js', 
    },
    
    plugins: [
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        })
    ],

    node: {
        fs: 'empty'
    },
    
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: 'file-loader'}
        ]
    },
    
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
        alias: {
            leaflet_css: __dirname + '/node_modules/leaflet/dist/leaflet.css',
            leaflet_marker: __dirname + '/node_modules/leaflet/dist/images/marker-icon.png',
            leaflet_marker_shadow: __dirname + '/node_modules/leaflet/dist/images/marker-shadow.png',
            leaflet_marker_2x: __dirname + "/node_modules/leaflet/dist/images/marker-icon-2x.png",
            leaflet_marker_shadow: __dirname + "/node_modules/leaflet/dist/images/marker-shadow.png"
        } 
    }   
}
