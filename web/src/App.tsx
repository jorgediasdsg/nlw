import React from 'react';
import './App.css';

// Como tudo funciona o react?
// index.html tem uma DIV root
// A DIV root está apontada no arquivo index.tsx
// No arquivo index.TSX tem uma tag em react chamada <App> com a importação deste arquivo app.tsx
// Aqui embaixo nessa DIV colocamos a função App retornando html puro e ...
// Voalá

//JSX 

function App() {
  return (
        <h1>Rodandooo!!</h1>
  );
}

export default App;
