import {Request,Response } from 'express'
import pool from '../database'
class AuxiliarController{

    public async list (req:Request,res:Response)  {
       const auxiliars= await pool.query('SELECT * FROM Auxiliar');
       res.json(auxiliars);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const auxiliars=await pool.query('SELECT * FROM Auxiliar WHERE CarnetAuxiliar= ?',[id]);
        if (auxiliars.lenght = 1){
            res.json(auxiliars[0]);
        }else
        {res.status(404).json({text: 'User Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Auxiliar set ?',[req.body]);
        
        res.json({message:'Auxiliar Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Auxiliar WHERE CarnetAuxiliar= ?',[id]);
        
        res.json({message:'Auxiliar deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Auxiliar set ? WHERE CarnetAuxiliar= ?',[req.body,id]);
        res.json({text: 'Auxiliar Updated'})
    }
}
const auxiliarsController= new AuxiliarController();
export default auxiliarsController;