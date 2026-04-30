const gulp = require('gulp');

// задача копіювання файлів
exports.cloneFiles = async () => {
  return gulp.src('app/*.html')   // беремо всі html з app
    .pipe(gulp.dest('public'));   // копіюємо в public
}