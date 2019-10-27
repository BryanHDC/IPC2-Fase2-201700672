"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notasController_1 = __importDefault(require("../controllers/notasController"));
class NotasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', notasController_1.default.list);
        this.router.get('/:id', notasController_1.default.getOne);
        this.router.post('/', notasController_1.default.create);
        this.router.delete('/:id', notasController_1.default.delete);
        this.router.put('/:id', notasController_1.default.update);
    }
}
const notasRoutes = new NotasRoutes();
exports.default = notasRoutes.router;
