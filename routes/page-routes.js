const express = require('express');
const router = express.Router();
const { getPageMain, getPageProduct, getPageCatalog } = require('../controllers/page-controller');

router.get('/page/main', getPageMain);
router.get('/page/catalog', getPageCatalog);
router.get('/catalog/:id', getPageProduct);

module.exports = router;