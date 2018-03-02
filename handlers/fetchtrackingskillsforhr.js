'use strict';

var fetchtrackingskillsforhr = require('../lib/fetchtrackingskillsforhr');

module.exports = {
    
    get: function bfetchtrackingskillsforhr_get(req, res) {
        fetchtrackingskillsforhr.fetchtrackingskillsforhr(req,res);
    }
};
