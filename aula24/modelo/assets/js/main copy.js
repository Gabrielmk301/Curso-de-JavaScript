
const calcular = document.getElementById('calcular')
const form = document.getElementById('container-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
})


function imc() {

    const resultado = document.getElementById('resultado');
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

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
       
        resultado.textContent = `Seu IMC é: ${valorIMC} \n ${classificacao}`
        
    }








    else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }

}



calcular.addEventListener('click', imc)









