import { Router } from 'express';
const routerUsuario = Router();

// Core
import verificaToken from '../core/verifyToken.js';

//Controllers
import usuarioController from '../controllers/usuario.controller.js';


//POST
routerUsuario.post('/login', usuarioController.login);
routerUsuario.post('/create', usuarioController.store);

//PUT
routerUsuario.put('/edit/:id', verificaToken, usuarioController.update);


export default routerUsuario;