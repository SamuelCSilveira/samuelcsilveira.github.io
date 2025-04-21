const doacoes = {
  30: {
    imagem: "img/qrcode/pix30.jpeg",
    chave: "00020126580014br.gov.bcb.pix0114209978950001980218Doacao de R$ 30,00520400005303986540530.005802BR5925ORGANIZACAO NOVA  ACROPOL6007MOSSORO62120508Doacao3063041F24"
  },
  50: {
    imagem: "img/qrcode/pix50.jpeg",
    chave: "00020126580014br.gov.bcb.pix0114209978950001980218Doacao de R$ 50,00520400005303986540550.005802BR5925ORGANIZACAO NOVA  ACROPOL6007MOSSORO62120508Doacao506304F368"
  },
  100: {
    imagem: "img/qrcode/pix100.jpeg",
    chave: "00020126590014br.gov.bcb.pix0114209978950001980219Doacao de R$ 100,005204000053039865406100.005802BR5925ORGANIZACAO NOVA  ACROPOL6007MOSSORO62130509Doacao100630484AF"
  },
  200: {
    imagem: "img/qrcode/pix200.jpeg",
    chave: "00020126590014br.gov.bcb.pix0114209978950001980219Doacao de R$ 200,005204000053039865406200.005802BR5925ORGANIZACAO NOVA  ACROPOL6007MOSSORO62130509Doacao200630428F5"
  },
  0: {
    imagem: "img/qrcode/pix-aberto.jpeg",
    chave: "00020126690014br.gov.bcb.pix0114209978950001980229Escolha o valor da sua doacao5204000053039865802BR5925ORGANIZACAO NOVA  ACROPOL6007MOSSORO62170513Escolhaovalor63049C20"
  },
}

function abrirModal(valor) {
  document.getElementById("pixModal").style.display = "block";
  if (valor == 0) {
    document.getElementById("valorDoacao").textContent = `de um valor personalizado`;
    document.getElementById("qrcodePix").src = doacoes[valor].imagem;
    document.getElementById("chavePix").textContent = doacoes[valor].chave;
    return;
  }
  document.getElementById("valorDoacao").textContent = `de R$ ${valor.toFixed(2)}`;
  document.getElementById("qrcodePix").src = doacoes[valor].imagem;
  document.getElementById("chavePix").textContent = doacoes[valor].chave;
}

function fecharModal() {
  document.getElementById("pixModal").style.display = "none";
}

function copiarChavePix() {
  const chave = document.getElementById("chavePix").textContent;
  navigator.clipboard.writeText(chave).then(() => {
    const notificacao = document.getElementById("notificacao");
    notificacao.style.display = "block";
    setTimeout(() => {
      notificacao.style.display = "none";
    }, 4000);
  }).catch(() => {
    alert("Erro ao copiar a chave PIX.");
  });
}

// Fecha o modal clicando fora
window.onclick = function(event) {
  const modal = document.getElementById("pixModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}