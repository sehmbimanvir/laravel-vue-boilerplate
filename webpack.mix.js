const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
   module: {
      rules: [{
         enforce: 'pre',
         exclude: /node_modules/,
         loader: 'eslint-loader',
         test: /\.(js|vue)?$/
      }]
   }
})

mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css')
.extract(['vue'])

mix.browserSync({
   proxy: process.env.APP_URL,
   notify: false
})
