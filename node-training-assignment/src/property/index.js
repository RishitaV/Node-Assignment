const createProperty = require('./property-apis/create-property');
const getAllProperty = require('./property-APIs/get-all-properties');
const getPropertyByPropertyNumber = require('./property-APIs/get-property-by-property-number');
const updatedProperty = require('./property-APIs/update-property-by-property-number');
const deletedProperty = require('./property-APIs/delete-property-by-property-number');

module.exports = [
    createProperty,
    getAllProperty,
    getPropertyByPropertyNumber,
    updatedProperty,
    deletedProperty,
];