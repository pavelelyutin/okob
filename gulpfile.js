
const { src, dest, watch, parallel, series } = require('gulp');

const sass = require('gulp-sass')(require('sass')); // Конвертация scss в css
const include = require('gulp-file-include'); // Модули html (@@include())
const concat = require('gulp-concat'); // Объединение файлов в один и переименование
const uglify = require('gulp-uglify-es').default; // Минификация js
const browserSync = require('browser-sync').create(); // Локальный сервер


// function clean() {
//     return src('./public/')
//         .pipe
// }

function styles() {
    return src('src/scss/main.scss')
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(dest('./public/css/'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src('src/js/main.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('./public/js/'))
        .pipe(browserSync.stream())
}

function pages() {
    return src('./src/html/pages/*.html', './src/html/components/*.html')
        .pipe(include())
        .pipe(dest('./public/'))
        .pipe(browserSync.reload({ stream: true }))
}

function watching() {
    watch(['src/scss/**/*.scss'], styles)
    watch(['src/js/main.js'], scripts)
    watch(['src/html/**/*.html'], pages)
    // watch(['src/*.html']).on('change', browserSync.reload)
}

function fonts() {
    return src('./src/fonts/**/*')
        .pipe(dest('./public/fonts/'))
}

function images() {
    return src('./src/images/**/*')
        .pipe(dest('./public/images'))
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
}

function vendorJS() {
    const modules = [
      'node_modules/swiper/swiper-bundle.min.js',
      'node_modules/swiper/swiper-bundle.min.js.map',
    ];
  
    return src(modules)
      .pipe(dest('./public/js'));
  };
  
  function vendorCSS() {
    const modules = [
      'node_modules/swiper/swiper-bundle.min.css',
    ];
  
    return src(modules)
      .pipe(dest('public/css/'));
  };

exports.pages = pages;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
// exports.clean = clean;
exports.fonts = fonts;
exports.images = images;

exports.default = parallel(vendorJS, vendorCSS, styles, scripts, fonts, images, pages, browsersync, watching);