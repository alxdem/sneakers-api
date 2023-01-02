const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/product-controller');

router.get('/catalog', getProducts);
router.get('/catalog/:id', getProductById);

module.exports = router;