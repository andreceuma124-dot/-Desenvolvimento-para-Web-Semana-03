// =====================================================
// BLOCO 1 - FUNDAMENTOS E VARIÁVEIS
// =====================================================

// 1. Variável pontos
let pontos = 20;

pontos = pontos + 10;

console.log("Pontos:", pontos);


// 2. Constante MAX_PONTOS
const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

// Tentativa de alterar uma constante.
// O try/catch permite mostrar o erro sem parar o programa.
try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao alterar MAX_PONTOS:", erro.name);
    console.log("Motivo: uma constante não pode ser reatribuída.");
}


// 3. Tipos primitivos

let nome = "Andre";       // string
let idade = 20;           // number
let aprovado = true;      // boolean
let curso;                // undefined
let valor = null;         // null

console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de aprovado:", typeof aprovado);
console.log("Tipo de curso:", typeof curso);
console.log("Tipo de valor:", typeof valor);


// 4. Template Literals

let aluno = "Andre";
let nota = 8;

let fraseTemplate = `O aluno ${aluno} tirou a nota ${nota}.`;

console.log("Template Literal:", fraseTemplate);


// Mesma frase usando concatenação com +

let fraseConcatenada =
    "O aluno " + aluno + " tirou a nota " + nota + ".";

console.log("Concatenação:", fraseConcatenada);


// =====================================================
// BLOCO 2 - FUNÇÕES
// =====================================================


// 1. Função declarada e HOISTING

// A função pode ser chamada antes de ser declarada.
console.log("Maior de idade:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}


// 2. Função de expressão

// Tentativa de chamar antes da declaração.
// Isso gera ReferenceError.
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro na função de expressão:", erro.name);
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    "Função de expressão:",
    ehMaiorDeIdadeExpressao(20)
);


// 3. Função dobro - declarada

function dobroDeclarada(numero) {
    return numero * 2;
}

console.log(
    "Dobro declarada:",
    dobroDeclarada(5)
);


// Função dobro - expressão

const dobroExpressao = function (numero) {
    return numero * 2;
};

console.log(
    "Dobro expressão:",
    dobroExpressao(5)
);


// Função dobro - Arrow Function

const dobroArrow = (numero) => numero * 2;

console.log(
    "Dobro arrow:",
    dobroArrow(5)
);


// 4. Função com parâmetro padrão

function dobroPadrao(n = 1) {
    return n * 2;
}

// Chamando sem passar argumento
console.log(
    "Dobro com parâmetro padrão:",
    dobroPadrao()
);


// =====================================================
// BLOCO 3 - CONTROLE DE FLUXO
// =====================================================


// 1. Classificar nota

function classificarNota(nota) {

    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 5:", classificarNota(5));


// 2. Switch - Semáforo

let corSemaforo = "amarelo";

switch (corSemaforo) {

    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor inválida");
}


// 3. Tabuada do 5 usando FOR

console.log("----- TABUADA DO 5 -----");

for (let i = 1; i <= 10; i++) {

    console.log(`5 x ${i} = ${5 * i}`);

}


// 4. Contagem regressiva usando WHILE

console.log("----- CONTAGEM REGRESSIVA -----");

let contador = 5;

while (contador >= 1) {

    console.log(contador);

    contador--;
}


// 5. Números de 1 a 20 usando FOR

console.log("----- PAR OU ÍMPAR - FOR -----");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }

}


// 6. Números de 1 a 20 usando WHILE

console.log("----- PAR OU ÍMPAR - WHILE -----");

let numero = 1;

while (numero <= 20) {

    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }

    numero++;
}


// 7. Dia da semana usando SWITCH

function diaDaSemana(numero) {

    switch (numero) {

        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido";
    }
}


// Testando a função
console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 8:", diaDaSemana(8));