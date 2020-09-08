"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    static getJwsToken(payload) {
        return jsonwebtoken_1.default.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });
    }
    static comprobarToken(userToken) {
        return new Promise((resolve, rejects) => {
            jsonwebtoken_1.default.verify(userToken, this.seed, (err, decode) => {
                if (err) {
                    //no confiar
                    rejects();
                }
                else {
                    //token valido
                    resolve(decode);
                }
            });
        });
    }
}
exports.default = Token;
Token.seed = 'token';
Token.caducidad = '30d';
