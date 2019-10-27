"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AsignacionEstudianteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM AsignacionEstudiante');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM AsignacionEstudiante WHERE CarnetEstudiante= ?', [id]);
            if (users.lenght = 1) {
                res.json(users[0]);
            }
            else {
                res.status(404).json({ text: 'Asignacion Doesnt Exist' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO AsignacionEstudiante set ?', [req.body]);
            res.json({ message: 'Asignacion Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Delete FROM AsignacionEstudiante WHERE CarnetEstudiante= ?', [id]);
            res.json({ message: 'Asignacion deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE AsignacionEstudiante set ? WHERE CarnetEstudiante= ?', [req.body, id]);
            res.json({ text: 'Asignacion Updated' });
        });
    }
}
const asignacionEstudianteController = new AsignacionEstudianteController();
exports.default = asignacionEstudianteController;
