function abrirModal(valor) {
    document.getElementById("pixModal").style.display = "block";
    if (valor == 0) {
      document.getElementById("valorDoacao").textContent = `de um valor personalizado`;
      return;
    }
    document.getElementById("valorDoacao").textContent = `de R$ ${valor.toFixed(2)}`;
  }

  function fecharModal() {
    document.getElementById("pixModal").style.display = "none";
  }

  function copiarChavePix() {
    navigator.clipboard.writeText(chavePix).then(() => {
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