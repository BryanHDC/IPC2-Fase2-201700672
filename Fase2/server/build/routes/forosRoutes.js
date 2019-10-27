"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ForosController_1 = __importDefault(require("../controllers/ForosController"));
class ForosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ForosController_1.default.list);
        this.router.get('/:id', ForosController_1.default.getOne);
        this.router.post('/', ForosController_1.default.create);
        this.router.delete('/:id', ForosController_1.default.delete);
        this.router.put('/:id', ForosController_1.default.update);
    }
}
const forosRoutes = new ForosRoutes();
exports.default = forosRoutes.router;
