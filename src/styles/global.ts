import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
    /* Aqui, podemos colocar toda a estilização global */
    /* Ex.: quero que todos os elementos tenham: */
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    /* Corpo da página */
    body {
        background: #F0F0F5 url(${githubBackground}) no-repeat 70% top; /* 70% para direira; top: alinhado no topo */
        -webkit-font-smoothing: antialiased; /* Funciona só para chrome */
    }

    body, input, button {
        font: 16px Roboto, sans-serif; /* Se o "Roboto" não poder ser carregada então será usada alguma fonte que não tenha serif*/
    }

    /* Defindo a largura máxima do layout da aplicação. No "index.htlm" temos a id "root" que é onde fica a nossa aplicação. Portanto, para definir centralizar os elementos precisamos definir como tamanho máximo dos elementos o tamanho do maior elemento no layout. E vamos usar o "root" aqui para isso*/
    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    /* Por padrão, o CSS/HTML não vem com o cursor "pointer". Tipo, quando passarmos o mouse por cima de um button ele não mostra o cursor para clicar. Para isso vamos fazer: */
    button {
        cursor: pointer;
    }
`;

/* Foi possível fazer "${githubBackground}" porque estamos dentro de aspas ``, ou seja, dentro de um template literals */

