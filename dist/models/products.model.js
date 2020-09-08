"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    id: {
        type: Number
    },
    brand: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    descuento: {
        type: Boolean,
        required: false
    }
});
exports.Products = mongoose_1.model('Products', productsSchema);
