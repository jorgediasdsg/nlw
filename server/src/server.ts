import express from 'express';

const app = express();

app.get('/users',(request, response) => {
    console.log('Listagem de usuários:');

    response.json([
        'Jorge',
        'Camila',
        'Bartouch',
        'Java',
        'Toco'
    ]);
});


app.listen(3333);