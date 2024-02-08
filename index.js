const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 5;",
            "variável myVar = 5;",
            "int myVar = 5;"
        ],
        correta: 0
    },
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Um tipo de café",
            "Uma linguagem de programação",
            "Um tipo de carro"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'getElementById'?",
        respostas: [
            "Obter um elemento pelo nome da classe",
            "Obter um elemento pelo ID",
            "Obter um elemento pelo nome da tag"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código 'console.log(typeof [])'?",
        respostas: [
            "'object'",
            "'array'",
            "'undefined'"
        ],
        correta: 0
    },
    {
        pergunta: "O que significa 'DOM' em JavaScript?",
        respostas: [
            "Data Object Model",
            "Document Object Model",
            "Desktop Object Model"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->"
        ],
        correta: 0
    },
    {
        pergunta: "O que significa 'NaN' em JavaScript?",
        respostas: [
            "'Not a Number'",
            "'Not a Name'",
            "'Not a Null'"
        ],
        correta: 0
    },
    {
        pergunta: "O que faz o operador '===' em JavaScript?",
        respostas: [
            "Comparação de valor e tipo",
            "Atribuição de valor",
            "Comparação de valor apenas"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de fazer um loop em um array em JavaScript?",
        respostas: [
            "for (i <= array.length)",
            "for (i = 0; i < array.length; i++)",
            "loop(array)"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
        respostas: [
            "Analisa uma string e retorna um número inteiro",
            "Analisa uma string e retorna um número decimal",
            "Analisa uma string e retorna um número de ponto flutuante"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas



// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) 
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
      const estaCorreta =  event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
          corretas.add(item)
    }
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }

  quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}