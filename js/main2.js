setInterval(()=>{
let dia=document.getElementsByClassName('reloj')[0];
let tiempo=new Date();
let hora=tiempo.getHours();
let minutos=tiempo.getMinutes();
let segundos=tiempo.getSeconds();

dia.innerHTML=hora+':'+minutos+':'+segundos;
},1000)
// --------------------------------------------------------------------------

if(document.getElementById('botonU')){
    function botonT(){
        alert('Buenas Usuario, Bienvenido a la pagina web, es para nosotros un placer que se encuntre obervando nuestro programa'
        +'\nEsperamos que le guste'

    
        )}

}
if(document.getElementsByClassName('botonD')){
    function botonTd(){
        prompt('¿que opinas el usuario?')
    }

}
// ---------------------------------------------------------------------
let titulo=document.querySelector('.title');
let creando=document.createElement('p');
creando.innerHTML='Formulario';
titulo.appendChild(creando);


let teclado=document.getElementById('nombre');
teclado.addEventListener('keydown',function(e){
    console.log('el usuario esta presionando la tecla :'+e.key)
})

let tecladoD=document.getElementById('apellido');
tecladoD.addEventListener('keydown',function(e){
    console.log('Estas presionando la tecla: '+e.key)
})

let tecladoT=document.getElementById('form');
tecladoT.addEventListener('submit', function(e){
    e.preventDefault();
    let mail=document.getElementById('correo').value
    console.log(mail)
})
// ----------------------------------------------------------------------


document.getElementById('boton-principal');
function enviar(){
    alert('Se envio el archivo correctamente')
 
}
