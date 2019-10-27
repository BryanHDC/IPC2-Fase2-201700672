import {Request,Response } from 'express'
import pool from '../database'
class NotasController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM `Actividad-Estudiante`');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM `Actividad-Estudiante` WHERE CarnetEstudiante= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Nota Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO `Actividad-Estudiante` set ?',[req.body]);
        
        res.json({message:'Nota Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM `Actividad-Estudiante` WHERE CarnetEstudiante= ?',[id]);
        
        res.json({message:'Nota deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE `Actividad-Estudiante` set ? WHERE CarnetEstudiante= ?',[req.body,id]);
        res.json({text: 'Nota Updated'})
    }
}
const notasController= new NotasController();
export default notasController;