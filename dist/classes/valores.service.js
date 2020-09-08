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
exports.valoresTipo = exports.tipos = exports.indeconTipo = void 0;
const axios_1 = __importDefault(require("axios"));
const environment_1 = require("../global/environment");
let indeconTipo = (tipo, fecha) => __awaiter(void 0, void 0, void 0, function* () { return yield axios_1.default.get(`${environment_1.URL_LAST}/${tipo}/${fecha}`); });
exports.indeconTipo = indeconTipo;
let tipos = () => __awaiter(void 0, void 0, void 0, function* () { return (yield axios_1.default.get(environment_1.URL_TIPOS)).data; });
exports.tipos = tipos;
let valoresTipo = (tipo) => __awaiter(void 0, void 0, void 0, function* () { return (yield axios_1.default.get(`${environment_1.URL_VALORES_TIPO}/${tipo}`)).data; });
exports.valoresTipo = valoresTipo;
