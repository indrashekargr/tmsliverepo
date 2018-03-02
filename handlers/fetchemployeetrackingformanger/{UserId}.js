'use strict';

var fetchemployeetrackingformanager = require('../../lib/fetchemployeetrackingformanager');

module.exports = {
    get: function fetchemployeetrackingformanager_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchemployeetrackingformanager.fetchemployeetrackingformanager(req,res,req.params['UserId'],req.params['ReportingManager'])
    }    
};