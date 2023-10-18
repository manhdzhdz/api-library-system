import {pool} from '../db.js'
export const CheckConnection=async(req,res)=>{
    const [result]=await pool.query('SELECT 7+8 AS RESULT')
    res.send(result[0])
}