import React from 'react';
// Suponhamos que agora queremos pegar a informação "facebook/react"nas nossas rotas.
// Para isso, importamos "useRouteMatch" de dentro de react-router-dom.
import { useRouteMatch, Link } from 'react-router-dom';
// Importação do ícone que aponta para esquerda
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

// Vamos criar a nossa componente Repository
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    {/* Foto do perfil */}
                    <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Rocketseat🏹"/>
                    {/* Essa div é para título do repositório e também para descrição */}
                    <div>
                        <strong>Rocketseat🏹/unform</strong>
                        <p>Descrição do repositório</p>
                    </div>
                </header>
                {/* Essa parte é para cada uma das "Stars, forks e Issues " as informações */}
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Start</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            {/* Essa parte é para apresentação das issues */}
            <Issues>
                <Link to={"DaDaDaDaDa"}>
                    <div>
                        <strong> aaaaaaaaaa </strong>
                        <p> ppppppppppp </p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
}

export default Repository;
