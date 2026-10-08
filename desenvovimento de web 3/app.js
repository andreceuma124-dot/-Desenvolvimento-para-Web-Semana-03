// ==========================================
// BLOCO 1 - FUNDAMENTOS E VARIÁVEIS
// ==========================================

console.log("--- BLOCO 1 ---");

// 1. Declaração de let pontos com valor inicial, adição de 10 e exibição
let pontos = 50;
pontos += 10;
console.log("Pontos:", pontos); // 60

// 2. Declaração de MAX_PONTOS e demonstração do TypeError ao reatribuir
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // Gera erro
} catch (erro) {
  console.log("Erro ao reatribuir const:", erro.message);
  // Explicação: Variáveis declaradas com 'const' são de atribuição única.
  // Elas criam uma referência constante que não pode ser reatribuída.
}

// 3. Tipos primitivos e operador typeof
let texto = "Olá, JavaScript!"; // string
let numero = 42;                 // number
let booleano = true;             // boolean
let indefinido;                  // undefined
let nulo = null;                 // null

console.log("Tipo de texto:", typeof texto);           // string
console.log("Tipo de numero:", typeof numero);         // number
console.log("Tipo de booleano:", typeof booleano);     // boolean
console.log("Tipo de indefinido:", typeof indefinido); // undefined
console.log("Tipo de nulo:", typeof nulo);             // object (comportamento histórico do JS)

// 4. Template Literals vs Concatenação
let nome = "Maria";
let idade = 25;

// Com Template Literals
let fraseTemplate = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;

// Com Concatenação
let fraseConcatenacao = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";

console.log("Template Literal:", fraseTemplate);
console.log("Concatenação:", fraseConcatenacao);


// ==========================================
// BLOCO 2 - FUNÇÕES
// ==========================================

console.log("\n--- BLOCO 2 ---");

// 1. Função declarada (com Hoisting)
// Chamando antes da declaração para demonstrar que o Hoisting funciona
console.log("ehMaiorDeIdade (18):", ehMaiorDeIdade(18)); // true

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2. Função de expressão (com ReferenceError)
try {
  // Tentando chamar antes de declarar
  console.log(ehMaiorDeIdadeExpressao(18));
} catch (erro) {
  console.log("Erro ao chamar expressão antes de declarar:", erro.message);
  // Explicação: Expressões de função atribuídas a 'const' ou 'let' ficam na Temporal Dead Zone (TDZ)
  // e não podem ser acessadas antes da sua inicialização no código.
}

const ehMaiorDeIdadeExpressao = function(idade) {
  return idade >= 18;
};

// 3. Função dobro nas três formas
// Forma 1: Declarada
function dobroDeclarada(n) {
  return n * 2;
}

// Forma 2: Expressão
const dobroExpressao = function(n) {
  return n * 2;
};

// Forma 3: Arrow function (forma curta)
const dobroArrow = n => n * 2;

console.log("Dobro (declarada):", dobroDeclarada(5)); // 10
console.log("Dobro (expressão):", dobroExpressao(5)); // 10
console.log("Dobro (arrow):", dobroArrow(5));         // 10

// 4. Variação com parâmetro padrão (ex: n = 1)
const dobroComPadrao = (n = 1) => n * 2;

console.log("Dobro com argumento (7):", dobroComPadrao(7));     // 14
console.log("Dobro sem argumento (padrão):", dobroComPadrao()); // 2 (usa n = 1)


// ==========================================
// BLOCO 3 - CONTROLE DE FLUXO
// ==========================================

console.log("\n--- BLOCO 3 ---");

// 1. Classificação de nota com if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("Nota 7.5:", classificarNota(7.5)); // Aprovado
console.log("Nota 4.0:", classificarNota(4.0)); // Reprovado

// 2. Estrutura switch para semáforo
let corSemaforo = "Amarelo";

switch (corSemaforo.toLowerCase()) {
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

// 3. Tabuada do 5 utilizando laço for
console.log("Tabuada do 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva de 5 até 1 usando while
console.log("Contagem regressiva:");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

// 5. Números de 1 a 20 ("par" ou "ímpar") com for e while
console.log("Par ou Ímpar (com for):");
for (let i = 1; i <= 20; i++) {
  let tipo = (i % 2 === 0) ? "par" : "ímpar";
  console.log(`${i} é ${tipo}`);
}

console.log("Par ou Ímpar (com while):");
let j = 1;
while (j <= 20) {
  let tipo = (j % 2 === 0) ? "par" : "ímpar";
  console.log(`${j} é ${tipo}`);
  j++;
}

// 6. Função diaDaSemana com switch e default
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
      return "Número inválido. Digite um número de 1 a 7.";
  }
}

console.log("Dia 1:", diaDaSemana(1));   // Domingo
console.log("Dia 5:", diaDaSemana(5));   // Quinta-feira
console.log("Dia 9:", diaDaSemana(9));   // Número inválido
