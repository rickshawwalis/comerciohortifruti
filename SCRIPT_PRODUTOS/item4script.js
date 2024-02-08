//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay = document.getElementById('displayInput1');
let value = parseInt(ValorDisplay.value); // Move a declaração para fora dos eventos de clique

const somarBotao = () => {
    if (isNaN(value)) { //verifica se value não é um número.
        value = 1;
    } else {
        value++;
    }
    ValorDisplay.value = value;
}
//BOTÃO MAIS
document.getElementById('botaoMAIS1').addEventListener('click', somarBotao);

const subtrairBotao = () => {
    if (value > 0) {
        value--;
    }
    ValorDisplay.value = value;
}
//BOTÃO MENOS
document.getElementById('botaoMENOS1').addEventListener('click', subtrairBotao);


let indiceQuantidade = sessionStorage.length;
const Armazenar_Mais_Menos = () => {

    // Use o índice atual para criar chaves únicas no sessionStorage
    const QuantidadeProduto = `quantidadeProduto_${indiceQuantidade}`;
    // Armazene os novos itens no sessionStorage
    sessionStorage.setItem(QuantidadeProduto, parseInt(value));
}

// SALVAR OS DADOS DE NOME DO PRODUTO E VALOR NO SESSIONSTORAGE
const BotaoComprar = document.querySelector("#ComprarProduto1");

const indiceProduto = sessionStorage.length;
const indeceValor = sessionStorage.length; // Corrigido: era 'sessionStorage.lenght'
const EfetuarCompra = () => {
    if (BotaoComprar) {
        const nome = BotaoComprar.getAttribute("data-texto");
        const valor = parseFloat(BotaoComprar.value);

        const nomeProduto = `nome_Produto_${indiceProduto}`;
        const valorProduto = `valor_Produto_${indeceValor}`;

        sessionStorage.setItem(nomeProduto, nome);
        sessionStorage.setItem(valorProduto, valor);
    }
}


//VALIDA SE A QUANTIDADE ESTÁ INSERIDA E DEPOIS ENVIA AO SESSIONSTORAGE
const validacoes = () => {
    if (ValorDisplay.value === "" || ValorDisplay.value == 0) {
        alert("Informe a quantidade!");
    } else {
         //location.reload();
        Armazenar_Mais_Menos();
        EfetuarCompra();
        window.location.href = '/comerciohortifruti/resumo/pagina-Resumo.html'
    }

}

BotaoComprar.addEventListener("click", () => {
    validacoes();
})

//FIM ---------------------------------------------------


