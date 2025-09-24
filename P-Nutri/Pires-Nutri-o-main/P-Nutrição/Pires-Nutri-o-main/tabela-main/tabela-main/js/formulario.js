// seleciona o botão de adicionar paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente"); 

botaoAdicionar.addEventListener('click', //ao clicar no botão
    function(event){
    event.preventDefault(); 
    
    //seleciona a tag <form> a partir do id
    var formulario = document.querySelector('#form-adiciona'); 

    //variáveis para acessar o valor do <input> a partir do nome
    var nome = formulario.nome.value;
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var gordura = formulario.gordura.value;

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
}
);