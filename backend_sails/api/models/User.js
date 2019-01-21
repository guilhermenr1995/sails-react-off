/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fullname: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    cpf: {
      type: 'string',
      required: true
    }
  }
};

