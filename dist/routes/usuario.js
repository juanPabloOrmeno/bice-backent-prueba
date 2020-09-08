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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_model_1 = require("../models/usuario.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_1 = __importDefault(require("../classes/token"));
const autenticacion_1 = require("../middlewares/autenticacion");
const userRouters = express_1.Router();
//login
userRouters.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const usuario = yield usuario_model_1.Usuario.findOne({ email: body.email });
        if (usuario && usuario.compararPass(body.password)) {
            const token = token_1.default.getJwsToken({
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
            });
            return res.status(200).json({
                token: token
            });
        }
        else {
            return res.status(500).json({
                mensaje: 'Usuario/contraseña no son correctos'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}));
//crear usuario
userRouters.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: bcrypt_1.default.hashSync(req.body.password, 10)
        };
        const userDB = yield usuario_model_1.Usuario.create(user);
        const token = token_1.default.getJwsToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
        });
        res.status(200).send({
            token: token
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}));
// Actualizar usuario
userRouters.post('/update', autenticacion_1.verificaToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            nombre: req.body.nombre || req.usuario.nombre,
            email: req.body.email || req.usuario.email
        };
        const userDB = yield usuario_model_1.Usuario.findByIdAndUpdate(req.usuario._id, user, { new: true });
        if (!userDB) {
            res.json({
                ok: false,
                mensaje: 'No existe un usuario con ese ID'
            });
        }
        else {
            const tokenUser = token_1.default.getJwsToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                email: userDB.email,
            });
            res.json({
                token: tokenUser
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}));
exports.default = userRouters;
