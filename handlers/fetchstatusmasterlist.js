'use strict';

var fetchstatusmasterlist = require('../lib/fetchstatusmasterlist');

module.exports = {
    
    get: function fetchstatusmasterlist_get(req, res) {
        fetchstatusmasterlist.fetchstatusmasterlist(req,res);
    }
};
