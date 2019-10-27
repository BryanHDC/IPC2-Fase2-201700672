"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionAuxController_1 = __importDefault(require("../controllers/asignacionAuxController"));
class AsignacionAuxRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asignacionAuxController_1.default.list);
        this.router.get('/:id', asignacionAuxController_1.default.getOne);
        this.router.post('/', asignacionAuxController_1.default.create);
        this.router.delete('/:id', asignacionAuxController_1.default.delete);
        this.router.put('/:id', asignacionAuxController_1.default.update);
    }
}
const asignacionAuxRoutes = new AsignacionAuxRoutes();
exports.default = asignacionAuxRoutes.router;
