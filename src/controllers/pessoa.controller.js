import { getPessoa, updatePessoa } from '../models/pessoa.model.js';

const show = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await getPessoa(id)
        res.status(200).json({
            statusCode: 200,
            data: data
        })
    }catch(err){

    }
}
const store = async (req, res) => {
    
}
const update = async (req, res) => {
    try{
        if(await updatePessoa(req)){
            return res.status(200).json({
                statusCode: 200,
                message: 'Atualizada'
            })
        }
        return res.status(406).json({
            statusCode: 406,
            message: 'Erro na atualização'
        })
    }catch(err){
        console.log(err)

    }
}

export default {
    show,
    store,
    update
}