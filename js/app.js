var calculadora = {

  pantalla: document.getElementById("display"),
  enPantalla : "0",
  primerNumero : 0,
  segundoNumero : 0,
  ultimoNumero: 0,
  operacion: "",
  resultado: 0,
  teclaIgual: false,

  init: (function(){
  		this.eventoBotones(".tecla");
  	}),

    eventoBotones: function(selector){
      var x = document.querySelectorAll(selector);
    for (var i = 0; i<x.length;i++) {
      x[i].onclick = this.mouseHoverBoton;
      x[i].onmouseleave = this.mouseLeaveBoton;
    }
  },

  mouseHoverBoton: function(event){
		calculadora.hoverBoton(event.target);
  },

  mouseLeaveBoton: function(event){
  calculadora.leaveBoton(event.target);
},

hoverBoton: function(elemento){
		var x = elemento.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			elemento.style.width = "27%";
			elemento.style.height = "61px";
		} else if(x=="mas") {
			elemento.style.width = "87%";
			elemento.style.height = "97%";
		} else {
		elemento.style.width = "20%";
		elemento.style.height = "62px";
		}
	},

  leaveBoton: function(elemento){
		var x = elemento.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			elemento.style.width = "29%";
			elemento.style.height = "62.91px";
		} else if(x=="mas") {
			elemento.style.width = "90%";
			elemento.style.height = "100%";
		} else {
		elemento.style.width = "22%";
		elemento.style.height = "62.91px";
		}
	},

};

calculadora.init();
