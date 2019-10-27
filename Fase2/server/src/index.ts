import express,{ Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usersRoutes from './routes/usersRoutes';
import auxiliarsRoutes from './routes/auxiliarsRoutes'
import actividadesRoutes from './routes/actividadesRoutes'
import notasRoutes from './routes/notasRoutes'
import asignacionAuxRoutes from './routes/asignacionAuxRoutes'
import asignacionEstudianteRoutes from './routes/asignacionEstudianteRoutes'
import asistenciaRoutes from './routes/asistenciaRoutes'
import cursosRoutes from './routes/cursosRoutes'
import forosRoutes from './routes/forosRoutes'
import horariosRoutes from './routes/horariosRoutes'
import mensajesRoutes from './routes/mensajesRoutes'
import preguntasRoutes from './routes/preguntasRoutes'
import respuestasRoutes from './routes/respuestasRoutes'
import semestresRoutes from './routes/semestreRoutes'
import ticketsRoutes from './routes/ticketsRoutes'
import morgan from 'morgan';
import cors from 'cors';
class Server{
    public app: Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    
    config(): void{
        this.app.set('port',process.env.port|| 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use('/',indexRoutes)
        this.app.use('/api/users',usersRoutes)
        this.app.use('/api/auxiliares',auxiliarsRoutes)
        this.app.use('/api/actividades',actividadesRoutes)
        this.app.use('/api/notas',notasRoutes)
        this.app.use('/api/asignacion/auxiliar',asignacionAuxRoutes)
        this.app.use('/api/asignacion/estudiante',asignacionEstudianteRoutes)
        this.app.use('/api/asistencia',asistenciaRoutes)
        this.app.use('/api/cursos',cursosRoutes)
        this.app.use('/api/foros',forosRoutes)
        this.app.use('/api/horarios',horariosRoutes)
        this.app.use('/api/mensajes',mensajesRoutes)
        this.app.use('/api/preguntas',preguntasRoutes)
        this.app.use('/api/respuestas',preguntasRoutes)
        this.app.use('/api/semestres',semestresRoutes)
        this.app.use('/api/tickets',ticketsRoutes)
        
    }
    start(): void{
        this.app.listen(this.app.get('port'),() => {
            console.log('Server on port:',this.app.get('port'))
        });
    }
}
const server= new Server();
server.start();