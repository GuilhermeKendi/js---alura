const texto1 = "Ola Mundo!";
const texto2 = "Ola Mundo!";
const senha = "senha123";

const stringDeNumeros = "1234";

const citacao = 'O kendi disse "oi"!'; // o JS consegue ler aspas duplas dentro de aspas simples e vice versa
console.log(citacao);

const meuNome = "meu nome e: "
const guilherme = "Kendi";
console.log(meuNome + guilherme); //junta strings


//UNICODE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

//

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres

