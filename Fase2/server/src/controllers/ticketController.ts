import {Request,Response } from 'express'
import pool from '../database'
class TicketController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM Ticket');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Ticket WHERE CodigoCurso= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'User Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Ticket set ?',[req.body]);
        
        res.json({message:'User Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Ticket WHERE CodigoCurso= ?',[id]);
        
        res.json({message:'User deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Ticket set ? WHERE CodigoCurso= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }
}
const ticketsController= new TicketController();
export default ticketsController;