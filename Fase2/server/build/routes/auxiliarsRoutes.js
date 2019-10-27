"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auxiliarsController_1 = __importDefault(require("../controllers/auxiliarsController"));
class AuxiliarsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', auxiliarsController_1.default.list);
        this.router.get('/:id', auxiliarsController_1.default.getOne);
        this.router.post('/', auxiliarsController_1.default.create);
        this.router.delete('/:id', auxiliarsController_1.default.delete);
        this.router.put('/:id', auxiliarsController_1.default.update);
    }
}
const auxiliarRoutes = new AuxiliarsRoutes();
exports.default = auxiliarRoutes.router;
