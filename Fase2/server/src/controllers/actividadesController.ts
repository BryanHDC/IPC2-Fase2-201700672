import {Request,Response } from 'express'
import pool from '../database'
class ActividadesController{

    public async list (req:Request,res:Response)  {
       const actividades= await pool.query('SELECT * FROM Actividad');
       res.json(actividades);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        
        const users=await pool.query('SELECT * FROM Actividad WHERE CodigoActividad= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'Actividad Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Actividad set ?',[req.body]);
        
        res.json({message:'Actividad Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Actividad WHERE CodigoActividad= ?',[id]);
        
        res.json({message:'Actividad deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Actividad set ? WHERE Actividad= ?',[req.body,id]);
        res.json({text: 'Actividad Updated'})
    }
}
const actividadesController= new ActividadesController();
export default actividadesController;