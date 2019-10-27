import {Request,Response } from 'express'
import pool from '../database'
class ForosController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM Foro');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Foro WHERE CodigoCurso= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Foro Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Foro set ?',[req.body]);
        
        res.json({message:'Foro Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Foro WHERE CodigoCurso=?',[id]);
        
        res.json({message:'User deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Foro set ? WHERE CodigoCurso= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }
}
const forosController= new ForosController();
export default forosController;