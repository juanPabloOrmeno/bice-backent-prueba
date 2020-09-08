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
const valores_service_1 = require("./../classes/valores.service");
const productoRouter = express_1.Router();
//ver productos
productoRouter.post('/valores', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const tipo = body.tipo || "dolar";
        const fecha = body.fecha;
        let datos = yield valores_service_1.indeconTipo(tipo, fecha);
        res.status(200).send({
            status: "true",
            datos: datos.data
        });
    }
    catch (e) {
        res.status(500).json({
            status: false,
            error: e
        });
    }
}));
//ver productos
productoRouter.get('/tipos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        let datos = yield valores_service_1.tipos();
        console.log(datos);
        res.status(200).send({
            status: "true",
            datos: datos
        });
    }
    catch (e) {
        res.status(500).json({
            status: false,
            error: e
        });
    }
}));
exports.default = productoRouter;
