import {Request,Response } from 'express'
import pool from '../database'
class AsignacionEstudianteController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM AsignacionEstudiante');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM AsignacionEstudiante WHERE CarnetEstudiante= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Asignacion Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO AsignacionEstudiante set ?',[req.body]);
        
        res.json({message:'Asignacion Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM AsignacionEstudiante WHERE CarnetEstudiante= ?',[id]);
        
        res.json({message:'Asignacion deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE AsignacionEstudiante set ? WHERE CarnetEstudiante= ?',[req.body,id]);
        res.json({text: 'Asignacion Updated'})
    }
}
const asignacionEstudianteController= new AsignacionEstudianteController();
export default asignacionEstudianteController;