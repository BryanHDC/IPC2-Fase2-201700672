import {Request,Response } from 'express'
import pool from '../database'
class CursosController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM Curso');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Curso WHERE CodigoCurso= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Curso Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Curso set ?',[req.body]);
        
        res.json({message:'Curso Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Curso WHERE CodigoCurso= ?',[id]);
        
        res.json({message:'Curso deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Curso set ? WHERE CodigoCurso= ?',[req.body,id]);
        res.json({text: 'Curso Updated'})
    }
}
const cursosController= new CursosController();
export default cursosController;