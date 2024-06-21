import { Router } from 'express';
const routerPessoa = Router();

// Core
import verificaToken from '../core/verifyToken.js';

//Controllers
import pessoaController from '../controllers/pessoa.controller.js';

//GET
routerPessoa.get('/:id', verificaToken, pessoaController.show);

//POST
routerPessoa.post('/create', verificaToken, pessoaController.store)

//PUT
routerPessoa.put('/edit/:id', verificaToken, pessoaController.update);


export default routerPessoa;