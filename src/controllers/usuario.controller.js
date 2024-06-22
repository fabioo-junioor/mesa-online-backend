import { addUsuario, updateUsuario, verifyUsuarioExists, verifySenhaEquals } from '../models/usuario.model.js';
import { loginPessoa } from '../models/login.model.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config()
const secret = process.env.SECRET;

const store = async (req, res) => {
    try{
        const resposta = await verifyUsuarioExists(req);
        if(resposta.length !== 0){
            return res.status(200).json({
                statusCode: 200,
                message: 'Email já existe'
            })
        }
        if(!await addUsuario(req)){
            return res.status(406).json({
                statusCode: 406,
                message: 'Erro ao criar usuario'
            })
        }
        return res.status(201).json({
            statusCode: 201,
            message: 'Usuario criado'
        })
    }catch(err){
        console.log(err)
        
    }
}
const update = async (req, res) => {
    try{
        const { senha } = req.body;
        const resposta = (await verifySenhaEquals(req))[0]?.senha;
        if(senha !== resposta){
            return res.status(406).json({
                statusCode: 406,
                message: 'Senha atual invalida'
            })
        }
        if(!(await updateUsuario(req))){
            return res.status(406).json({
                statusCode: 406,
                message: 'Erro ao atualizar'
            })
        }
        return res.status(200).json({
            statusCode: 200,
            message: 'Atualização realizada'
        })
    }catch(err){
        console.log(err)
        
    }
}
const login = async (req, res) => {
    try {
        const resposta = await loginPessoa(req, res);
        if(resposta.statusCode === 200){
            const token = jwt.sign({name: resposta.email}, secret, {
                //expiresIn: 2 * 60
            })
            return res.status(resposta.statusCode).json({
                statusCode: resposta.statusCode,
                message: resposta.message,
                pkUsuario: resposta.data[0].pkUsuario,
                email: resposta.data[0].email,
                tipoUsuario: resposta.data[0].tipoUsuario,
                token
            });
        }
        return res.status(resposta.statusCode).json(resposta);

    }catch(err) {
        console.log(err);

    }
}

export default {
    store,
    update,
    login
}