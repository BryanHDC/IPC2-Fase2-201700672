import { Router} from 'express';
import semestresController from '../controllers/semestreController'
class SemestresRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',semestresController.list);
        this.router.get('/:id',semestresController.getOne);
        this.router.post('/',semestresController.create)
        this.router.delete('/:id',semestresController.delete)
        this.router.put('/:id',semestresController.update)
    }
}
const semestresRoutes=new SemestresRoutes();
export default semestresRoutes.router;