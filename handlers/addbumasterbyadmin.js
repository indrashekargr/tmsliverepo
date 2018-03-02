'use strict';

var addbumasterbyadmin = require('../lib/addbumasterbyadmin');

module.exports = {
    
    post: function addbumasterbyadmin_post(req, res) {
        addbumasterbyadmin.addbumasterbyadmin(req,res,req.params['addbumasterbyadmin']);
    }
};
