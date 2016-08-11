
'use strict';

var $       = require('./../node_modules/jquery/dist/jquery.min.js');
var Treemap = require('./Treemap');

// Main data structure
var treemapConfig = {
    
    // CSS selector for the DOM element in which the treemap will be
    containerSelector : '#treemap-container',
    
    // width and height of the treemap
    width             : '100%',
    height            : '500px',
    
    // animations' duration in msec
    animationDuration : 350,
    
    // tile options
    tiles: {
        
        // Minimal size
        minWidth         : 150,
        minHeight        : 105,
        
        // CSS selector for the DOM element containing the Handlebars tile template
        templateSelector : '#treemap-tile-template',
        
        // padding
        padding          : 5
    },
    
    // How to sort tiles
    sortCallback      : function(a, b){
        return null;             // random
        //return b.value - a.value;  // descending
        //return a.value - b.value;  // ascending
    },
    
    // breadcumbs options
    breadCumbs        : {
        height    : '50px',
        separator : ' | '
    },
};

$(document).ready( function() {
    var treemap = new Treemap(treemapConfig);
});
