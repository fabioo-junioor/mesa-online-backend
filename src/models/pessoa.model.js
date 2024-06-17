import connect from '../database/connect.js';

const getPessoa = async (id) => {
    const conn = await connect();
    try{
        const [result] = await conn.query('SELECT * FROM `pessoa` WHERE `pkPessoa` = ?',
            [id]
        );
        return result;

    }catch(err){
        return err;

    }    
}
const updatePessoa = async (req) => {
    const conn = await connect();
    try{
        const { pkUsuario, nome, telefone } = req.body;
        const [result] = await conn.execute('UPDATE `pessoa` SET `nome` = ?, `telefone` = ? WHERE `fkUsuario` = ?',
            [nome, telefone, pkUsuario]
        );
        return true;
        
    }catch(err){
        return false;

    }
}

export {
    getPessoa,
    updatePessoa
}