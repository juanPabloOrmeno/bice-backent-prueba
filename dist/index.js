"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongo_1 = require("./classes/mongo");
const cors_1 = __importDefault(require("cors"));
const valores_Routes_1 = __importDefault(require("./routes/valores.Routes"));
const server = new server_1.default();
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//body parse
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//rutas
server.app.use('/valores', valores_Routes_1.default);
//conectar bd
mongo_1.connectMongo();
//levanta espress
server.start();