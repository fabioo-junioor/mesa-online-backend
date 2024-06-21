import { Router } from 'express';
const router = Router();
import routerPessoa from './routes.pessoa.js';
import routerUsuario from './routes.usuario.js';

// Core
import verificaToken from '../core/verifyToken.js';

router.get('/', (req, res) => res.send('Servidor rodando!'))
router.use('/usuario', routerUsuario);
router.use('/pessoa', verificaToken, routerPessoa);


export default router;