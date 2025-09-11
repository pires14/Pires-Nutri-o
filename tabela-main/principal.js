//MUDA OS TITULOS
var tsecundario = document.querySelector(".container-titulo-dois");
tsecundario.textContent = "Meus pacientes";

var titulo = document.querySelector(".container-titulo");
titulo.textContent = "João Nutrição";

//SELECIONA PACIENTE
var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    
    //OBTÉM O VALOR PESO
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
   

    //OBTÉM O VALOR ALTURA
    var tdAltura = document.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    

    //CALCULA IMC
    var IMC = peso / (altura * altura);

    //VALORES BOOLEANOS
    var pesoValido = true;
    var alturaValida = true;
    
    //O cálculo é feito se os valores forem true.
    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC;
    }

    //AVISO DE VALOR INVÁLIDO
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        alert("Peso inválido!");
        tdIMC.innerText = 'Erro!';
        tdIMC.classList.add('paciente_invalido');
    }
    //Emite um alerta se a altura for menor ou maior do que o requisitado
    if(altura < 0 || altura > 3.00){
        var alturaValida = false;
        alert("Altura inválida!");
        tdIMC.classList.add('paciente_invalido');
    }
}

titulo.addEventListener('click', function(){
    alert("Clicou nessa bomba");
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click', 
    function(event){
    event.preventDefault();
    console.log("Paciente adicionado");
});