
function  boton(){
    document.getElementById('boton-comprar');

    let limonada=document.getElementById('limonada').value;
    let cocacola=document.getElementById('cocacola').value;
    let cerveza=document.getElementById('cerveza').value;
    let jugos=document.getElementById('jugos').value;
    
    if(limonada<=40){
     limonada*=2000;
    }
    if(cocacola<=30){
        cocacola*=4000;
    }
    if(cerveza<=30){
        cerveza*=10000;
    }
    if(jugos<=20){
        jugos*=3000;
    }
    resultado=limonada+cocacola+cerveza+jugos;
    if(resultado>=30000){
        bono();
        regalo=resultado-bono;
        alert('Hola Usuarios, se ha ganado un bono de: '+bono
        +'\nPor lo tanto el total de su compra es: '+regalo);
    }
    else{
        alert('El total de su compra es: ' +resultado);
    }

}


function bono(){
    bono=Math.round(Math.random()*20000);
}
document.getElementById('vaciar-compra');
function botonD(){
    window.location.reload();
}