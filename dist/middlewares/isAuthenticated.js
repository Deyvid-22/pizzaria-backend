"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
// vai ser usado para todas rotas que o usuario tem que ser logado
function isAuthenticated(req, res, next) {
    //receber token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    //validar esse token
    if (!authToken)
        return res.status(401).end();
    const [, token] = authToken.split(" ");
    if (!process.env.JWT_SECRET)
        throw new Error("Variavel de ambiente não existe");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //recuperar o id do token e coloca de uma variavel user_id dentro do req
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
