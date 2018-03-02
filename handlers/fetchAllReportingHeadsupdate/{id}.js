'use strict';

var fetchAllReportingHeadsupdate = require('../../lib/fetchAllReportingHeadsupdate');

module.exports = {
    get: function fetchAllReportingHeadsupdate_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchAllReportingHeadsupdate.fetchAllReportingHeadsupdate(req,res,req.params['id'])
    }    
};