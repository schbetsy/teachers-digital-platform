// Your app's JavaScript may look something like this -- or it may not.
//
// const module1 = require( './module1.js' );
// const module2 = require( './module2.js' );
//
// const app = {
//   init: () => {
//     module1.init();
//     module2.init();
//   }
// };
//
// app.init();

// External modules
const AOS = require( 'aos/dist/aos' );
const cfExpandables = require( 'cf-expandables/src/Expandable' );

// Internal modules
const scroll = require( './scroll' );
const search = require( './search' );
const closest = require( './util/dom-traverse' ).closest;
const expandableFacets = require( './expandable-facets' );
const tdpAnalytics = require( './tdp-analytics' );

const app = {
  init: () => {
    AOS.init();
    cfExpandables.init();
    expandableFacets.init();
    scroll.init();
    tdpAnalytics.bindAnalytics();
  }
};

window.addEventListener( 'load', app.init );
