/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req, res) {

    let user = req.allParams();
    let messages = [];

    if (user.id !== undefined) {
      messages.push("Usuário duplicado!");
    }

    if (user.fullname === undefined || user.fullname === "") {
      messages.push("Necessário inserir um nome completo!");
    }

    if (user.phone === undefined || user.phone === "") {
      messages.push("Necessário inserir um telefone!");
    }

    if (user.cpf === undefined || user.cpf === "") {
      messages.push("Necessário inserir um CPF!");
    }
    
    if (messages.length > 0) {
      return res.status(200).json({
        success: false,
        message: messages
      });
    }

    User.create(user).exec((err, created) => {
      
      if (err) return res.serverError(err);

      return res.status(200).json({
        success: true,
        message: 'Usuário criado com sucesso!'
      });
    });

  },

  getUsers: function (req, res) {

    User.find().exec((err, users) => {
      
      if (err) return res.serverError(err);

      return res.status(200).json(users);
      
    });
  }

};

