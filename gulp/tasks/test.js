'use strict';

const gulp = require( 'gulp' );
const run = require( 'gulp-run' );

module.exports = {
    test: () => {
        return run('npm run test').exec();
    }
}