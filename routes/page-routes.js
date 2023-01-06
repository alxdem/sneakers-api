const express = require('express');
const router = express.Router();
const { getPageMain } = require('../controllers/page-controller');

router.get('/page/main', getPageMain);

module.exports = router;