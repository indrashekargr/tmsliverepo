'use strict';

var fetchemployeedatabyadmin = require('../../lib/fetchemployeedatabyadmin');

module.exports = {
    get: function fetchemployeedatabyadmin_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchemployeedatabyadmin.fetchemployeedatabyadmin(req,res,req.params['managerEmpId']);
    }    
};