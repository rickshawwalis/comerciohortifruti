//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay = document.getElementById('displayInput');
let value = parseInt(ValorDisplay.value); // Move a declaração para fora dos eventos de clique

const botaoMais = document.getElementById('botaoMAIS');
botaoMais.addEventListener('click', () => {
    if (isNaN(value)) {
        value = 1;
    } else {
        value++;
    }
    ValorDisplay.value = value;
    // Armazena o valor atual no sessionStorage
    sessionStorage.setItem('itemValue', value);
});

const botaoMenos = document.getElementById('botaoMENOS');
botaoMenos.addEventListener('click', () => {
    if (value > 0) {
        value--;
    }
    ValorDisplay.value = value;
    // Armazena o valor atual no sessionStorage
    sessionStorage.setItem('itemValue', value);
});

const validacoes = () => {
    if (ValorDisplay.value === "" || ValorDisplay.value == 0) {
        alert("Informe a quantidade!");
    } else {
        alert("Produto Armazenado no carrinho");
        location.reload();
    }
    
}    

document.querySelector("#ComprarProduto").addEventListener("click", () => {
    validacoes()
})




