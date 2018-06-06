'use strict';

const gulp = require( 'gulp' );
const run = require( 'gulp-run' );

module.exports = {
    chdirDown: (done) => {
        process.chdir( 'teachers_digital_platform/crtool' );
        done();
    },
    chdirUp: (done) => {
        process.chdir( '../..' );
        done();
    },
    build: () => {
        return run( 'npm run build' ).exec();
    }
}