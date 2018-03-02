'use strict';

var searchEmployeeResourceSkillsAllRatingForHR = require('../../lib/searchEmployeeResourceSkillsAllRatingForHR');

module.exports = {
    get: function searchEmployeeResourceSkillsAllRatingForHR_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsAllRatingForHR.searchEmployeeResourceSkillsAllRatingForHR(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Availability'])
    }    
};