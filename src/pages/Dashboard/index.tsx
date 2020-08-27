import React from 'react';
// Importamos "FiChevronRight" depois de instalar "yarn add react-icons"
import { FiChevronRight } from 'react-icons/fi'

import logoImage from '../../assets/logo.svg';
import Repository from '../Repository';

import { Tytle, Form, Repositories } from './styles';

/* ESTA É A ROTA PRINCIPAL DA APLICAÇÃO*/

// Vamos criar a nossa componente "Dashboard"
// Poderiamos ter feito "const Dashboar() {} " mas vamos utilizar o formato logo abaixo porque facilita o uso da tipagem já que estamos lidando também com typescript.
/* Para os componentes do React, vamos utilizar sempo "React.FC" que é a abreviação de React.FunctionComponent ou seja componente escrito no formato de função*/
const Dashboard: React.FC = () => {
    // Aqui dentro vamos retornar o nosso JSX
    return (
        <>
            <img src={logoImage} alt="Github Explorer" />
            <Tytle>Explore repositórios no Github.</Tytle>

            {/* Fazendo o input e o button */}
            <Form action="">
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* Criando outro componente estilizado */}
            <Repositories>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/50506878?s=460&u=19fa4c47119a361e0f431cdceab2d1adffb2c2b5&v=4" alt="Davide da Silva"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
                    </div>

                    {/* instalamos "yarn add react-icons" e importamos "FiChevronRight" acima e:  */}
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/50506878?s=460&u=19fa4c47119a361e0f431cdceab2d1adffb2c2b5&v=4" alt="Davide da Silva"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
                    </div>

                    {/* instalamos "yarn add react-icons" e importamos "FiChevronRight" acima e:  */}
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/50506878?s=460&u=19fa4c47119a361e0f431cdceab2d1adffb2c2b5&v=4" alt="Davide da Silva"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
                    </div>

                    {/* instalamos "yarn add react-icons" e importamos "FiChevronRight" acima e:  */}
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
