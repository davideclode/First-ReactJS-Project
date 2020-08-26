import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
    <>
        <BrowserRouter >
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;

/*
Temos que importar o "BrowserRouter" caso contrário teremos erro. Após importarmos o "BrowserRouter" temos que colocá-lo nos por volta das rotas "<Routes />"
- O "BrowserRouter" funciona como o endereço "http://localhost:3000/"
- Para acessar uma rota em específico, utilizamos o "exact"
- Poderiamos importar "HashRouter" colocála no lugar de "BrowserRouter" funcionaria. Antigamente não era possível utilizar "BrowserRouter" dentro de aplicações com ReactJS. São rotas que utilizariamos no Servidor Node, PHP, Python.
- Mais detalhes pesquisar em: https://reactrouter.com/web/api/HashRouter
*/

/*
Poderiamos ter feito desta forma:
const App: React.FC = () => {
  return (
    <Routes />
  );
}
*/

/*
O "App" é a componente mais importante da nossa aplicação.
JSX: é asintaxe do HTML dentro de JAVASCRIP
*/

/*
O "App" é o primeiro componente que é exibido na tela. Então, precisamos mostrar/colocar as nossas rotas(routes) dentro de "App". Para isso, importamos a componente "Routes" e em seguida colocamos ele dentro do nosso "App"
*/

/*
Colocamos o "GlobalStyle" fora das nossas rotas "BrowserRouter". Mas para conseguir fazer isso, precisamos colocar o fragment "<> </>" no entorno
*/
