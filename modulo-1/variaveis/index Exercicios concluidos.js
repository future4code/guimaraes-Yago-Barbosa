//EXERCÍCIOS DE INTRPRETAÇÃO DE CÓDIGO

//1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// R: Vai ser impresso o número 5. 

// 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// R: Vai ser imoressos os números 10,10 e 10.

// 3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let horarioDiario = prompt "Quantas horas você trabalha por dia?" 

let valorDiario = prompt "Quanto você recebe por dia?"

let alertaImportante = prompt "Voce recebe ${t/p} por hora?"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
const nome = ""

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
const idade = ""

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof nome, typeof idade)

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// Foi impresso porque concatenou no momento que foi utilizado as aspas. 

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
const nome = prompt ("Qual é o seu nome?")

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
const idade = Number (prompt ("Qual o é a sua idade"))

console.log(typeof nome, typeof idade)
// Notei que não foi concatenado porque foi utilizado o código Number. 

// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
const nome = prompt ("Você está usando uma camisa azul?")

const nome5 = "Você está usando uma calça jeans?"

const nome2 = prompt ("Você está usando uma calça jeans?")

const nome6 = "Você está usando um relógio?"

const nome3 = prompt ("Você está usando um relógio?")

console.log(nome4, nome, nome5, nome2, nome6, nome3)

// 3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10 
let b = 25

// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
[a, b] = [b, a];

// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 
comsole.log(a, b)

