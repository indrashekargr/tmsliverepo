'use strict';

var fetchemployeetracking = require('../../lib/fetchemployeetracking');

module.exports = {
    get: function fetchemployeetracking_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchemployeetracking.fetchemployeetracking(req,res,req.params['UserId'])
    }    
};