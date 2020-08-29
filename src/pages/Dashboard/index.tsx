import React, { useState, FormEvent } from 'react';
// Importamos "FiChevronRight" depois de instalar "yarn add react-icons"
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import Repository from '../Repository';

import { Tytle, Form, Repositories } from './styles';

// Importantíssimo: Sempre que criarmos um estado"useState" que não é um valor padrão(ex.: array, string, booleano, número) é muito importante definir o tipo desse useState. para que depois quando a gente for utilizar a variável repositories a gente saiba o que é que tem lá dentro. Para isso criamos a interface Repository.
interface Repository {
    // Aqui, colocamos a tipagem somente de informações que vamos utilizar na nossa interface
    // No caso do nosso repositório(https://api.github.com/repos/Rocketseat/unform) vamos precisar de:
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

/* ESTA É A ROTA PRINCIPAL DA APLICAÇÃO*/

// Vamos criar a nossa componente "Dashboard"
// Poderiamos ter feito "const Dashboar() {} " mas vamos utilizar o formato logo abaixo porque facilita o uso da tipagem já que estamos lidando também com typescript.
/* Para os componentes do React, vamos utilizar sempo "React.FC" que é a abreviação de React.FunctionComponent ou seja componente escrito no formato de função*/
const Dashboard: React.FC = () => {
    // Criamos estado só para armazenar o valor de input(newRepo) e a função "setNewRepo" para alterar o valor de estado.
    const [ newRepo, setNewRepo ] = useState('');

    // Estado que vai armazenar o meu repositorio. Icializamos o estado com valor vazio"useState([])"
    // "repositories" é o valor do estado em si; "setRepositories" é a variável que useremos toda vez que a gente quer mudar o valor do estado
    const [repositories, setRepositories] = useState<Repository[]>([]);

    // Criação da função para lidar com a adição de novos repositorios aqui dentro
    // Quando submetimos um Form, o HTML ternta nos redirecionar para uma outra página. O que podemos fazer aqui é colocar "event" como retorno de  "handleAddRepository".
    // "HTMLFormElement" representa elemento HTML do Form
    // "FormEvent" representa o evento do submit do formulario
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        // console.log(newRepo);
        // O que vamos fazer aqui? . Vamos ter que ir até api do github; buscar os dados daquele repositório; e depois salvar novo repositório no estado. Resumindo:
        // Adição de um novo repositorio
        // Consumir API do Github - buscar os dados daquele repositório
        // Salvar novo repositorio no estado

        // Chamando a nossa "api". Dentro do get() vai a rota(repos/) e o texto que está digitado dentro do input(newRepo)
        const response = await api.get<Repository>(`repos/${newRepo}`);
        // Pegando o repositório
        const repository = response.data;
        // Agora podemos utilizar esse API para preencher o nosso array de repositório
        // Respeitando o conceito de imutabilidade, como queremos só adicionar o repositório(repository) que acabamos de pegar/buscar no final da nossa lista, precisamos copiar a lista toda(...repositories) para não perder os dados que já temos lá dendro e colocar o repositorio(repository) no final.
        setRepositories([...repositories, repository]);
        // Para limpar o input fazemos, pegamos o "setNewRepo" e inicializamos o seu valor.
        setNewRepo('');

    }

    // Aqui dentro vamos retornar o nosso JSX
    return (
        <>
            <img src={logoImage} alt="Github Explorer" />
            <Tytle>Explore repositórios no Github.</Tytle>

            {/* Fazendo o input e o button */}
            {/* Toda vez que acontecer um submit nesse formulário, a função "handleAddRepository" será chamada*/}
            <Form onSubmit={handleAddRepository} >
                <input
                    value={newRepo} /* Porque é o texto que esse input vai ter */
                    // Quando o usuário altera o valor desse input eu vou receber um evento(e)
                    // Dentro desse evento(e) eu tenho o valor de input disponível através de "e.target.value"
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* Criando outro componente estilizado */}
            <Repositories>
                {/* Agora que já já adionamos o nosso reposítório na lista, precisamos mostrá-la na tela. Para isso, vou percorrer todo o meu repositories, e para cada um desses repositóries eu vor retornar os elementos "a". Lembrando que o 1º elemento deve ter a "key"*/}
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login} /* Aqui vamos usar o login do owner */
                        />
                        <div>
                            <strong> {repository.full_name} </strong>
                            <p> {repository.description} </p>
                        </div>

                        {/* instalamos "yarn add react-icons" e importamos "FiChevronRight" acima e:  */}
                        <FiChevronRight size={20} />
                    </a>
                ))}

            </Repositories>
        </>
    );
};

export default Dashboard;
