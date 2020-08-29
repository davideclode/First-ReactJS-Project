import axios from 'axios';

const api = axios.create({
    /* Colocamos aqui o pedaço de endereço que vai ser repetido em todas as requisiçoes. Para achar esse e outros endereços podemos digitar "api.github.com". Poderiamos colocar o "/" depois de ".com" */
    baseURL: 'https://api.github.com',
});

export default api;
