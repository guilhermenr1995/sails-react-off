/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    brand: {
      type: 'string',
      required: true
    },
    entryDate: {
      type: 'ref', 
      columnType: 'datetime',
      required: true
    },
    expireDate: {
      type: 'ref', 
      columnType: 'datetime',
      required: true
    },
    value: {
      type: 'number',
      required: true
    },
    qty: {
      type: 'number',
      required: true
    }
  },

};

