"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadesController_1 = __importDefault(require("../controllers/actividadesController"));
class ActividadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', actividadesController_1.default.list);
        this.router.get('/:id', actividadesController_1.default.getOne);
        this.router.post('/', actividadesController_1.default.create);
        this.router.delete('/:id', actividadesController_1.default.delete);
        this.router.put('/:id', actividadesController_1.default.update);
    }
}
const actividadesRoutes = new ActividadesRoutes();
exports.default = actividadesRoutes.router;
