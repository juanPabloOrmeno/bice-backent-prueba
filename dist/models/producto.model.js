"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const mongoose_1 = require("mongoose");
const productoSchema = new mongoose_1.Schema({
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
});
exports.Producto = mongoose_1.model('Producto', productoSchema);
