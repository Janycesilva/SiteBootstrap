// Estrutura de Repetição FOR em JS | Usamos o laço "for" quando sabemos exatamente quantas vezes queremos repetir um bloco de instruções 

/* Sintaxe Geral
 for (valor incial; condição ; incremento ou decremento){
     códigos executados enquanto a condição for verdadeira
 } 
*/

console.log("--- Estrutura de Repetição FOR ---");

for(let i = 1; i <= 5; i++){
    console.log("A variável i nessa volta é: " + i);
}

console.log("Podemos usar o FOR para buscar valores em VETORES/ARRAYS"); 

const empresas = ["CocaCola", "Versace", "Adidas", "Pepsi"];

for(let i = 0; i < empresas.length; i++){
    console.log(empresas[i]);
}

console.log("--- Estrutura de Repetição While ---"); 

/*
Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. 
A execução das instruções vai continuar até que uma condição seja verdadeira. 
A condição a ser analisada para a execução do laço de repetição deverá retornar um valor booleano/lógico.
*/

var k = 0;

while(k <= 5){
    console.log(`${k} - Valor atual`);
    k++;
}

console.log("Pegando valores de Vetores usando While");

let celu = ["LG", "Samsung", "Motorola", "Iphone", "Xiaomi"];
let c = 0;

while(c < celu.length){
    console.log(c + " - " +celu[c]);
    c++;
}

// Se a condição do While for sempre verdadeira, a execução do programa fica presa no While
// Veja o Exemplo Abaixo mas não execute, pode causar travamentos no seu ambiente de execução 
/* 
let contador = true;   // a variável contador vai ser verdadeira sempre
while(contador == true){  // essa condição vai ser sempre verdadeira, poderia ser reescrita assim: while(contador) que daria no mesmo
   console.log("Comandos executados enquato o programa estiver em execução"); 
}
*/

console.log("--- Estrutura de Repetição DO WHILE ---"); 

// O do/while tem quase o mesmo funcionamento que o while, a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez.

do{
    console.log("Executa pelo menos uma vez");
}while(false);

console.log("--- Estrutura de Repetição FOR IN ---"); 

// O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção/criação do elemento

let ling = {1: "c", 2: "PHP", 3: "Python", 4: "C++", 5: "C#"};

for(var i in ling){
    console.log("Linguagem " + i + " - " + ling[i]);
}

// Outro Exemplo com Objetos comuns do JS

console.log("--- Percorrer Objetos ---"); 
const pessoa = { 
		nome:"Mariana",
		idade:18,
		peso:60,
		altura:1.6
} 
  
//console.log(pessoa.idade); // acesso manualmente
for(let atributo in pessoa){ // 
    	console.log(pessoa[atributo]);
}

console.log("--- For In para Interar Vetores ---"); 

let marcas2 = ["Dell","Samsung","Microsoft","Multilaser","Acer"];
    
for(let element in marcas2) {
          console.log("Index: "+element+" - "+marcas2[element]);
}

console.log("--- Estrutura de repetição For of");

/* 
  O loop FOR...OF percorre objetos iterativos (incluindo Array, Map, Set, etc) 
  Exemplos abaixo
*/

let cursos = ["Sistemas de Informação","Ciências da Computação","Análise de Sistemas","Engenharia de Software"];

for(let k of cursos){
    console.log("Cursos - " + k);
}

// Ao invés de let para a variável do FOR OF, você pode usar const se não for modificar a variável dentro do bloco. Veja um exemplo abaixo
let valoresFixos = [10, 20, 30];

for (const value of valoresFixos) {
  console.log(value); // valores da variável value não podem ser modificados  
}
// Output: 10 20 30

console.log("--- Usando FOR OF para Arrays de Objetos ---"); 

const infoPessoa = [  // Sintaxe de como criar um Array de Objetos em JS 
		   {nome: "José", idade: 18, altura:1.8},
		   {nome: "Nildo", idade: 41, altura:1.6},
		   {nome: "Enzo", idade: 17, altura:1.5},
		   {nome: "Derlange", idade: 39, altura:1.9},
		   {nome: "Jeane", idade: 34, altura:1.4},
        ];

for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);
}

console.log("--- Estrutura de Repetição ForEach ---");

// O método forEach() permite executar uma função para cada elemento presente em um array.

// Considere o código abaixo

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Vetor

function tabuadaDe2(item) {  // esta função será executada para cada elemento do array 
    console.log(item*2);
}

num.forEach(tabuadaDe2); // Pega o vetor, adiciona o ForEach e chama a função para ser executada.

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item; // adiciona o valor de cada item do array 
    console.log("Posição:" + indice + " - Soma = " + total); 
}

valores.forEach(somar);

console.log("ForEach para percorrer Arrays");
// Podemos usar forEach para percorrer Arrays, veja exemplo abaixo

let modelPhones = ["A31","Motorola","A51","A72","Samsung"]; 
// O exemplo abaixo incorpora a função como parâmetro do forEach, é uma forma de fazer, no caso a função perde o nome, chamamos de função anônima. 
modelPhones.forEach(function(item,indice){ // Veja que o parâmetro do forEach é a própria função que vai ser executada para cada item do vetor
   console.log("Indice " + indice + " = ao item " + item); // para cada item do vetor, imprime o índice e valor dessa posição 
});