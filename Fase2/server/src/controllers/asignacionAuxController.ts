import {Request,Response } from 'express'
import pool from '../database'
class AsignacionAuxController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM AsignacionAuxiliar');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM AsignacionAuxiliar WHERE CarnetAuxiliar= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'User Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO AsignacionAuxiliar set ?',[req.body]);
        
        res.json({message:'Asignacion Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM AsignacionAuxiliar WHERE CarnetAuxiliar= ?',[id]);
        
        res.json({message:'Asignacion deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE AsignacionAuxiliar set ? WHERE CarnetAuxiliar= ?',[req.body,id]);
        res.json({text: 'Asignacion Updated'})
    }
}
const asignacionAuxiliarController= new AsignacionAuxController();
export default asignacionAuxiliarController;