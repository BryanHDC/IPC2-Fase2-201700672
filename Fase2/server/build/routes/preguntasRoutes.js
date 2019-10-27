"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preguntaController_1 = __importDefault(require("../controllers/preguntaController"));
class PreguntasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', preguntaController_1.default.list);
        this.router.get('/:id', preguntaController_1.default.getOne);
        this.router.post('/', preguntaController_1.default.create);
        this.router.delete('/:id', preguntaController_1.default.delete);
        this.router.put('/:id', preguntaController_1.default.update);
    }
}
const preguntasRoutes = new PreguntasRoutes();
exports.default = preguntasRoutes.router;
