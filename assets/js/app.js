//função criptografar texto

function funcCriptografar() {
  // Obtém o texto de entrada do elemento de entrada-texto
  const entrada = document.getElementById("entrada-texto").value;

  // Copia o texto de entrada para uma variável de saída
  let saida = entrada;

  // Substitui cada vogal no texto de saída pela sequência correspondente
  saida = saida.replace(/a/g, "ai");
  saida = saida.replace(/e/g, "enter");
  saida = saida.replace(/i/g, "imes");
  saida = saida.replace(/o/g, "ober");
  saida = saida.replace(/u/g, "ufat");

  // Obtém o elemento textarea onde queremos exibir o texto criptografado
  const resultadoTextarea = document.getElementById("texto-criptografado");

  // Define o valor do textarea como o texto criptografado
  resultadoTextarea.value = saida;

  // Obtém o elemento da seção direita
  const boxDireito = document.getElementById("conteudo-direita");

  // Substitui o conteúdo da seção direita pelo textarea com o texto criptografado
  boxDireito.innerHTML = `<textarea id="texto-criptografado" class="texto-criptografado">${saida}</textarea>`;

  // Exibe a seção direita definindo seu display como "block"
  boxDireito.style.display = "block";
}

function funcDescriptografar() {
  // Obtém o texto criptografado do elemento de texto-criptografado
  const entrada = document.getElementById("texto-criptografado").value;

  // Copia o texto criptografado para uma variável de saída
  let saida = entrada;

  // Substitui cada sequência de criptografia no texto de saída pela vogal correspondente
  // Note que a ordem das substituições é o inverso da função de criptografia
  saida = saida.replace(/ufat/g, "u");
  saida = saida.replace(/ober/g, "o");
  saida = saida.replace(/imes/g, "i");
  saida = saida.replace(/enter/g, "e");
  saida = saida.replace(/ai/g, "a");

  // Atualiza o elemento textarea com o texto descriptografado
  const resultadoTextarea = document.getElementById("texto-criptografado");
  resultadoTextarea.value = saida;
}
