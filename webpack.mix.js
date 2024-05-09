let mix = require("laravel-mix");
let path = require("path");

require("./mix");

mix.setPublicPath("dist")
    .js("resources/js/index.js", "js/nova-date-range-intersection-filter.js")
    .vue({ version: 3 })
    .nova("gleampt3/nova-date-range-intersection-filter");

mix.alias({
    "laravel-nova": path.join(
        __dirname,
        "vendor/laravel/nova/resources/js/mixins/packages.js"
    ),
    "@": path.join(__dirname, "resources/js/"),
});
