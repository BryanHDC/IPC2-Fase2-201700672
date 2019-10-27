"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const respuestasController_1 = __importDefault(require("../controllers/respuestasController"));
class RespuestasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', respuestasController_1.default.list);
        this.router.get('/:id', respuestasController_1.default.getOne);
        this.router.post('/', respuestasController_1.default.create);
        this.router.delete('/:id', respuestasController_1.default.delete);
        this.router.put('/:id', respuestasController_1.default.update);
    }
}
const respuestasRoutes = new RespuestasRoutes();
exports.default = respuestasRoutes.router;
