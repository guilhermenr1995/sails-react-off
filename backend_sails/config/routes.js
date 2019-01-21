/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /user': {
    action: 'User/createUser',
    cors: {
      allowOrigins: ['http://localhost:1337'],
      allowCredentials: false
    }
  },
  'GET /users': {
    action: 'User/getUsers',
    cors: {
      allowOrigins: ['http://localhost:1337'],
      allowCredentials: false
    }
  },

  'POST /provider': {
    action: 'Provider/createProvider',
    cors: {
      allowOrigins: ['http://localhost:1337'],
      allowCredentials: false
    }
  },
  'GET /providers': {
    action: 'Provider/getProviders',
    cors: {
      allowOrigins: ['http://localhost:1337'],
      allowCredentials: false
    }
  },

  'POST /product': {
    action: 'Product/createProduct',
    cors: {
      allowOrigins: ['http://localhost:1337'],
      allowCredentials: false
    }
  },
  'GET /products': {
    action: 'Product/getProducts',
    cors: {
      allowOrigins: ['http://localhost:1337'],
      allowCredentials: false
    }
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
