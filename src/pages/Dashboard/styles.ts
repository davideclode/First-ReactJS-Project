import styled from 'styled-components';
import { shade } from 'polished';

/* Agora, vamos criar um componente estilizado. Mas ante, precisamos instalar o "yarn add @types/styled-components -D" para que "styled-components" possa ser reconhecido */
// `` significa "Template literals". É uma string em que colocamos aspas e podemos colocar VARIÁVEIS dentro dela.
// Se quisermo que o "h1" fique colorido é só desinstalar a extensão "vscode-styled-components" do vscode
export const Tytle = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;


    margin-top: 30px;
`;

// Fazendo a parte de form. Estamos utilizando o conceito de "Style component" no CSS
export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;


    display: flex; /* Para ficar um do lodo do outro */

    /* Fezendo o input ocupar o máximo de espaço possível. Como o "form" tem uma largura de 700 o flex: 1; vai fazer com que o input ocupe todo 700px, mas menos a parte de "Pesquisar" */
    input {
        flex: 1;
        height: 60px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;

        background: #FFFFFF;
        color: #3a3a3a;

        &::placeholder {
            color: #A8A8B3;
        }
    }

    button {
        width: 210px;
        height: 60px;

        color: #ffffff;
        background-color: #04D361;
        border-radius: 0px 5px 5px 0px;

        border-radius: 5px;
        border: 0;
        font-weight: bold;
        transition: background-color 0.2s;

        /* flex-direction: row; */

        /* "&:hover" significa que quando tiver um hover no button então faça: */
        /* Aqui, instalamos o polished fazendo "yarn add polished" e fazemos a sua importação */
        /* Sempre que quisermos colocar uma função javascrip dentro de CSS utilizamos "$" e chaves */
        /* "0.2" é a porcentagem; "04D361" é a cor que eu quero escurecer */
        &:hover {
            background: ${shade(0.2, '#04D361')};
        }
    }
    /* Poderia criar aqui um button:hover {...} mas resolvi criá-lo dentro do próprio button */

`;

export const Repositories = styled.div`
    margin-top: 50px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px; /* Por padrão vem com "display: inline" */
        display: block;
        text-decoration: none;

        display: flex; /* Para ficar um ao lado do outro */
        align-items: center; /* Alinhar ao centro */
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px); /* Distancia no eixo x por uns 10px */
        }

        & + a {
            margin-top: 14px;
        }

        img {
            width: 54px;
            height: 54px;
            border-radius: 50%;
        }

        /*  A "div" contém o título e a descrição do repositório */
        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        /* Estilizando a nossa seta ">". Como é uma imagem svg podemos fazer: */
        svg {
            margin-left: auto;
            color: #C9C9D4;
        }
    }
`;

// Quando fazemos lista com vários itens e esses itens são do mesmo tipo(Ex.: se são todos "a" ou "li", etc) e se quisermos fazer com que a estilização comece do segundo ítem para frente fazemos dentro de "a" ou fora dele:
// a' + a {...} lê-se: toda vez que tivermos elemento do tipo "a" e ele é precedido de um elemento do tipo "a'". Pode ser colocado dentro ou fora do "a" funciona também. Escrevemos "& + a {  }" porque temos o elemento "&" dentro de "a".
