'use strict';

var upadatestatusmasterbyadmin = require('../lib/upadatestatusmasterbyadmin');

module.exports = {
    
    put: function upadatestatusmasterbyadmin_put(req, res) {
        upadatestatusmasterbyadmin.upadatestatusmasterbyadmin(req,res,req.params['StatusName'],req.params['Description'],req.params['Id']);
    }
};
