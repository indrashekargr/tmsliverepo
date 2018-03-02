'use strict';

var fetchResourceSkillDetailsBasedOnUser = require('../../lib/fetchResourceSkillDetailsBasedOnUser');

module.exports = {
    get: function fetchResourceSkillDetailsBasedOnUser_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchResourceSkillDetailsBasedOnUser.fetchResourceSkillDetailsBasedOnUser(req,res,req.params['UserId'])
    }    
};