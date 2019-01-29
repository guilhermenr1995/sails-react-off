/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {

        let product = req.allParams();
        let messages = [];
        
        if (product.id !== undefined) {
          messages.push("Produto duplicado!");
        }
    
        if (product.name === undefined || product.name === "") {
          messages.push("Necessário inserir um nome!");
        }
    
        if (product.description === undefined || product.description === "") {
          messages.push("Necessário inserir uma descrição!");
        }
    
        if (product.brand === undefined || product.brand === "") {
          messages.push("Necessário inserir uma marca!");
        }
    
        if ((product.entryDate === undefined || product.entryDate === "") || (product.entryDate instanceof Date && !isNaN(product.entryDate.valueOf()))) {
          messages.push("Necessário inserir uma data de entrada válida!");
        }

        if ((product.expireDate === undefined || product.expireDate === "") || (product.expireDate instanceof Date && !isNaN(product.expireDate.valueOf()))) {
          messages.push("Necessário inserir uma data de validade válida!");
        }

        if (product.value === undefined || product.value === "" || isNaN(product.value) || product.value < 0) {
          messages.push("Necessário um valor válido!");
        }

        if (product.qty === undefined || product.qty === "" || isNaN(product.qty) || product.qty < 0) {
          messages.push("Necessário uma quantidade válida!");
        }
        
        if (messages.length > 0) {
          return res.status(200).json({
            success: false,
            message: messages
          });
        }
    
        Product.create(product).exec((err, created) => {
          
          if (err) return res.serverError(err);
    
          return res.status(200).json({
            success: true,
            message: 'Produto criado com sucesso!'
          });
        });
      },
    
      getProducts: function (req, res) {
    
        Product.find().exec((err, products) => {
          
          if (err) return res.serverError(err);
    
          return res.status(200).json(products);
        });
      }

};

