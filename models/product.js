const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    meta: {
        title: String,
        description: String,
    },
    breadcrumbs: [
        {
            url: String,
            anchor: String,
        },
    ],
    product: {
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
            isAvailable: Boolean,
        }],
        badges: [String],
        rating: Number,
        photos: [
            {
                id: String,
                lg: String,
                sm: String,
            }
        ],
        photo: String,
        gender: String,
        color: String,
        purpose: [String], // Для чего: бег, футбол, улица
        isDiscount: Boolean,
        brand: String,
        isRecommend: Boolean,
        info: [
            {
                id: String,
                title: String,
                text: String,
            }
        ]
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
