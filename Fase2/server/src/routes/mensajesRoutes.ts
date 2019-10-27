import { Router} from 'express';
import mensajesController from '../controllers/mensajesController'
class MensajesRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',mensajesController.list);
        this.router.get('/:id',mensajesController.getOne);
        this.router.post('/',mensajesController.create)
        this.router.delete('/:id',mensajesController.delete)
        this.router.put('/:id',mensajesController.update)
    }
}
const mensajesRoutes=new MensajesRoutes();
export default mensajesRoutes.router;