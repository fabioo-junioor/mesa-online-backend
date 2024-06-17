import { Router } from 'express';
const router = Router();
import routerPessoa from './routes.pessoa.js';
import routerUsuario from './routes.usuario.js';

// Core
import verificaToken from '../core/verifyToken.js';

router.use('/pessoa', verificaToken, routerPessoa);
router.use('/usuario', verificaToken, routerUsuario);


export default router;