const fs = require('fs');
const Product = require('../models/product');

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const getPageMain = (req, res) => {
    fs.readFile('./localDb/pages/main.json', 'utf8', function (err, data) {
        if (err) throw err;

        const pageData = JSON.parse(data);

        res
            .status(200)
            .json(pageData);
    });
};

const getPageProduct = (req, res) => {
    Product
        .findById(req.params.id)
        .then((product) => {
            res
                .status(200)
                .json(product);
        })
        .catch((err) => handleError(res, err));
};

const getPageCatalog = (req, res) => {
    fs.readFile('./localDb/pages/catalog.json', 'utf8', function (err, data) {
        if (err) throw err;

        const pageData = JSON.parse(data);

        res
            .status(200)
            .json(pageData);
    });
};

module.exports = {
    getPageMain,
    getPageProduct,
    getPageCatalog,
};