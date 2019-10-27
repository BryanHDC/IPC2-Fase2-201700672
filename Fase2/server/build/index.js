"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const auxiliarsRoutes_1 = __importDefault(require("./routes/auxiliarsRoutes"));
const actividadesRoutes_1 = __importDefault(require("./routes/actividadesRoutes"));
const notasRoutes_1 = __importDefault(require("./routes/notasRoutes"));
const asignacionAuxRoutes_1 = __importDefault(require("./routes/asignacionAuxRoutes"));
const asignacionEstudianteRoutes_1 = __importDefault(require("./routes/asignacionEstudianteRoutes"));
const asistenciaRoutes_1 = __importDefault(require("./routes/asistenciaRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
const forosRoutes_1 = __importDefault(require("./routes/forosRoutes"));
const horariosRoutes_1 = __importDefault(require("./routes/horariosRoutes"));
const mensajesRoutes_1 = __importDefault(require("./routes/mensajesRoutes"));
const preguntasRoutes_1 = __importDefault(require("./routes/preguntasRoutes"));
const semestreRoutes_1 = __importDefault(require("./routes/semestreRoutes"));
const ticketsRoutes_1 = __importDefault(require("./routes/ticketsRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/users', usersRoutes_1.default);
        this.app.use('/api/auxiliares', auxiliarsRoutes_1.default);
        this.app.use('/api/actividades', actividadesRoutes_1.default);
        this.app.use('/api/notas', notasRoutes_1.default);
        this.app.use('/api/asignacion/auxiliar', asignacionAuxRoutes_1.default);
        this.app.use('/api/asignacion/estudiante', asignacionEstudianteRoutes_1.default);
        this.app.use('/api/asistencia', asistenciaRoutes_1.default);
        this.app.use('/api/cursos', cursosRoutes_1.default);
        this.app.use('/api/foros', forosRoutes_1.default);
        this.app.use('/api/horarios', horariosRoutes_1.default);
        this.app.use('/api/mensajes', mensajesRoutes_1.default);
        this.app.use('/api/preguntas', preguntasRoutes_1.default);
        this.app.use('/api/respuestas', preguntasRoutes_1.default);
        this.app.use('/api/semestres', semestreRoutes_1.default);
        this.app.use('/api/tickets', ticketsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
