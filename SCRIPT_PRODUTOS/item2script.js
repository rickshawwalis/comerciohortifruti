//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay2 = document.getElementById('displayInput2');
let value2 = parseInt(ValorDisplay2.value2); // Move a declaração para fora dos eventos de clique

const somarBotao2 = () => {
    if (isNaN(value2)) { //verifica se value2 não é um número.
        value2 = 1;
    } else {
        value2++;
    }
    ValorDisplay2.value2 = value2;
}
//BOTÃO MAIS
document.getElementById('botaoMAIS2').addEventListener('click', somarBotao2);

const subtrairBotao2 = () => {
    if (value2 > 0) {
        value2--;
    }
    ValorDisplay2.value2 = value2;
}
//BOTÃO MENOS
document.getElementById('botaoMENOS2').addEventListener('click', subtrairBotao2);


let indiceQuantidade = sessionStorage.length;
const Armazenar_Mais_Menos2 = () => {

    // Use o índice atual para criar chaves únicas no sessionStorage
    const QuantidadeProduto = `quantidadeProduto_${indiceQuantidade}`;
    // Armazene os novos itens no sessionStorage
    sessionStorage.setItem(QuantidadeProduto, parseInt(value2));
}

// SALVAR OS DADOS DE NOME DO PRODUTO E VALOR NO SESSIONSTORAGE
const BotaoComprar2 = document.querySelector("#ComprarProduto2");

const indiceProduto = sessionStorage.length;
const indeceValor = sessionStorage.length; // Corrigido: era 'sessionStorage.lenght'
const EfetuarCompra2 = () => {
    if (BotaoComprar2) {
        const nome = BotaoComprar2.getAttribute("data-texto");
        const valor = parseFloat(BotaoComprar2.value2);

        const nomeProduto = `nome_Produto_${indiceProduto}`;
        const valorProduto = `valor_Produto_${indeceValor}`;

        sessionStorage.setItem(nomeProduto, nome);
        sessionStorage.setItem(valorProduto, valor);
    }
}


//VALIDA SE A QUANTIDADE ESTÁ INSERIDA E DEPOIS ENVIA AO SESSIONSTORAGE
const validacoes2 = () => {
    if (ValorDisplay2.value2 === "" || ValorDisplay2.value2 == 0) {
        alert("Informe a quantidade!");
    } else {
         //location.reload();
        Armazenar_Mais_Menos2();
        EfetuarCompra2();
        window.location.href = '../comerciohortifruti/resumo/pagina-Resumo.html'
    }

}

BotaoComprar2.addEventListener("click", () => {
    validacoes2();
})

//FIM ---------------------------------------------------


