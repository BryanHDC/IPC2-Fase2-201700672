import { Router} from 'express';
import respuestasController from '../controllers/respuestasController'
class RespuestasRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',respuestasController.list);
        this.router.get('/:id',respuestasController.getOne);
        this.router.post('/',respuestasController.create)
        this.router.delete('/:id',respuestasController.delete)
        this.router.put('/:id',respuestasController.update)
    }
}
const respuestasRoutes=new RespuestasRoutes();
export default respuestasRoutes.router;