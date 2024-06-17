import { Router } from 'express';
const routerUsuario = Router();

//Controllers
import loginController from '../controllers/login.controller.js';

//GET

//POST
routerUsuario.post('/login', loginController.loginPessoa);

//PUT


export default routerUsuario;