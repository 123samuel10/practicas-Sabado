document.getElementById('click');
function enviar(){
    alert('se envio el formulario')
}
let teclado=document.getElementById('nombre');
teclado.addEventListener('keydown',function(e){
    console.log('estas presionando la tecla: ',e.key);
})

let tecladoD=document.getElementById('apellido');
tecladoD.addEventListener('keydown',function(e){
    console.log('el usuario esta presionando la tecla:  ',e.key);
})

let teclaT=document.getElementById('form');
teclaT.addEventListener('submit',function(e){
    e.preventDefault();
    let email=document.getElementById('correo').value;
    console.log(email);
})


// ------------------------------------------------------------------
setInterval(()=>{
let dia=document.getElementsByClassName('reloj')[0];
let tiempo= new Date();
let hora=tiempo.getHours();
let minutos=tiempo.getMinutes();
let segundos=tiempo.getSeconds();

dia.innerHTML=hora+':'+minutos+':'+segundos;


},1000)


let creando=document.querySelector('.titulo');
let titulo=document.createElement('p');
titulo.innerHTML='FORMULARIO';
creando.appendChild(titulo);