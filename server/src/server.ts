import express from 'express';  

const app = express();  

app.use(express.json()); //Importando json do express

app.get('/',(request, response) => {
    return response.json({ message: 'Hello world!'}); // retornando dados.
});

app.listen(3333);