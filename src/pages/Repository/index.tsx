import React, { useEffect, useState } from 'react';
// Suponhamos que agora queremos pegar a informação "facebook/react"nas nossas rotas.
// Para isso, importamos "useRouteMatch" de dentro de react-router-dom.
import { useRouteMatch, Link } from 'react-router-dom';
// Importação do ícone que aponta para esquerda
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issues {
    id: string;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

// Vamos criar a nossa componente Repository
const Repository: React.FC = () => {
    // utilizando "useState" para salvar o informações do repositório dentro do meu componente. Para isso vou utilizar useState. Estamos dizendo também que o nosso "useState" pode ser "epository ou null"
    const [ repository, setRepository ] = useState<Repository | null>(null);
    // Começando "issues" e "setIssues" com array vazio. Lembrando também que, sempre que criarmos um estado que não é um valor primitivo(string, number, boolean), ou seja, quando é um array("[]") ou um objeto("{}") como logo em baixo, devemos tipá-la.
    const [ issues, setIssues ] = useState<Issues[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    /* Utilizando o "useEffect" para controlar o "efeito colateral". Quero disparar uma função sempre que algo/variável muda. Neste caso aqui, é só para questão de efeito mesmo. */
    useEffect(() => {
        // Aqui dentro vamos fazer a nossa chamada API.
        // Vou disparar uma chamada api.get(`aqui vai a rota`)
        // api.get(`repos/nomeDorepositório`). Podemos pegar o nome do repositório fazenso "params.repository". Quando a gente obter o resultado desse nosso repositório(then), vou colocá-lo dentro da variável "response" e em seguida vou salvá-lo em algum lugar. Como estou utilizando a variável(params.repository) dentro do "useEffect", então preciso também colocar essa variável nas minhas dependências"[]"".
        // Aqui estou buscando os dados do repositório
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        /* Além de buscar os dados do meu repositorio, preciso também buscar os dados das issues do repositório */
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });

    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            {/* Isso é uma condicional */}
            {/* Se existir algo dentro do "repository", então me mostre o "repository", "owner" e o "avatar_url". Se não existir nada no "repository", então o programa nem vai entrar nessa parte(<img src={repository.owner.avatar_url} alt="Rocketseat🏹"/>) para exibir o "repository", o "owner" e o "avatar_url". */}
            { repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        {/* Essa div é para título do repositório e também para descrição */}
                        <div>
                            <strong> {repository.full_name} </strong>
                            <p> {repository.description} </p>
                        </div>
                    </header>
                    {/* Essa parte é para cada uma das "Stars, forks e Issues " as informações */}
                    <ul>
                        <li>
                            <strong> {repository.stargazers_count} </strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong> {repository.forks_count} </strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong> {repository.open_issues_count} </strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            ) }

            {/* Essa parte é para apresentação das issues. */}
            <Issues>
                {/* Para cada uma das issues, vou pegar as issues... */}
                {issues.map(issues => (
                    // Tiramos o "Link" e colocamos o "a" porque se deixarmos ele vai achar que uma rota interna
                    <a key={issues.id} href={issues.html_url}>
                        <div>
                            <strong> {issues.title} </strong>
                            <p> {issues.user.login} </p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
}

export default Repository;
