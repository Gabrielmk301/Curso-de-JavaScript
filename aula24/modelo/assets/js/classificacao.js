function calculaImc(peso, altura){
    var valorIMC = 0;
    imc = peso/(altura*altura);
    return valorIMC.toFixed(2);
}

function classificadorImc(valorIMC){

    if (altura !== '' && peso !== '') {
    
        resultado.innerHTML = `O valor do seu IMC é: ${valorIMC}`;
    
        let classificacao = '';
    
        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso'
            classificacao.style.backgroundColor = "red";
            
        }
        else if (valorIMC < 25) {
            classificacao = 'Peso ideal'
        }
        else if (valorIMC < 30) {
            classificacao = 'Sobrepeso'
        }
        else if (valorIMC < 35) {
            classificacao = 'Obesidade grau 1'
        }
        else if (valorIMC < 40) {
            classificacao = 'Obesidade grau 2'
        }
        else {
            classificacao = 'Obesidade grau 3'
        }
        
        return classificacao
       
       
        
    }
    
    else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }

}







