setInterval(()=>{
    let reloj=document.getElementsByClassName('reloj')[0];
    let tiempo=new Date();
    let hora=tiempo.getHours();
    let minutos=tiempo.getMinutes();
    let segundos=tiempo.getSeconds();

reloj.innerHTML='HORA:  '+hora+':'+minutos+':'+segundos;

})
// --------------------------------------------------------------------
function boton(){
    document.getElementById('boton-principal');

   let hambuerguesa=document.getElementById('javascript-hambuerguesa').value;
   let salchipapa=document.getElementById('javascript-salchipapa').value;
   let perro=document.getElementById('javascript-perros').value;
   let pizza=document.getElementById('javascript-pizza').value;

   if(hambuerguesa<=30){
     hambuerguesa*=15000;
   }
   if(salchipapa<=30){
    salchipapa*=10000;

   }
   if(perro<=50){
       perro*=12000;
   }
   if(pizza<=20){
    pizza*=30000;
   }
 


  let resultado=hambuerguesa+salchipapa+perro+pizza;

 if(resultado>=100000){
     bono()
     regalo=resultado-bono;
     alert('Señor cliente para informale, que usted se ha ganado un bono de: '+bono
     +'\nPor lo tanto solo debe pagar un total de: '+regalo)
 }else{
    alert('El total de su compra es de: '+resultado);
 }
  
}

  function bono(){
       bono=Math.round(Math.random()*30000);
  }


  document.getElementById('vaciar-compra')
  function vaciar(){
  window.location.reload();
  }
