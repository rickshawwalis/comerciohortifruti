//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay = document.getElementById('displayInput');
let value = parseInt(ValorDisplay.value); // Move a declaração para fora dos eventos de clique

const somarBotao = () => {
    if (isNaN(value)) { //verifica se value não é um número.
        value = 1;
    } else {
        value++;
    }
    ValorDisplay.value = value;
}

const subtrairBotao = () => {
    if (value > 0) {
        value--;
    }
    ValorDisplay.value = value;
    // Armazena o valor atual no sessionStorage

}

//BOTÃO MAIS
document.getElementById('botaoMAIS').addEventListener('click',  somarBotao);

//BOTÃO MENOS
document.getElementById('botaoMENOS').addEventListener('click', subtrairBotao);

const Armazenar_Mais_Menos = () => {
    sessionStorage.setItem('quantidade', value);
    sessionStorage.setItem('quantidade', value);
}

const validacoes = () => {
    if (ValorDisplay.value === "" || ValorDisplay.value == 0) {
        alert("Informe a quantidade!");
    } else {
        alert("Produto Armazenado no carrinho");
        location.reload();
        Armazenar_Mais_Menos()
    }

}


document.querySelector("#ComprarProduto").addEventListener("click", () => {
    validacoes()
})

//FIM ---------------------------------------------------


