//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
const ValorDisplay = document.getElementById('displayInput');
let value = parseInt(ValorDisplay.value); // Move a declaração para fora dos eventos de clique

const somarBoto = () => {
    if (isNaN(value)) {
        value = 1;
    } else {
        value++;
    }
    ValorDisplay.value = value;
    // Armazena o valor atual no sessionStorage

}

const subtrairBoto = () => {
    if (value > 0) {
        value--;
    }
    ValorDisplay.value = value;
    // Armazena o valor atual no sessionStorage

}

const Armazenar_Mais_Menos = () => {
    sessionStorage.setItem('itemValue', value);
    sessionStorage.setItem('itemValue', value);
}


const botaoMais = document.getElementById('botaoMAIS');
botaoMais.addEventListener('click', () => {
    somarBoto()
});

const botaoMenos = document.getElementById('botaoMENOS');
botaoMenos.addEventListener('click', () => {
    subtrairBoto()
});

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




