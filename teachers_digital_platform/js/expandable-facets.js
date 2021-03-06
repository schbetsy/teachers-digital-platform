/* ==========================================================================
   Expandable Facets Organism
   ========================================================================== */

// polyfill for ie9 compatibility
require( 'classlist-polyfill' );

const domClassList = require( 'cf-atomic-component/src/utilities/dom-class-list' );
const addClass = domClassList.addClass;
const contains = domClassList.contains;
const removeClass = domClassList.removeClass;
const closest = require( 'cf-atomic-component/src/utilities/dom-closest' ).closest;

const Events = require( 'cf-atomic-component/src/mixins/Events.js' );
const Organism = require( 'cf-atomic-component/src/components/Organism' );
const ExpandableTransition = require( 'cf-atomic-component/src/utilities/transition/ExpandableTransition' );

const ExpandableFacets = Organism.extend( {
  ui: {
    base:           '.o-expandable-facets',
    target:         '.o-expandable-facets_target',
    content:        '.o-expandable-facets_content',
    header:         '.o-expandable_header',
    facetCheckbox:  '.o-expandable-facets_checkbox',
    facetLabel:     '.o-expandable-facets_checkbox ~ .a-label'
  },

  classes: {
    targetExpanded:  'is-open',
    targetCollapsed: 'is-closed',
    group:           'o-expandable-group',
    groupAccordion:  'o-expandable-group__accordion'
  },

  events: {
    'click .o-expandable-facets_target': 'expandableClickHandler'
  },

  transition:       null,
  isAccordionGroup: false,
  activeAccordion:  false,

  initialize:             initialize,
  expandableClickHandler: expandableClickHandler,
  toggleTargetState:      toggleTargetState
} );

/**
 * Initialize a new expandable.
 */
function initialize() {
  const customClasses = {
    BASE_CLASS:   'o-expandable-facets_content__transition',
    EXPANDED:     'o-expandable-facets_content__expanded',
    COLLAPSED:    'o-expandable-facets_content__collapsed',
    OPEN_DEFAULT: 'o-expandable-facets_content__onload-open'
  };

  const transition = new ExpandableTransition(
    this.ui.content, customClasses
  );
  this.transition = transition.init();

  if ( contains( this.ui.content, customClasses.OPEN_DEFAULT ) ) {
    addClass( this.ui.target, this.classes.targetExpanded );
  } else {
    addClass( this.ui.target, this.classes.targetCollapsed );
  }

  const expandableGroup = closest(
    this.ui.target, '.' + this.classes.group
  );

  this.isAccordionGroup = expandableGroup !== null &&
    contains( expandableGroup, this.classes.groupAccordion );

  if ( this.isAccordionGroup ) {
    Events.on(
      'accordionActivated',
      _accordionActivatedHandler.bind( this )
    );
  }

  if ( this.ui.facetCheckbox.hasAttribute( 'checked' ) ||
    contains( this.ui.facetLabel, 'indeterminate' ) ) {
    this.transition.toggleExpandable();
    this.toggleTargetState( this.ui.target );
  }
}

/**
 * Event handler for when an accordion is activated
 */
function _accordionActivatedHandler() {
  if ( this.activeAccordion ) {
    this.transition.toggleExpandable();
    this.toggleTargetState( this.ui.target );
    this.activeAccordion = false;
  }
}

/**
 * Event handler for when an expandable is clicked.
 */
function expandableClickHandler() {
  this.transition.toggleExpandable();
  this.toggleTargetState( this.ui.target );

  if ( this.isAccordionGroup ) {
    if ( this.activeAccordion ) {
      this.activeAccordion = false;
    } else {
      Events.trigger( 'accordionActivated', { target: this } );
      this.activeAccordion = true;
    }
  }
}

/**
 * Toggle an expandable to open or closed.
 * @param {HTMLNode} element - The expandable target HTML DOM element.
 */
function toggleTargetState( element ) {
  if ( contains( element, this.classes.targetExpanded ) ) {
    addClass( this.ui.target, this.classes.targetCollapsed );
    removeClass( this.ui.target, this.classes.targetExpanded );
  } else {
    addClass( this.ui.target, this.classes.targetExpanded );
    removeClass( this.ui.target, this.classes.targetCollapsed );
  }
}

module.exports = ExpandableFacets;

/**
 * Find .o-expandable-facets, add `is-open` class.
 * Find .o-expandable-facets_target and add a click handler to toggle classes on .o-expandable-facets between `is-open` and `is-closed`.
 */
