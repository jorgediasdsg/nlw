import express from 'express';

const routes = express.Router();

app.get('/', (request, response) =>{
    return response.json({ message: 'Hello Word'});
});