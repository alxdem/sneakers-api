const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    modelId: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    subtitle: String,
    price: Number, // Старая цена, необязательный параметр
    salePrice: Number, // Актуальная цена
    sizes: [{
        value: String,
        text: String,
    }],
    badges: [String],
    rating: Number,
    photos: [String],
    gender: String,
    color: String,
    purpose: [String], // Для чего: бег, футбол, улица
    isDiscount: Boolean,
    brand: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
