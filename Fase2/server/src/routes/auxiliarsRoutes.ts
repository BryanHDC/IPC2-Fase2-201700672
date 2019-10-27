import { Router} from 'express';
import auxiliarsController from '../controllers/auxiliarsController'
class AuxiliarsRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',auxiliarsController.list);
        this.router.get('/:id',auxiliarsController.getOne);
        this.router.post('/',auxiliarsController.create)
        this.router.delete('/:id',auxiliarsController.delete)
        this.router.put('/:id',auxiliarsController.update)
    }
}
const auxiliarRoutes=new AuxiliarsRoutes();
export default auxiliarRoutes.router;