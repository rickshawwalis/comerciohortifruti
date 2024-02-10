//FORMA DE PAGAMENTO


const FormaPagamento = () => {
  let formasPagamento = document.getElementsByName('pagamento');
  for (let i = 0; i < formasPagamento.length; i++) {
    formasPagamento[i].addEventListener('change', mostrarTroco);
  }

  function mostrarTroco() {
    let escolhaPagamento = document.querySelector('input[name="pagamento"]:checked').value;


    let trocoSection = document.getElementById('trocoSection');

    if (escolhaPagamento) {
      if (escolhaPagamento === 'DINHEIRO') {
        trocoSection.style.display = 'block';
        sessionStorage.setItem('formaPagamento', 'DINHEIRO');
      }
      else if (escolhaPagamento === 'PIX') {
        trocoSection.style.display = 'none';
        sessionStorage.setItem('formaPagamento', 'PIX');
      }
    }
  }


  const Troco = () => {
    let valorTroco = document.getElementById('valorTroco').value.trim();
    if (valorTroco) {
      sessionStorage.setItem('Vtroco', valorTroco);
    }

  }

  const VerificarDados = () => {
    // Verifica se pelo menos uma forma de pagamento foi escolhida antes de prosseguir

    if (sessionStorage.getItem('formaPagamento')) {
      enviarMensagemWhatsApp();
    }
    else if (!sessionStorage.getItem('formaPagamento')) {
      alert("Escolha uma forma de pagamento!");
      return true; // Impede a continuação se nenhuma forma de pagamento foi escolhida
    }
  }

  document.querySelector("#Fpagamento").addEventListener("click", () => {
    Troco()
    VerificarDados()
    FormaPagamento()
  });
};

document.addEventListener('DOMContentLoaded', FormaPagamento);


const enviarMensagemWhatsApp = () => {
  let somaGeral = 0
  let textoParaEnviar = '';

  const calcular = (escolhaValor, escolhaQuantidade) => {
    somaGeral += escolhaValor * escolhaQuantidade;
  };

  //contador de pedidos
  let numeroPedido = 1;

  for (let i = 0; i < sessionStorage.length; i++) {
    const chaveProduto = `nome_Produto_${i}`;
    const chaveValor = `valor_Produto_${i}`;
    const chaveQuantidade = `quantidadeProduto_${i}`;

    const escolhaProduto = sessionStorage.getItem(chaveProduto);
    const escolhaValor = parseFloat(sessionStorage.getItem(chaveValor));
    const escolhaQuantidade = parseInt(sessionStorage.getItem(chaveQuantidade));


    if (escolhaProduto) {
      calcular(escolhaValor, escolhaQuantidade)

      let somaTotal = escolhaValor * escolhaQuantidade;


      textoParaEnviar += `
    \n*PEDIDO Nº:* ${numeroPedido}
    \n*PRODUTO:* \n${escolhaProduto}
    \n*VALOR PRODUTO:* R$ ${escolhaValor.toFixed(2)}
    *QUANTIDADE:* ${escolhaQuantidade}
    *VALOR TOTAL:* R$ ${somaTotal.toFixed(2)} 
   `;

      numeroPedido++;
    }
  }

  const formaPagamento = sessionStorage.getItem('formaPagamento');

  textoParaEnviar += `
      \n*VALOR GERAL:*  R$ ${somaGeral.toFixed(2)}`


  if (formaPagamento) {
    textoParaEnviar += `
        \n*FORMA DE PAGAMENTO:* ${formaPagamento} 
      `;
  }

  const valorTroco = sessionStorage.getItem('Vtroco');

  if (valorTroco) {
    textoParaEnviar += `
      *TROCO:* ${valorTroco}
      `;
  }

  //TRECHO PARA GERAR ENDEREÇO 
  const endereco = JSON.parse(sessionStorage.getItem('endereco')) || {};

  const codigoPais = '55';
  const numeroTelefone = '87991614277';

  const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;
  window.open(linkWhatsApp, '_blank');
}

