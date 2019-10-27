"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const semestreController_1 = __importDefault(require("../controllers/semestreController"));
class SemestresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', semestreController_1.default.list);
        this.router.get('/:id', semestreController_1.default.getOne);
        this.router.post('/', semestreController_1.default.create);
        this.router.delete('/:id', semestreController_1.default.delete);
        this.router.put('/:id', semestreController_1.default.update);
    }
}
const semestresRoutes = new SemestresRoutes();
exports.default = semestresRoutes.router;
