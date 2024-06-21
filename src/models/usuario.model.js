import connect from '../database/connect.js';

const addUsuario = async (req) => {
    const conn = await connect();
    try{
        const { email, senha, tipoUsuario } = req.body;
        const [result] = await conn.execute('INSERT INTO `usuario` (email, senha, tipoUsuario) VALUES (?, ?, ?)',
            [email, senha, tipoUsuario]
        );
        return true;
        
    }catch(err){
        return false;

    }
}
const updateUsuario = async (req) => {
    const conn = await connect();
    try{
        const pkUsuario = req.params.id;
        const { novaSenha } = req.body;
        const [result] = await conn.execute('UPDATE `usuario` SET `senha` = ? WHERE `pkUsuario` = ?',
            [novaSenha, pkUsuario]
        );
        return true;
        
    }catch(err){
        return false;

    }
}
const verifyUsuarioExists = async (req) => {
    const conn = await connect();
    try {
        const { email } = req.body;
        const [result] = await conn.execute('SELECT * FROM `usuario` WHERE `email` = ?',
            [email]
        );
        return result;

    }catch(err) {
        return false;

    }
}
const verifySenhaEquals = async (req) => {
    const conn = await connect();
    try {
        const pkUsuario = req.params.id;
        const [result] = await conn.execute('SELECT * FROM `usuario` WHERE `pkUsuario` = ?',
            [pkUsuario]
        );
        return result;

    }catch(err){
        return false;
        
    }
}

export {
    addUsuario,
    updateUsuario,
    verifyUsuarioExists,
    verifySenhaEquals
}