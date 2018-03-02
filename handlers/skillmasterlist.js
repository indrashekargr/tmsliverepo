'use strict';

var skillmasterlist = require('../lib/skillmasterlist');

module.exports = {
    
    get: function skillmasterlist_get(req, res) {
        skillmasterlist.skillmasterlist(req,res);
    }
};
