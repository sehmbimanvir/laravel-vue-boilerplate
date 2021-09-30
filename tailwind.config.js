module.exports = {
    purge: {
      content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
      ]
    },
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  