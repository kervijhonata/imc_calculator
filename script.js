const btnCalc = document.querySelector("#btnCalc");
const pesoIn = document.querySelector("#pesoIn");
const alturaIn = document.querySelector("#alturaIn");
const response = document.querySelector("#response");
const form = document.querySelector(".form-container");

const imc = (peso, altura) => { //Main Function
    let resultado = Math.floor(peso / (altura^2));
    return resultado;
}

const diagnose = (resultado) => {
    if(resultado <= 19){ diagnostico = "Magro"}
    else if(resultado > 19 && resultado <= 25){ diagnostico = "Saudável"}
    else if(resultado > 25 && resultado <= 30){ diagnostico = "Sobrepeso"}
    else if(resultado > 30 && resultado <= 40){ diagnostico = "Obesidade"}
    else if(resultado > 40 ){ diagnostico = "Obesidade Mórbida"}
    return diagnostico;
}

function processIMC(){

    let peso = parseFloat(pesoIn.value);
    let altura = parseFloat(alturaIn.value);

    if(isNaN(peso) || isNaN(altura)){
        alert("Verifique os valores e tente novamente")
    }else{
        response.innerHTML = imc(peso, altura)
        response.innerHTML += "<br>" + diagnose(imc(peso, altura))
    }
}

btnCalc.onclick = processIMC;
form.onkeyup = (e) => {
    if(e.keyCode == 13){
        processIMC();
    }
}
