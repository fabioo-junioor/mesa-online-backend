import { Router } from 'express';
const routerPessoa = Router();

//Controllers
import pessoaController from '../controllers/pessoa.controller.js';

//GET
routerPessoa.get('/:id', pessoaController.show);

//POST


//PUT
routerPessoa.put('/:id', pessoaController.update);


export default routerPessoa;