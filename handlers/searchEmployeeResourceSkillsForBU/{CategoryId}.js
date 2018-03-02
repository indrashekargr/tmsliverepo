'use strict';

var searchEmployeeResourceSkillsForBU = require('../../lib/searchEmployeeResourceSkillsForBU');

module.exports = {
    get: function searchEmployeeResourceSkillsForBU_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsForBU.searchEmployeeResourceSkillsForBU(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['BuId'])
    }    
};