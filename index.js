//const é uma variável

const perguntas = [
    // isso é uma propriedade, dentro dela o objeto pode ter qualquer
    // tipo de valor
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Exibe um alerta na tela.",
        "Registra mensagens no console.",
        "Inicia uma função assíncrona.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos realizam comparação estrita de valor e tipo.",
        "'===' realiza comparação estrita de valor e tipo, enquanto '==' realiza comparação solta.",
        "'==' realiza comparação estrita de valor e tipo, enquanto '===' realiza comparação solta.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar um único valor.",
        "Uma estrutura de controle de fluxo.",
        "Uma coleção ordenada de valores.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Concatenação de strings.",
        "Operador lógico AND.",
        "Operador lógico OR.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um servidor para armazenamento de dados.",
        "Uma linguagem de programação.",
        "Um modelo de objeto para representar documentos HTML e XML.",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Remove elementos de um array.",
        "Arredonda um número para um número específico de casas decimais.",
        "Converte uma string em um número inteiro.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do comando 'break' em loops?",
      respostas: [
        "Finaliza a execução do programa.",
        "Pula para a próxima iteração do loop.",
        "Cria uma condição de parada no loop.",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de criptografia.",
        "O comportamento de mover declarações para o topo do escopo.",
        "Uma função para criar animações suaves.",
      ],
      correta: 1
    }
  ];
  
  // document é um objeto, que tem funções para mudar o conteúdo ou buscar coisas
  
  const quiz = document.querySelector ('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    // loop ou laço de repetição
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
      // Abaixo o item Resposta A é utilizado para copiar e adicionar outros. esse for é uma só questão com respostas com quiz.
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
   
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true
        
        corretas.delete(item) 
        if(estaCorreta) {
          corretas.add(item)
          }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
   
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  // Aqui removo o item Resposta A
  quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  