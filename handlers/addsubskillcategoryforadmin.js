'use strict';

var addsubskillcategoryforadmin = require('../lib/addsubskillcategoryforadmin');

module.exports = {
    
    post: function addsubskillcategoryforadmin_post(req, res) {
        addsubskillcategoryforadmin.addsubskillcategoryforadmin(req,res,req.params['addsubskillcategoryforadmin']);
    }
};
