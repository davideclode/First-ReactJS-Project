import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';


// Aqui dentro, nós vamos criar um novo componente chamado "Routes"
const Routes: React.FC = () => (
    <Switch>
        {/* Para cada uma das páginas da aplicação vamos ter uma rota */}
        <Route path="/" exact component={Dashboard} />
        {/* Precisamos falar que o repositório é tudo o que vem depois da barra. Para isso acrescentamos "/:repository+" */}
        <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
);

export default Routes;

/*
- O "Route" é uma componente também.
- Dentro do Route tempos:
- "path" é O endereço que vai ser acessado
- "component" é a componente que vai ser mostrada quando o usuário assessar o endereço
*/


/*
Quando temos funções onde botamos o corpo dela com chaves"{}" e logo dentro dela temos um return sem nenhum outro conteúdo podemos utilizar parenteses logo depois de "=>" para fazer o retorno automático.
Este trecho de código abaixo é o mesmo que o de cima.

const Routes = () => {
    return (

    );
}
*/

/*
Sobre o "Switch": Deixassemos <> </> sem a div Switch e tirássemos o "exact", todas as rotas são mostradas ao mesmo tempo. Portanto, O "Switch" garante que a penas uma rota seja exibida.
*/
