'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /contacts
 */
module.exports = {
 
    get: {
        200: function (req, res, callback) {
           
            Mockgen().responses({
                path: '/adddemodata',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
