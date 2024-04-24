// Função para criptografar o texto inserido
function funcCriptografar() {
  // Obtém o texto de entrada do elemento de entrada-texto
  const entrada = document.getElementById("entrada-texto").value;

  // Criptografa o texto substituindo vogais por sequências específicas
  let saida = entrada
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  // Exibe o resultado criptografado
  exibirResultado(saida);
}

// Função para descriptografar o texto criptografado
function funcDescriptografar() {
  // Obtém o texto criptografado do elemento de entrada-texto
  const entrada = document.getElementById("entrada-texto").value;

  // Descriptografa o texto substituindo sequências por vogais
  let saida = entrada
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o")
    .replaceAll("imes", "i")
    .replaceAll("enter", "e")
    .replaceAll("ai", "a");

  // Exibe o resultado descriptografado
  exibirResultado(saida);
}

// Função para exibir o resultado na seção direita da página
function exibirResultado(texto) {
  // Remove o conteúdo existente da seção direita
  const boxDireito = document.getElementById("conteudo-direita");
  boxDireito.innerHTML = "";

  // Cria um novo elemento textarea
  const novoTextarea = document.createElement("textarea");
  novoTextarea.id = "texto-criptografado";
  novoTextarea.className = "texto-criptografado";
  novoTextarea.textContent = texto;

  // Adiciona o novo textarea à seção direita
  boxDireito.appendChild(novoTextarea);

  // Cria um novo botão de cópia
  const botaoCopiar = document.createElement("button");
  botaoCopiar.id = "botao-copiar";
  botaoCopiar.className = "btn-copiar";
  botaoCopiar.textContent = "Copiar";

  // Adiciona um evento de clique ao botão de cópia
  botaoCopiar.addEventListener("click", function () {
    copiarTexto();
  });

  // Adiciona o botão de cópia à seção direita
  boxDireito.appendChild(botaoCopiar);

  // Torna a seção direita visível
  boxDireito.style.display = "block";
}

// Função para copiar o texto criptografado
function copiarTexto() {
  // Obtém o texto criptografado do elemento de texto-criptografado
  const copiarTexto = document.getElementById("texto-criptografado").value;

  // Grava o texto criptografado na área de transferência
  navigator.clipboard
    .writeText(copiarTexto)
    .then(() => {
      alert("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto:", err);
    });
}
