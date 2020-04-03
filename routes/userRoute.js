'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', [
  body('name', 'Min 3 chars, required').isLength({min: 3}),
  body('email', 'valid email address').isEmail(),
  body('passwd', 'minimum length 8 characters, at least one capital letter').matches('(?=.*[A-Z]).{8,}')
], userController.user_post);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users');
});


module.exports = router;
