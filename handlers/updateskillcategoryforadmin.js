'use strict';

var updateskillcategoryforadmin = require('../lib/updateskillcategoryforadmin');

module.exports = {
    
    put: function updateskillcategoryforadmin_put(req, res) {
        updateskillcategoryforadmin.updateskillcategoryforadmin(req,res,req.params['CategoryName'],req.params['Description'],req.params['date'],req.params['CategoryId']);
    }
};
