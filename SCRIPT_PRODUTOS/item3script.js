//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay3 = document.getElementById('displayInput3');
let value3 = parseInt(ValorDisplay3.value3); // Move a declaração para fora dos eventos de clique

const somarBotao3 = () => {
    if (isNaN(value3)) { //verifica se value3 não é um número.
        value3 = 1;
    } else {
        value3++;
    }
    ValorDisplay3.value3 = value3;
}
//BOTÃO MAIS
document.getElementById('botaoMAIS3').addEventListener('click', somarBotao3);

const subtrairBotao3 = () => {
    if (value3 > 0) {
        value3--;
    }
    ValorDisplay3.value3 = value3;
}
//BOTÃO MENOS
document.getElementById('botaoMENOS3').addEventListener('click', subtrairBotao3);


let indiceQuantidade = sessionStorage.length;
const Armazenar_Mais_Menos3 = () => {

    // Use o índice atual para criar chaves únicas no sessionStorage
    const QuantidadeProduto = `quantidadeProduto_${indiceQuantidade}`;
    // Armazene os novos itens no sessionStorage
    sessionStorage.setItem(QuantidadeProduto, parseInt(value3));
}

// SALVAR OS DADOS DE NOME DO PRODUTO E VALOR NO SESSIONSTORAGE
const BotaoComprar3 = document.querySelector("#ComprarProduto3");

const indiceProduto = sessionStorage.length;
const indeceValor = sessionStorage.length; // Corrigido: era 'sessionStorage.lenght'
const EfetuarCompra3 = () => {
    if (BotaoComprar3) {
        const nome = BotaoComprar3.getAttribute("data-texto");
        const valor = parseFloat(BotaoComprar3.value3);

        const nomeProduto = `nome_Produto_${indiceProduto}`;
        const valorProduto = `valor_Produto_${indeceValor}`;

        sessionStorage.setItem(nomeProduto, nome);
        sessionStorage.setItem(valorProduto, valor);
    }
}


//VALIDA SE A QUANTIDADE ESTÁ INSERIDA E DEPOIS ENVIA AO SESSIONSTORAGE
const validacoes3 = () => {
    if (ValorDisplay3.value3 === "" || ValorDisplay3.value3 == 0) {
        alert("Informe a quantidade!");
    } else {
         //location.reload();
        Armazenar_Mais_Menos3();
        EfetuarCompra3();
        window.location.href = '../comerciohortifruti/resumo/pagina-Resumo.html'
    }

}

BotaoComprar3.addEventListener("click", () => {
    validacoes3();
})

//FIM ---------------------------------------------------


