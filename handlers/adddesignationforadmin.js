'use strict';

var adddesignationforadmin = require('../lib/adddesignationforadmin');

module.exports = {
    
    post: function aadddesignationforadmin_post(req, res) {
        adddesignationforadmin.adddesignationforadmin(req,res,req.params['adddesignationforadmin']);
    }
};
