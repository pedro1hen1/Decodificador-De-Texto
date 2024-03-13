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
