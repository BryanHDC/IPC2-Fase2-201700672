import { Router} from 'express';
import ticketsController from '../controllers/ticketController'
class TicketsRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',ticketsController.list);
        this.router.get('/:id',ticketsController.getOne);
        this.router.post('/',ticketsController.create)
        this.router.delete('/:id',ticketsController.delete)
        this.router.put('/:id',ticketsController.update)
    }
}
const ticketsRoutes=new TicketsRoutes();
export default ticketsRoutes.router;