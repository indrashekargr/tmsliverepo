'use strict';

var fetchAllReportingHeads = require('../lib/fetchAllReportingHeads');

module.exports = {
    
    get: function fetchAllReportingHeads_get(req, res) {
        fetchAllReportingHeads.fetchAllReportingHeads(req,res);
    }
};
