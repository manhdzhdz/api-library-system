import { CheckConnection } from "../controllers/connection.controller.js";
import { Router } from "express";
const router=Router()
//crear una petición para verificar la conexion a la base de datos
router.get ('/connection',CheckConnection)

export default router