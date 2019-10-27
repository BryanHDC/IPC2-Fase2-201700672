import {Request,Response } from 'express'
import pool from '../database'
class SemestreController{

    public async list (req:Request,res:Response)  {
       const users= await pool.query('SELECT * FROM Semestre');
       res.json(users);
    }

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Semestre WHERE CodigoSemestre= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'User Doesnt Exist'});}
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Semestre set ?',[req.body]);
        
        res.json({message:'User Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Semestre WHERE CodigoSemestre= ?',[id]);
        
        res.json({message:'User deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Semestre set ? WHERE CodigoSemestre= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }
}
const semestresController= new SemestreController();
export default semestresController;