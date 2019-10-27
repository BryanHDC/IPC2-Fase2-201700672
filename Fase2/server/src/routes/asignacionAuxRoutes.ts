import { Router} from 'express';
import asignacionAuxController from '../controllers/asignacionAuxController'
class AsignacionAuxRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',asignacionAuxController.list);
        this.router.get('/:id',asignacionAuxController.getOne);
        this.router.post('/',asignacionAuxController.create)
        this.router.delete('/:id',asignacionAuxController.delete)
        this.router.put('/:id',asignacionAuxController.update)
    }
}
const asignacionAuxRoutes=new AsignacionAuxRoutes();
export default asignacionAuxRoutes.router;