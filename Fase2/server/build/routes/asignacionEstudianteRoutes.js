"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionEstudianteController_1 = __importDefault(require("../controllers/asignacionEstudianteController"));
class AsignacionEstudianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asignacionEstudianteController_1.default.list);
        this.router.get('/:id', asignacionEstudianteController_1.default.getOne);
        this.router.post('/', asignacionEstudianteController_1.default.create);
        this.router.delete('/:id', asignacionEstudianteController_1.default.delete);
        this.router.put('/:id', asignacionEstudianteController_1.default.update);
    }
}
const asignacionEstudianteRoutes = new AsignacionEstudianteRoutes();
exports.default = asignacionEstudianteRoutes.router;
