var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt  = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/user', function(req, res){
  let username = req.body.user.username;
  let pass = req.body.user.password;
  User.create({
    username: username,
    passwordhash: bcrypt.hashSync(pass, 10)
  })
    .then(
      function createSuccess(user){
        let token = jwt.sign({id: user.id}, 
          'this_is_a_secret', {expiresIn: 60*60*24})
        res.json({
          user: user,
          message: 'created',
          sessionToken: token
        })
      }, 
      function createError(err){
        res.send(500, err.message);
      }
    )
})

router.post('/login', function(req, res){
    User.findOne({where: {username: req.body.user.username}})
      .then(function(user){
        if (user){
          bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
            if (matches){
              let token = jwt.sign({id: user.id}, 'this_is_a_secret', {expiresIn: 60*60*24})
              res.json({
                user: user,
                message: 'successfully logged in',
                sessionToken: token
              })
            } else {
              res.status(502).send({error: 'failed to authenticate'});
            }
          })
        } else {
          res.status(500).send({error: 'failed to authenticate'});
        }
      })
      .catch(err => res.status(501).send({error: err.message}))
  })

module.exports = router;