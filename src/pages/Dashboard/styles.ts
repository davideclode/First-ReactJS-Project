import styled from 'styled-components';

/* Agora, vamos criar um componente estilizado. Mas ante, precisamos instalar o "yarn add @types/styled-components -D" para que "styled-components" possa ser reconhecido */
// `` significa "Template literals". É uma string em que colocamos aspas e podemos colocar VARIÁVEIS dentro dela.
// Se quisermo que o "h1" fique colorido é só desinstalar a extensão "vscode-styled-components" do vscode
export const Tytle = styled.h1`
    font-size: 48px;

    color: #3A3A3A;
`;
