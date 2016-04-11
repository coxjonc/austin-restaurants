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
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}
        ]
    },
    
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
        alias: {
            leaflet_search: __dirname + '/node_modules/leaflet-search/dist/leaflet-search.min.js',
            leaflet_search_css: __dirname + '/node_modules/leaflet-search/dist/leaflet-search.min.css',
            marker_cluster_css: __dirname + '/node_modules/leaflet.markercluster/dist/MarkerCluster.css',
            marker_cluster_default_css: __dirname + '/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css',
            leaflet_css: __dirname + '/node_modules/leaflet/dist/leaflet.css',
        } 
    }   
}
