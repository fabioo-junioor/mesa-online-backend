import app from './src/app.js';
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    if(error){
        console.log('Erro!');
        return;

    }
    console.log('Servidor rodando ma porta ' + PORT + '!');
})