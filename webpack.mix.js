const mix = require('laravel-mix');

// Load fonts in the root directory instead of fonts/vendor/fontawesome
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.(woff2?|ttf|eot|svg|otf)$/,
                loader: 'file-loader',
                options: {
                    name: path => 'captiveportal-[name].[ext]?[hash]',
                    publicPath: mix.config.resourceRoot
                }
            },
        ],
    },
});

mix.js('src/app.js', 'captiveportal-app.js')
    .sass('src/app.scss', 'captiveportal-app.css');
