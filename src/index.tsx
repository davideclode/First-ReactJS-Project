import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* Esse nosso arquivo "index.tsx" utiliza o 'react-dom' para renderizar a nossa aplicação
  <React.StrictMode>
    <App />
  </React.StrictMode>,

dentro de um elemento da dom "getElementById" que neste caso tem a div chamada "root".

O "React.StrictMode" é utilizada para poder melhorar a tratativa de erros
*/
