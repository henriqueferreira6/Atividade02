// Importa as bibliotecas necessárias
const inquirer = require('inquirer'); // Para fazer perguntas ao usuário
const chalk = require('chalk'); // Para colorir o texto no console

// Faz perguntas ao usuário
inquirer
    .prompt([
        { 
            type: 'input', // Tipo de entrada
            name: 'nome', // Nome da resposta
            message: 'Qual é o seu nome completo?' // Pergunta que será feita
        },
        { 
            type: 'input', // Tipo de entrada
            name: 'idade', // Nome da resposta
            message: 'Quantos anos você tem?' // Pergunta que será feita
        },
        { 
            type: 'input', // Tipo de entrada
            name: 'email', // Nome da resposta
            message: 'Por favor, insira seu endereço de e-mail:' // Pergunta que será feita
        }
    ])
    .then((answers) => { // O que fazer quando o usuário responde
        // Formatação da resposta
        const response = `
        ==========================
        Informações do Usuário
        ==========================
        Nome: ${answers.nome} // Mostra o nome que o usuário digitou
        Idade: ${answers.idade} anos // Mostra a idade que o usuário digitou
        E-mail: ${answers.email} // Mostra o e-mail que o usuário digitou
        ==========================
        `;
        
        // Mostra a resposta formatada no console com cor
        console.log(chalk.bgCyan.white(response));
    })
    .catch((erro) => { // O que fazer se ocorrer um erro
        console.error(chalk.bgRed.white('Ocorreu um erro:'), erro); // Mostra o erro em vermelho
    });