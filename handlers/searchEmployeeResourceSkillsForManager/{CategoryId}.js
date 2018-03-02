'use strict';

var searchEmployeeResourceSkillsForManager = require('../../lib/searchEmployeeResourceSkillsForManager');

module.exports = {
    get: function searchEmployeeResourceSkillsForManager_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsForManager.searchEmployeeResourceSkillsForManager(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['ReportingManager'])
    }    
};