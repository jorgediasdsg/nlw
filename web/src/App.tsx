import React from 'react';
import './App.css';

import Routes from './routes';

// Como tudo funciona o react?
// index.html tem uma DIV root
// A DIV root está apontada no arquivo index.tsx
// No arquivo index.TSX tem uma tag em react chamada <App> com a importação deste arquivo app.tsx
// Aqui embaixo nessa DIV colocamos a função App retornando html puro e ...
// Voalá

//JSX 
// Escrever xml/html dentro do Javascript.

// Component, criamos o component header e colocamos aqui.

// Atributo como o title abaixo. Olhe o arquivo do header com a definição.


function App() {
    return (
          <Routes />
  );
}

export default App;
