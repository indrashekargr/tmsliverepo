'use strict';

var addskillcategoryforadmin = require('../lib/addskillcategoryforadmin');

module.exports = {
    
    post: function aaddskillcategoryforadmin_post(req, res) {
        addskillcategoryforadmin.addskillcategoryforadmin(req,res,req.params['addskillcategoryforadmin']);
    }
};
