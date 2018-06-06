'use strict';

const config = require( '../config' );
const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const gulpStylelint = require( 'gulp-stylelint' );
const gulpUtil = require( 'gulp-util' );
const handleErrors = require( '../utils/handle-errors' );
const minimist = require( 'minimist' );

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLintJS( src ) {
  // Pass all command line flags to EsLint.
  const options = minimist( process.argv.slice( 2 ) );

  return gulp.src( src, { base: './' } )
    .pipe( gulpEslint( options ) )
    .pipe( gulpEslint.format() )
    .pipe( ( () => {
      if ( options.travis ) {
        return gulpEslint.failAfterError();
      }

      return gulpUtil.noop();
    } )( ) )
    .pipe( gulp.dest( './' ) )
    .on( 'error', handleErrors );
}

module.exports = {
    build: () => _genericLintJS( config.lint.build ),
    tests: () => _genericLintJS( config.lint.tests ),
    scripts: () => _genericLintJS( config.lint.js ),
    styles: () => {
        gulp.src( config.lint.css )
          .pipe( gulpStylelint( {
            reporters: [
              { formatter: 'string', console: true }
            ]
        } ) );
    }
}