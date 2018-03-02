'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /contacts
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: contacts_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/branchlistforhr',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchAllReportingHeads',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchstatusmasterlist',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchdesignationlist',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchqualificationList',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchbusinessunitmasterlist',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchtrackingskillsforhr',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/roleslistforhr',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/skillmasterlist',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchcategorylist',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fetchCurrentEmployeeDataByHR',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },

};
