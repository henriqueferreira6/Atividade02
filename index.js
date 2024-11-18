const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt([
        { 
            name: 'nome', 
            message: 'Qual é o seu nome completo?' 
        },
        { 
            name: 'idade', 
            message: 'Quantos anos você tem?' 
        },
        { 
            name: 'email', 
            message: 'Por favor, insira seu endereço de e-mail:' 
        }
    ])
    .then((answers) => {
        // Formatação da resposta
        const response = `
        ==========================
        Informações do Usuário
        ==========================
        Nome: ${answers.nome}
        Idade: ${answers.idade} anos
        E-mail: ${answers.email}
        ==========================
        `;
        console.log(chalk.bgCyan.white(response));
    })
    .catch((erro) => {
        console.error(chalk.bgRed.white('Ocorreu um erro:'), erro);
    });