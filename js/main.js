
'use strict';

var $ = require('jquery');
var Treemap = require('./treemap');

// Main data structure
var treemapConfig = {
    containerSelector : '#treemap-container',
    width             : '100%',
    height            : '300px',
    templateSelector  : '#tile_template'
};

$(document).ready( function() {
    var treemap = new Treemap(treemapConfig);
});
