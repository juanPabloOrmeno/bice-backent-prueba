"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es requerido']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'el email es requerido']
    },
    password: {
        type: String,
        required: [true, 'el pass es requerido']
    }
});
usuarioSchema.method('compararPass', function (password = '') {
    if (bcrypt_1.default.compareSync(password, this.password))
        return true;
    else
        return false;
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
