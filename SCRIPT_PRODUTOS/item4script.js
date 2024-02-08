//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay4 = document.getElementById('displayInput4');
let value4 = parseInt(ValorDisplay4.value4); // Move a declaração para fora dos eventos de clique

const somarBotao4 = () => {
    if (isNaN(value4)) { //verifica se value4 não é um número.
        value4 = 1;
    } else {
        value4++;
    }
    ValorDisplay4.value4 = value4;
}
//BOTÃO MAIS
document.getElementById('botaoMAIS4').addEventListener('click', somarBotao4);

const subtrairBotao4 = () => {
    if (value4 > 0) {
        value4--;
    }
    ValorDisplay4.value4 = value4;
}
//BOTÃO MENOS
document.getElementById('botaoMENOS4').addEventListener('click', subtrairBotao4);


let indiceQuantidade = sessionStorage.length;
const Armazenar_Mais_Menos4 = () => {

    // Use o índice atual para criar chaves únicas no sessionStorage
    const QuantidadeProduto = `quantidadeProduto_${indiceQuantidade}`;
    // Armazene os novos itens no sessionStorage
    sessionStorage.setItem(QuantidadeProduto, parseInt(value4));
}

// SALVAR OS DADOS DE NOME DO PRODUTO E VALOR NO SESSIONSTORAGE
const BotaoComprar = document.querySelector("#ComprarProduto4");

const indiceProduto = sessionStorage.length;
const indeceValor = sessionStorage.length; // Corrigido: era 'sessionStorage.lenght'
const EfetuarCompra4 = () => {
    if (BotaoComprar) {
        const nome = BotaoComprar.getAttribute("data-texto");
        const valor = parseFloat(BotaoComprar.value4);

        const nomeProduto = `nome_Produto_${indiceProduto}`;
        const valorProduto = `valor_Produto_${indeceValor}`;

        sessionStorage.setItem(nomeProduto, nome);
        sessionStorage.setItem(valorProduto, valor);
    }
}


//VALIDA SE A QUANTIDADE ESTÁ INSERIDA E DEPOIS ENVIA AO SESSIONSTORAGE
const validacoes4 = () => {
    if (ValorDisplay4.value4 === "" || ValorDisplay4.value4 == 0) {
        alert("Informe a quantidade!");
    } else {
         //location.reload();
        Armazenar_Mais_Menos4();
        EfetuarCompra4();
        window.location.href = '../comerciohortifruti/resumo/pagina-Resumo.html'
    }

}

BotaoComprar.addEventListener("click", () => {
    validacoes4();
})

//FIM ---------------------------------------------------


