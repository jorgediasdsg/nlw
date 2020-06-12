//Express é usado para gerenciar as rotas da aplicação

//Rota: endereço completo da requisição
//Recurso: Qual entidade estamos acessando o sistema

// GET: Buscar uma ou mais infornações no back-end.
// POST: Criar uma nova informação no back-end.
// PUT: Atualizar infoirmação existente no back-end.
// DELETE: Remover informação do back-end.

// POST: http://localhost:3333/users = Criar usuário;
// GET: http://localhost:3333/users = Listar usuários;
// GET: http://localhost:3333/users/5 = Buscar dados do usuário com ID 5;

// Request Param: Parâmetros que vem na própria rota que identifica, um recurso.
// QUERY Param: Parâmentros que vem na pŕopria rota geralmente opcionais como filtros.
// Resquest Body: Parâmetros para criação/atualização de informações.

import express from 'express';  

const app = express();  

app.use(express.json()); //Importando json do express

const users = [
    'Jorge',
    'Camila',
    'Bartouch',
    'Java',
    'Toco',
    'Bode'
];

app.get('/users',(request, response) => {
    const search = String(request.query.search); // Criando método de filtragem
    
    const filteredusers = search ? users.filter(user => user.includes(search)) : users; //Fazendo a filtragem se existente com  ternário.

    response.json(filteredusers); // retornando dados.
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); // Convertemos para Number para não dar o erro do typescript
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});

app.listen(3333);