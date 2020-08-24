import React from 'react';

// Vamos criar a nossa componente "Dashboard"
// Poderiamos ter feito "const Dashboar() {} " mas vamos utilizar o formato logo abaixo porque facilita o uso da tipagem já que estamos lidando também com typescript.
/* Para os componentes do React, vamos utilizar sempo "React.FC" que é a abreviação de React.FunctionComponent ou seja componente escrito no formato de função*/
const Dashboard: React.FC = () => {
    // Aqui dentro vamos retornar o nosso JSX
    return <h1>Dashboard</h1>;
}

export default Dashboard;
