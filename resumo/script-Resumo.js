const carrinhoCompras = () => {
  let somaGeral = 0
  const container = document.querySelector('.conteudo');

  const Apagar = (div, chaveProduto, chaveValor,chaveQuantidade) => {
    let excluir = document.createElement('button');
    excluir.setAttribute("class", "excluirItem");
    excluir.innerHTML = "REMOVER &#10060";
    div.appendChild(excluir);


    excluir.addEventListener('click', () => {

      //multiplica para depois subtrair o valor que foi excluido
      const valorDivRemovida = parseFloat(sessionStorage.getItem(chaveValor)) * parseFloat(sessionStorage.getItem(chaveQuantidade));
      
      container.removeChild(div); // Remove a div que contém o botão
      
      removerSessionStorage(chaveProduto, chaveValor);
      // Subtrai o valor da div removida do somaGeral
      somaGeral -= valorDivRemovida;

      document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">VALOR GERAL:</span> R$ ${somaGeral.toFixed(2)}`;

    });
  };

  const removerSessionStorage = (chaveProduto, chaveValor) => {
    sessionStorage.removeItem(chaveProduto);
    sessionStorage.removeItem(chaveValor);
  };

  const calcular = (escolhaValor, escolhaQuantidade) => {
    somaGeral += escolhaValor * escolhaQuantidade;
  };

  const CriaDiv = () => {
    for (let i = 0; i < sessionStorage.length; i++) {
      const chaveProduto = `nome_Produto_${i}`;
      const chaveValor = `valor_Produto_${i}`;
      const chaveQuantidade = `quantidadeProduto_${i}`;

      const escolhaProduto = sessionStorage.getItem(chaveProduto);
      const escolhaValor = parseFloat(sessionStorage.getItem(chaveValor));
      const escolhaQuantidade = parseInt(sessionStorage.getItem(chaveQuantidade));

  
      if (escolhaProduto) {
        let div = document.createElement('div');
        div.setAttribute("class", "mercadoria");
       
        calcular(escolhaValor, escolhaQuantidade)

        let somaTotal = escolhaValor * escolhaQuantidade

        // Exiba os valores formatados no HTML
        div.innerHTML += `
 <br> <br><span style="font-weight: bold;">PRODUTO:</span> <br>&#127826;${escolhaProduto}
 <br> <br><span style="font-weight: bold;">VALOR PRODUTO:</span> <br>&#127826;${escolhaValor.toFixed(2)}
 <br> <br><span style="font-weight: bold;">QUANTIDADE:</span> <br>&#127826;${escolhaQuantidade}
 <br> <br><span style="font-weight: bold;">VALOR TOTAL:</span> <br>&#127826;${somaTotal.toFixed(2)}
   `;

        container.appendChild(div);
        Apagar(div, chaveProduto, chaveValor,chaveQuantidade);

      
      }
    }
    
  }


  CriaDiv()
  document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">&#128181 VALOR GERAL:</span> R$ ${somaGeral.toFixed(2)} &#128181`;
}
document.addEventListener('DOMContentLoaded', carrinhoCompras);
