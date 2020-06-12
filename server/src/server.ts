import express from 'express';

const app = express();

const users = [
    'Jorge',
    'Camila',
    'Bartouch',
    'Java',
    'Toco',
    'Bode'
]

app.get('/users',(request, response) => {
    const search = String(request.query.search);
    
    const filteredusers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredusers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = (users[id]);
    return response.json(user);
});

app.post('/users', (request, response) => {

    const data = request.body;

    console.log(data);

    const user = {
        name: 'Jorge',
        email: 'jorgediascpd@gmail.com'
    };
    return response.json(user);
});

app.listen(3333);