const express = require('express');
const router = express.Router();
const { getPageMain, getPageProduct } = require('../controllers/page-controller');

router.get('/page/main', getPageMain);
router.get('/catalog/:id', getPageProduct);

module.exports = router;