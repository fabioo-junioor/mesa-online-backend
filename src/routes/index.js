import { Router } from 'express';
const router = Router();
import routerPessoa from './routes.pessoa.js';
import routerUsuario from './routes.usuario.js';


router.use('/pessoa', routerPessoa);
router.use('/usuario', routerUsuario);


export default router;