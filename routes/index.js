var express = require('express');
var router = express.Router();
const helperController = require('../controller/helperController');

/* GET home page. */
router.get('/', helperController.index);
router.get('/:id', helperController.show);
router.post('/', helperController.store);
router.patch('/:id', helperController.update);
router.delete('/:id', helperController.destroy);

module.exports = router;
