import { Router } from "express"


import {getAuthor,addAuthor,getAuthors,deleteAuthor,updateAuthor} from '../controllers/authors.controller.js'
const router=Router()

//crear los endpoints

router.get('/authors',getAuthors)
router.get('/authors/:id',getAuthor)
router.post('/authors',addAuthor)
router.delete('/authors/:id',deleteAuthor)
router.patch('/authors/:id',updateAuthor)
export default router;