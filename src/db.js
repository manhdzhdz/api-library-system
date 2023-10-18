import { createConnection, createPool } from "mysql2/promise";
//permite la conexion a la BD
export const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database:"library"
})