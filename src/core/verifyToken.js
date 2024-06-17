import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config()
const secret = process.env.SECRET;

const verificaToken = (req, res, next) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            statusCode: 401,
            message: 'Não autorizado'
        })
    }
    try{
        jwt.verify(token, secret);
        next();

    }catch(err){
        res.status(500).json({
            statusCode: 500,
            message: 'Token invalido'
        })
    }
}

export default verificaToken;