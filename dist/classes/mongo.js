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
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("../global/environment");
const { MongoClient } = require('mongodb');
exports.connectMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        user: environment_1.USER_MONGO,
        pass: environment_1.PASS_MONGO,
        useUnifiedTopology: true
    };
    try {
        mongoose_1.default.Promise = global.Promise;
        yield mongoose_1.default.connect('mongodb://' + environment_1.URL_MONGO + '/' + environment_1.BASE_DATOS_MONGO, config);
        console.log('Base de datos conectada correctamente');
    }
    catch (e) {
        setTimeout(() => {
            console.log("Error en la conneccion con mongo - reintentando en 5 segundos");
            exports.connectMongo();
        }, 5000);
    }
});
