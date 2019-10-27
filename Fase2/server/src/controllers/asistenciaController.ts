import {Request,Response } from 'express'
import pool from '../database'
class AsistenciaController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM Asistencia');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Asistencia WHERE CarnetEstudiante= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Asistencia Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Asistencia set ?',[req.body]);
        
        res.json({message:'User Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Asistencia WHERE CarnetEstudiante= ?',[id]);
        
        res.json({message:'Asistencia deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Asistencia set ? WHERE AsistenciaEstudiante= ?',[req.body,id]);
        res.json({text: 'asistencia Updated'})
    }
}
const asistenciaController= new AsistenciaController();
export default asistenciaController;