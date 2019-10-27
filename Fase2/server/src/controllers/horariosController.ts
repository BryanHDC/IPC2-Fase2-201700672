import {Request,Response } from 'express'
import pool from '../database'
class HorarioController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM Horario');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Horario WHERE CodigoHorario= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Horario Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Horario set ?',[req.body]);
        
        res.json({message:'User Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Horario WHERE CodigoHorario= ?',[id]);
        
        res.json({message:'User deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Horario set ? WHERE CodigoHorario= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }
}
const horariosController= new HorarioController();
export default horariosController;