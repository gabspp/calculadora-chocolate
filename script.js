const quantidadePaes = document.getElementById("quantidade-paes");
const quantidadeFormas = document.getElementById("quantidade-formas");
const button = document.getElementById("button");
let quantidadeArredondada;
let totalChocolate;
let totalaoLeite;
let totalAmargo;
let totalManteigaCacau;

const aoLeite = 5;
const amargo = 15;
const manteigaCacau = ((aoLeite + amargo) / 100) * 1.5;

quantidadePaes.addEventListener("change", function () { // aqui o evento 'change' é ativado somente quando o caixa de texto perde o foco e o valor foi mudado, diferente do evento onde ele é disparado automaticamente sempre que o evento muda. no nosso caso nao teria muita diferença por que o calculo final só é mostrado depois que o botão de enviar é clicado. 
  quantidadeFormas.value = this.value / 49;
});

quantidadeFormas.addEventListener("change", function () {
  quantidadePaes.value = this.value * 49;
});

function arredondaQuantidade(quantidadePaes) {
  return Math.ceil(quantidadePaes / 10) * 10;
}

function atualizaQuantidade() {
  quantidadeArredondada = arredondaQuantidade(quantidadePaes.value);
  return quantidadeArredondada;
}

button.addEventListener("click", () => {
  let produto = document.getElementById("produto").value;

  atualizaQuantidade();

  if (produto == "pdm") {
    totalChocolate = quantidadeArredondada * (aoLeite + amargo);
    totalaoLeite = quantidadeArredondada * aoLeite;
    totalAmargo = quantidadeArredondada * amargo;
    totalManteigaCacau = quantidadeArredondada * manteigaCacau;

    document.querySelector(
      ".ao-leite"
    ).innerHTML = `Chocolate ao Leite: ${totalaoLeite} g`;
  }

  if (produto == "barrinha") {
    totalChocolate = quantidadeArredondada * (aoLeite + amargo);
    totalaoLeite = quantidadeArredondada * 10;
    totalAmargo = quantidadeArredondada * 10;
    totalManteigaCacau = quantidadeArredondada * manteigaCacau * 2;
    document.querySelector(
      ".selecao-63"
    ).innerHTML = `Chocolate Seleção 63%: ${totalaoLeite} g`;
  }

  document.querySelector(
    ".meio-amargo"
  ).innerHTML = `Chcocolate Meio Amargo: ${totalAmargo} g`;
  document.querySelector(
    ".manteiga-cacau"
  ).innerHTML = `Manteiga de Cacau: ${totalManteigaCacau} g`;
  document.querySelector(
    ".total-chocolate"
  ).innerHTML = `Total de chocolate: ${totalChocolate} g`;
});
