"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_model_1 = require("../models/products.model");
const ProductsRouters = express_1.Router();
ProductsRouters.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.query;
    let query = {};
    query["activo"] = true;
    try {
        const response = yield products_model_1.Products.find().exec();
        console.log(response);
        res.status(200).send({
            status: true,
            response: response
        });
    }
    catch (e) {
        res.status(500).json({
            status: false,
            error: e
        });
    }
}));
exports.default = ProductsRouters;
