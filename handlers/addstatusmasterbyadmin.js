'use strict';

var addstatusmasterbyadmin = require('../lib/addstatusmasterbyadmin');

module.exports = {
    
    post: function addstatusmasterbyadmin_post(req, res) {
        addstatusmasterbyadmin.addstatusmasterbyadmin(req,res,req.params['addstatusmasterbyadmin']);
    }
};
