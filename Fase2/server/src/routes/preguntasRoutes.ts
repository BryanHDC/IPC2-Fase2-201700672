import { Router} from 'express';
import preguntasController from '../controllers/preguntaController'
class PreguntasRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',preguntasController.list);
        this.router.get('/:id',preguntasController.getOne);
        this.router.post('/',preguntasController.create)
        this.router.delete('/:id',preguntasController.delete)
        this.router.put('/:id',preguntasController.update)
    }
}
const preguntasRoutes=new PreguntasRoutes();
export default preguntasRoutes.router;