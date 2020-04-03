'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', [
  body('name', 'required').isLength(),
  body('age', 'number, required').isNumeric(str[0-99]),
  body('weight', 'number, required').isNumeric(str[0-99]),
  body('select owner', 'required').isNumeric(str[0-99]),
  body('file', 'required, accept only images (jpg, gif, png)').

  upload.single('cat'), (req, res) => {
  console.log('tiedosto: ', req.file);
  catController.cat_post;
});

router.put('/', [ 
body('name', 'required').isLength(),
body('age', 'number, required').isNumeric(str[0-99]),
body('weight', 'number, required').isNumeric(str[0-99]),
body('select owner', 'required').isNumeric(str[0-99]),
body('file', 'required, accept only images (jpg, gif, png)').
], catController.cat_put);
router.delete('/:id', catController.cat_delete);

module.exports = router;
