'use strict';

var fetchbusinessunitmasterlist = require('../lib/fetchbusinessunitmasterlist');

module.exports = {
    
    get: function fetchbusinessunitmasterlist_get(req, res) {
        fetchbusinessunitmasterlist.fetchbusinessunitmasterlist(req,res);
    }
};
