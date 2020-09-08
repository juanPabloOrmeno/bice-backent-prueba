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
const producto_model_1 = require("../models/producto.model");
const postRouters = express_1.Router();
postRouters.post('/', [autenticacion_1.verificaToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        body.usuario = req.usuario._id;
        const userDB = yield producto_model_1.Producto.create(body);
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
exports.default = postRouters;
