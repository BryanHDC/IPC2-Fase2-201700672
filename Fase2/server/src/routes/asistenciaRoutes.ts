import { Router} from 'express';
import asistenciaController from '../controllers/asistenciaController'
class AsistenciaRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',asistenciaController.list);
        this.router.get('/:id',asistenciaController.getOne);
        this.router.post('/',asistenciaController.create)
        this.router.delete('/:id',asistenciaController.delete)
        this.router.put('/:id',asistenciaController.update)
    }
}
const asistenciaRoutes=new AsistenciaRoutes();
export default asistenciaRoutes.router;