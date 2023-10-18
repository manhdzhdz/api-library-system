import express  from "express";
import authorsRouter from './routes/authors.routes.js'
// import connectionRouter from './routes/connection.routes.js'
//importar las variables de entorno
import './config.js'
const app=express()
app.use(express.json())
app.use('/api',authorsRouter)
// app.use(connectionRouter)
//MANEJO DE ERRORES CUANDO LA RUTA NO ES ENCONTRADA!
app.use((req,res,next)=>{
    res.status(404).json({
     message:"Ruta no encontrada... Verificar!"
    })
})
export default app;

