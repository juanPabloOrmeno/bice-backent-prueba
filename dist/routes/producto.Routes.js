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
const autenticacion_1 = require("../middlewares/autenticacion");
const products_model_1 = require("../models/products.model");
const productoRouters = express_1.Router();
productoRouters.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
productoRouters.post('/', [autenticacion_1.verificaToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        body.usuario = req.usuario._id;
        const userDB = yield products_model_1.Products.create(body);
        res.status(200).send({
            userDB
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}));
exports.default = productoRouters;
