const Product = require('../models/product');

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const getProducts = (req, res) => {
    Product
        .find(req.query)
        .sort({ title: 1 })
        .then((products) => {
            res
                .status(200)
                .json(products);
        })
        .catch((err) => handleError(res, err));
};

const getProductById = (req, res) => {
    Product
        .findById(req.params.id)
        .then((product) => {
            res
                .status(200)
                .json(product);
        })
        .catch((err) => handleError(res, err));
};


module.exports = {
    getProducts,
    getProductById,
};