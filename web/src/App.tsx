import React from 'react';
import './App.css';
import Header from './Header';
// Como tudo funciona o react?
// index.html tem uma DIV root
// A DIV root está apontada no arquivo index.tsx
// No arquivo index.TSX tem uma tag em react chamada <App> com a importação deste arquivo app.tsx
// Aqui embaixo nessa DIV colocamos a função App retornando html puro e ...
// Voalá

//JSX 
// Escrever xml/html dentro do Javascript.

// Component, criamos o component header e colocamos aqui.

// Atributo

function App() {
  return (
        <div>
          <Header title='Ecoleta' />
          <h1>Conteúdo da aplicação</h1>
        </div>
  );
}

export default App;
