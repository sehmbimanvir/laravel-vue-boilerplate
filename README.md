# Laravel & Vue Js Boilerplate
Laravel Single Page Application Using Vue 2.5, Typescript, Eslint, Babel, SCSS etc.

# Features
- Easily Configurable
- Single Page
- Hot Reloading Enabled
- Laravel Complete JWT Authentication Including Forgot Password, Account Activation etc.
- Basic CRUD
- Eslint Included for enforcing coding styles.
- Custom Component and Plugin which can help developers to create their own plugins.
- Complete error handling at single place on front as well as back end.
- Axios Plugin for HTTP requests with interceptors.
- Namespaced State Management (Vuex) Implemented.

# Installation
Clone this Repo

In Project Root Directory, Run
```sh
composer install
```

Install Node Packages
```sh
npm install
```

Run DB Migrations & Seeds
```sh
php artisan migrate --seed
```

Development Build
```sh
npm run dev
```

Production Build
```sh
npm run prod
```

Listen for Changes
```sh
npm run watch-poll
```

### * Disable Or Delete Eslint Completely
In **webpack.config.js** Just Comment out or Delete the following Code

```javascript
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
```
You can also delete all dependencies regarding eslint.

### * Disable Vendor Extraction
Currently Webpack Mix generate two different files 
* app.js - Application Code
* vendor.js - Vendor Libraries
* manifest.js - Webpack Configuration

In Order to Generate Single file (Disable Vendor Extraction), write add following code in **webpack.config.js**
```javascript
mix.js('resources/js/app.js', 'public/js').sass('resources/sass/app.scss', 'public/css')
```
Instead of
```javascript
mix.js('resources/js/app.js', 'public/js').sass('resources/sass/app.scss', 'public/css').extract(['vue'])
```

For More Information Read [Laravel Vendor Extraction](https://laravel.com/docs/5.7/mix#vendor-extraction)

### Disable Specific Rule in Eslint
To disable specific rule for eslint Open **.eslintrc.js** from Root Dir and add a new Rule under rules key.

e.g: To disable lint for Unused variables Just add 
```json
'vue/no-unused-vars': 'off'
```
**Note:** 'off' can be replaced with 0 (Integer)

There are two types of rules used

* [Eslint Standard Rules](https://eslint.org/docs/rules/)
* [Eslint Vuejs Rules](https://www.npmjs.com/package/eslint-plugin-vue#bulb-rules)