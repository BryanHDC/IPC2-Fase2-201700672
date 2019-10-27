import { Router} from 'express';
import forosController from '../controllers/ForosController'
class ForosRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',forosController.list);
        this.router.get('/:id',forosController.getOne);
        this.router.post('/',forosController.create)
        this.router.delete('/:id',forosController.delete)
        this.router.put('/:id',forosController.update)
    }
}
const forosRoutes=new ForosRoutes();
export default forosRoutes.router;