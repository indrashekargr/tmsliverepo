'use strict';

var viewSelfEmployeeResourceSkills = require('../../lib/viewSelfEmployeeResourceSkills');

module.exports = {
    get: function viewSelfEmployeeResourceSkills_get(req, res) {
        //res.json(repository.get(req.params['id']));
        viewSelfEmployeeResourceSkills.viewSelfEmployeeResourceSkills(req,res,req.params['UserId']);
    }    
};