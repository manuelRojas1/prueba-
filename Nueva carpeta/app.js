var express =require('express');
var app=express();
var path= require('path');
var operando1;
var operando2;
var operacion;

app.use(express.static(path.join(__dirname,"public")))

app.get('/', function(req, res) {
    res
       .status(200)
       .sendFile(path.join(__dirname,"public","index.html"))
  });
app.listen(3000,(req,res)=>{
    console.log('server running on http://localhost:3000')
})

function init(){
    var resultado=document.getElementById('resultado')
    var reset=document.getElementById('reset')
    var suma=document.getElementById('suma')
    var resta=document.getElementById('resta')
    var multiplicacion=document.getElementById('multiplicacion')
    var division=document.getElementById('division')
    var igual=document.getElementById('igual')
    var uno=document.getElementById('uno')
    var dos=document.getElementById('dos')
    var tres=document.getElementById('tres')
    var cuatro=document.getElementById('cuatro')
    var cinco=document.getElementById('cinco')
    var seis=document.getElementById('seis')
    var siete=document.getElementById('siete')
    var ocho=document.getElementById('ocho')
    var nueve=document.getElementById('nueve')
    var cero=document.getElementById('cero')


 uno.onclick =function(e){
     resultado.textContent=resultado.textContent + "1"
 }
 dos.onclick =function(e){
    resultado.textContent=resultado.textContent + "2"
}
tres.onclick =function(e){
    resultado.textContent=resultado.textContent + "3"
}
cuatro.onclick =function(e){
    resultado.textContent=resultado.textContent + "4"
}
cinco.onclick =function(e){
    resultado.textContent=resultado.textContent + "5"
}
seis.onclick =function(e){
    resultado.textContent=resultado.textContent + "6"
}
siete.onclick =function(e){
    resultado.textContent=resultado.textContent + "7"
}
ocho.onclick =function(e){
    resultado.textContent=resultado.textContent + "8"
}
nueveuno.onclick =function(e){
    resultado.textContent=resultado.textContent + "9"
}
cero.onclick =function(e){
    resultado.textContent=resultado.textContent + "0"
}

reset.onclick =function(e){
   resetear();
}

suma.onclick =function(e){
    operando1=resultado.textContent;
    operacion= "+";
    limpiar();

}

resta.onclick =function(e){
    operando1=resultado.textContent;
    operacion= "-";
    limpiar();
}

multiplicacion.onclick =function(e){
    operando1=resultado.textContent;
    operacion= "*";
    limpiar();
}

division.onclick =function(e){
    operando1=resultado.textContent;
    operacion= "/";
    limpiar();
}

igual.onclick=function(e){
    operando2=resultado.textContent;
    resolver();
}

}

function limpiar(){
    resultado.textContent="";
}

function resetear(){
    resultado.textContent="";
    operando1=0;
    operando2=0;
    operacion="";
}

function resolver(){
    var res=0;
  switch(operacion){
      case "+":
              res=parseFloat(operando1) + parseFloat(operando2)
              break;
      case "-":
              res=parseFloat(operando1) - parseFloat(operando2)
              break;
      case "*":
              res=parseFloat(operando1) * parseFloat(operando2)
              break;
      case "/":
              res=parseFloat(operando1) / parseFloat(operando2)
              break;
  }

  resetear();
  console.log(res)
  resultado.textContent=res;
}

/*
console.log(coinConvert("Soles",10));

function coinConvert(moneda,cantidad) {
  switch(moneda){
    case "Soles":
      moneda=3.25;
      break;
    case "Pesos Mexicanos":
      moneda=18;
      break;
    case "Pesos Chilenos ":
      moneda=660;
      break;
  }
  
  var resultado = moneda * cantidad;
  return resultado;
}
*/