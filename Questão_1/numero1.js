function saudar() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem");

  if (nome.trim() === "") {
    mensagem.innerHTML = "Por favor, insira seu nome.";
  } else {
    mensagem.innerHTML =
      "Olá, " + nome + "! Seja bem-vindo à página do aluno(a)!";
    mensagem.style.color = "green";
  }
}
