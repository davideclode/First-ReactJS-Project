import styled from 'styled-components';
// É importante utilizar o elemento semantico "``" do HTML na hora que estamos construindo a nossa interface.
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Lembrando que o link de "reac-router-dom" é um "a". Esse "a" na verdade refere-se ao link da colocado na palavra "voltar"*/
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #811; /* A cor no figm é 666 */
        }

        /* svg é o ícone que está dentro */
        svg {
            margin-left: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`

    margin-top: 80px;

    header {
        display: flex; /* Conteúdo do header um ao lado do outro */
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%; /* Para deixar a imagem totalmente arredondado */
        }
        /* div que tem o título e a descrição */
        div {
            margin-left: 24px; /* Para afastar um pouco da imagem */

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none; /* Para tirar os pontinhos */
        margin-top: 40px;

        li {
            /*(& + li) significa Todo elemento "li" que é precedido de outro elemento "li" */
            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block; /* Se não o margin top logo abaixo não vai funcionar */
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 50px;

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

        /*  A "div" contém o título e a descrição do repositório */
        div {
            margin: 0 16px;
            flex: 1;

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
