
//SCRIPT PARA COLOCAR QUANTIDADE DE ITEM A SER PEDIDAS
    const ValorDisplay = document.getElementById('displayInput');

    const botaoMais = document.getElementById('botaoMAIS');
    botaoMais.addEventListener('click', () => {
        let value = parseInt(ValorDisplay.value);
        if (!isNaN(value)) {
            value++;
            ValorDisplay.value = value;
            // Armazena o valor atual no sessionStorage
            sessionStorage.setItem('itemValue', value);
        } else {
            // Se o valor não for numérico, define como 0 e incrementa
            ValorDisplay.value = 0;
            sessionStorage.setItem('itemValue', 0);
        }
    });
    
    const botaoMenos = document.getElementById('botaoMENOS');
    botaoMenos.addEventListener('click', () => {
        let value = parseInt(ValorDisplay.value);
        if (!isNaN(value) && value > 0) {
            value--;
            ValorDisplay.value = value;
            // Armazena o valor atual no sessionStorage
            sessionStorage.setItem('itemValue', value);
        } else {
            // Se o valor não for numérico ou menor que zero, define como 0
            ValorDisplay.value = 0;
            sessionStorage.setItem('itemValue', 0);
        }
    });
    
   
