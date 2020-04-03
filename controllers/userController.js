'use strict';
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  console.log('user id parameter', req.params);
  const user = users.filter(user => user.id === req.params.id).pop();
  delete user.password;
  res.json(user);
};

const user_post = (req, res) => {
  console.log('data from form', req.body);
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(422).json({errors: errors.array()});
}
  try {
    const user = await userModel.insertUser(req.body);
    console.log('inserted', user);
    res.send(`added user: ${user.insertId}`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};

const user_put = async (req, res) => {
  console.log('user_put', req.body);
  const upUser = await userModel.updateUser(req.body);
  //
}

module.exports = {
  user_list_get,
  user_get,
  user_post,
};
