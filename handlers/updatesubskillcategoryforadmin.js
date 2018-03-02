'use strict';

var updatesubskillcategoryforadmin = require('../lib/updatesubskillcategoryforadmin');

module.exports = {
    
    put: function updatesubskillcategoryforadmin_put(req, res) {
        updatesubskillcategoryforadmin.updatesubskillcategoryforadmin(req,res,req.params['CategoryId'],req.params['SkillName'],req.params['Description'],req.params['date'],req.params['SkillId']);
    }
};
