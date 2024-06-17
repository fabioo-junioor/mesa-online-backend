import connect from '../database/connect.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config()
const secret = process.env.SECRET;

const loginPessoa = async (req, res) => {
    const conn = await connect();
    const { email, senha } = req.body;
    
    try{
        const [result] = await conn.query('SELECT * FROM `usuario` WHERE `email` = ?',
            [email]
        );
        if(result.length === 0){
            return res.status(401).json({
                statusCode: 401,
                message: 'Email ou senha incorretos E'
            })
        }
        if(result[0].senha !== senha){
            return res.status(401).json({
                statusCode: 401,
                message: 'Email ou senha incorretos S'
            })            
        }
        const token = jwt.sign({name: result[0].email}, secret, {
            //expiresIn: 2 * 60
        })
        return res.status(200).json({
            statusCode: 200,
            message: 'Login autorizado',
            data: token
        })
    }catch(err){
        res.status(500).json({
            statusCode: 500,
            message: err.message
        })
    }    
}
const loginEstabelecimento = async (req, res) => {
    return console.log('LE')
    
}

export default {
    loginPessoa,
    loginEstabelecimento
}