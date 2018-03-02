'use strict';

var searchEmployeeResourceSkillsForHR = require('../../lib/searchEmployeeResourceSkillsForHR');

module.exports = {
    get: function searchEmployeeResourceSkillsForHR_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsForHR.searchEmployeeResourceSkillsForHR(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'])
    }    
};