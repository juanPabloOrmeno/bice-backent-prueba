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
const axios_1 = __importDefault(require("axios"));
const environment_1 = require("../global/environment");
let indeconTipo = (tipo, fecha) => __awaiter(void 0, void 0, void 0, function* () {
    let datos = yield axios_1.default.get(`${environment_1.URL_LAST}/${tipo}/${fecha}`);
    return datos;
});
exports.indeconTipo = indeconTipo;
let tipos = () => __awaiter(void 0, void 0, void 0, function* () {
    let datos = yield axios_1.default.get(environment_1.URL_TIPOS);
    let objectArray = Object.entries(datos.data);
    return objectArray.map(dato => {
        console.log(dato);
        return dato[0];
    });
});
exports.tipos = tipos;
