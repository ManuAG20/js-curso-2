let titulo=document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function intentoAlert (){
    alert('Yo amo JS');
}
function intentoConsole (){
    console.log('El botón fue clicado');
}
function intentoPrompt (){
    let ciudad=prompt('escriba la ciudad de brasil que mas te gusta');
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}
function intentoSuma (){
    let numero1=parseInt(prompt('Ingresa el primer numero'));
    let numero2=parseInt(prompt('Ingresa el segundo numero'));
    let suma= numero1 + numero2;
    alert('El resultado es : '+ suma);
}