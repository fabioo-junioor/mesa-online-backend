import connect from '../database/connect.js';

const loginPessoa = async (req, res) => {
    const conn = await connect();
    const { email, senha } = req.body;
    
    try{
        const [result] = await conn.query('SELECT * FROM `usuario` WHERE `email` = ?',
            [email]
        );
        if(result.length === 0){
            return {
                statusCode: 401,
                message: 'Email ou senha incorretos E'
            }
        }
        if(result[0].senha !== senha){
            return {
                statusCode: 401,
                message: 'Email ou senha incorretos S'
            }       
        }
        return {
            statusCode: 200,
            message: 'Login autorizado',
            data: result

        }
    }catch(err){
        return {
            statusCode: 500,
            message: err.message
        }
    }    
}
const loginEstabelecimento = async (req, res) => {
    return console.log('LE')
    
}

export {
    loginPessoa,
    loginEstabelecimento
}