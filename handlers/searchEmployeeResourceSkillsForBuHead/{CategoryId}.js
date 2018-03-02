'use strict';

var searchEmployeeResourceSkillsForBuHead = require('../../lib/searchEmployeeResourceSkillsForBuHead');

module.exports = {
    get: function ssearchEmployeeResourceSkillsForBuHead_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsForBuHead.searchEmployeeResourceSkillsForBuHead(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Availability'],req.params['BuId'])
    }    
};