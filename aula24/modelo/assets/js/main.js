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

        
    if(valorIMC < 15.99){
        classificacao = "Magreza Grave";
    }
    if(valorIMC >= 16 && valorIMC <= 16.99){
        classificacao = "Magreza Moderada";
    } 
    if(valorIMC >= 17 && valorIMC <= 18.5){
        classificacao = "Magreza Leve";
    }
    if(valorIMC >= 18.5 && valorIMC <= 24.9){
        classificacao = "Saudável";
    }
    if(valorIMC >= 25 && valorIMC <= 29.9){
        classificacao = "Sobrepeso";
    }
    if(valorIMC >= 30 && valorIMC <= 34.9){
        classificacao = "Obesidade Grau 1";
    }
    if(valorIMC >= 35 && valorIMC <= 39.9){
        classificacao = "Obesidade Grau 2 (Severa)";
    }
    if(valorIMC >= 40){
        classificacao = "Obesidade Grau 3 (Mórbida)";
    }




        resultado.innerHTML = `Seu IMC é: ${valorIMC} <br>
        ${classificacao}`

        let cor = ''

        if (valorIMC < 15.99) {
            classificacao = "rgb(251, 255, 0)";
        }
        if (valorIMC >= 16 && valorIMC <= 16.99) {
            cor = "rgb(251, 255, 0)";
        }
        if (valorIMC >= 17 && valorIMC <= 18.5) {
            cor = "";
        }
        if (valorIMC >= 25 && valorIMC <= 29.9) {
            cor = "rgb(251, 255, 0)";
        }
        if (valorIMC >= 30 && valorIMC <= 34.9) {
            cor = "rgb(251, 255, 0)";
        }
        if (valorIMC >= 35 && valorIMC <= 39.9) {
            cor = "rgb(251, 255, 0)";
        }
        if (valorIMC >= 40) {
            cor = "rgb(30, 255, 0)";
        }
        return cor

    }


    else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }




    corImc();







}



calcular.addEventListener('click', imc)

















