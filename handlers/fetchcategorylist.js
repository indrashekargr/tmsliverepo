'use strict';

var fetchcategorylist = require('../lib/fetchcategorylist');

module.exports = {
    
    get: function fetchcategorylist_get(req, res) {
        fetchcategorylist.fetchcategorylist(req,res);
    }
};
