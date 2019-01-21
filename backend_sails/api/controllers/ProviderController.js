/**
 * ProviderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req, res) {

    let provider = req.allParams();
    let messages = [];

    if (provider.id !== undefined) {
      messages.push("Fornecedor duplicado!");
    }

    if (provider.fullname === undefined || provider.fullname === "") {
      messages.push("Necessário inserir um nome completo!");
    }

    if (provider.address === undefined || provider.address === "") {
      messages.push("Necessário inserir um endereço!");
    }

    if (provider.phone === undefined || provider.phone === "") {
      messages.push("Necessário inserir um telefone!");
    }

    if (provider.cpf === undefined || provider.cpf === "") {
      messages.push("Necessário inserir um CPF!");
    }
    
    if (messages.length > 0) {
      return res.status(200).json({
        success: false,
        message: messages
      });
    }

    Provider.create(provider).exec((err, created) => {
      
      if (err) return res.serverError(err);

      return res.status(200).json({
        success: true,
        message: 'Fornecedor criado com sucesso!'
      });
    });
  },

  getProviders: function (req, res) {

    Provider.find().exec((err, providers) => {
      
      if (err) return res.serverError(err);

      return res.status(200).json(providers);
    });
  }
};

