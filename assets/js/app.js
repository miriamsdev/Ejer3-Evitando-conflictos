var calcula = document.getElementById('calcula');
var print = document.getElementById('print');
var nombre = document.getElementById('name');
var masa = document.getElementById('masa');

calcula.onclick = function (){

  if (masa.value.length == 0 ){
    alert("Por favor completar su masa en Kg.");
  } else if (masa.value.length != 0 ){
  print.innerHTML = "<h3>Su peso es:</h3><ul><li>Mercurio: " + (0.39 * masa.value) +
                    "</li><li>Venus: " + (0.87 * masa.value).toFixed(2) + "</li><li>Tierra: " + (1 * masa.value).toFixed(2) +
                    "</li><li>Marte: " + (0.38 * masa.value).toFixed(2) + "</li><li>Júpiter: " + (2.55 * masa.value).toFixed(2) +
                    "</li><li>Saturno: " + (0.93 * masa.value).toFixed(2) + "</li><li>Urano: " + (0.99 * masa.value).toFixed(2) +
                    "</li><li>Neptuno: " + (1.38 * masa.value).toFixed(2) + "</li><li>Luna: " + (0,17 * masa.value).toFixed(2) +
                    "</li></ul>";
  }
}

document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}

/*Mercurio = 0.39
Venus  = 0.87
Tierra = 1
Marte = 0.38
Júpiter = 2.55
Saturno = 0.93
Urano = 0.99
Neptuno = 1.38
Luna = 0.17
*/
