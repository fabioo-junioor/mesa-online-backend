import { Router } from 'express';
const router = Router();

//Controllers
import pessoaController from '../controllers/pessoa.controller.js';

//GET
router.get('/pessoa/:id', pessoaController.show);

//POST


//PUT
router.put('/pessoa/:id', pessoaController.update);


export default router;