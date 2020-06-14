import React, { useState } from 'react';
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

// Atributo como o title abaixo. Olhe o arquivo do header com a definição.


function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick(){
    setCounter(counter+1);
    console.log(counter);
  }


  return (
        <div>
          <Header title='Ecoleta' />
          <h1>{counter}</h1>
          <button type='button' onClick={handleButtonClick}>Aumentar</button>
        </div>
  );
}

export default App;
