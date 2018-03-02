'use strict';

var fetchskillslist = require('../../lib/fetchskillslist');

module.exports = {
    get: function fetchskillslist_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchskillslist.fetchskillslist(req,res,req.params['id'])
    }    
};