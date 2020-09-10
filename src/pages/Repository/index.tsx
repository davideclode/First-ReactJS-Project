import React from 'react';
// Suponhamos que agora queremos pegar a informação "facebook/react"nas nossas rotas.
// Para isso, importamos "useRouteMatch" de dentro de react-router-dom.
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
    repository: string;
}

// Vamos criar a nossa componente Repository
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

return <h1>Repository:{params.repository}</h1>;
}

export default Repository;
