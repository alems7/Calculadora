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
      this.eventoFuncion();
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

  eventoFuncion: function(){
    document.getElementById("0").addEventListener("click", function() {calculadora.ingresoNumero("0");});
    document.getElementById("1").addEventListener("click", function() {calculadora.ingresoNumero("1");});
    document.getElementById("2").addEventListener("click", function() {calculadora.ingresoNumero("2");});
    document.getElementById("3").addEventListener("click", function() {calculadora.ingresoNumero("3");});
    document.getElementById("4").addEventListener("click", function() {calculadora.ingresoNumero("4");});
    document.getElementById("5").addEventListener("click", function() {calculadora.ingresoNumero("5");});
    document.getElementById("6").addEventListener("click", function() {calculadora.ingresoNumero("6");});
    document.getElementById("7").addEventListener("click", function() {calculadora.ingresoNumero("7");});
    document.getElementById("8").addEventListener("click", function() {calculadora.ingresoNumero("8");});
    document.getElementById("9").addEventListener("click", function() {calculadora.ingresoNumero("9");});
    document.getElementById("on").addEventListener("click", function() {calculadora.deletPantalla();});
    document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
    document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoDecimal();});
    document.getElementById("igual").addEventListener("click", function() {calculadora.verResultado();});
    document.getElementById("raiz").addEventListener("click", function() {calculadora.ingresoOperacion("raiz");});
    document.getElementById("dividido").addEventListener("click", function() {calculadora.ingresoOperacion("/");});
    document.getElementById("por").addEventListener("click", function() {calculadora.ingresoOperacion("*");});
    document.getElementById("menos").addEventListener("click", function() {calculadora.ingresoOperacion("-");});
    document.getElementById("mas").addEventListener("click", function() {calculadora.ingresoOperacion("+");});
  },

  deletPantalla: function(){

    this.enPantalla = "0";
    this.operacion = "";
    this.primerNumero = 0;
    this.segundoNumero = 0;
    this.resultado = 0;
    this.operacion = "";
    this.teclaIgual = false;
    this.ultimoNumero = 0;
    this.updatePantalla();
  },

  cambiarSigno: function(){
    if (this.enPantalla !="0") {
      var signo;
      if (this.enPantalla.charAt(0)=="-") {
        signo = this.enPantalla.slice(1);
      }	else {
        signo = "-" + this.enPantalla;
      }
    this.enPantalla = "";
    this.enPantalla = signo;
    this.updatePantalla();
    }
  },

  ingresoDecimal: function(){
    if (this.enPantalla.indexOf(".")== -1) {
      if (this.enPantalla ===""){
        this.enPantalla = this.enPantalla + "0.";
      } else {
        this.enPantalla = this.enPantalla + ".";
      }
      this.updatePantalla();
    }
  },

  ingresoNumero: function(valor){
    if (this.enPantalla.length < 8) {

      if (this.enPantalla=="0") {
        this.enPantalla = "";
        this.enPantalla = this.enPantalla + valor;
      } else {
        this.enPantalla = this.enPantalla + valor;
      }
    this.updatePantalla();
    }
  },

  ingresoOperacion: function(oper){
    this.primerNumero = parseFloat(this.enPantalla);
    this.enPantalla = "";
    this.operacion = oper;
    this.teclaIgual = false;
    this.updatePantalla();
  },

verResultado: function(){
  if(!this.teclaIgual){
      this.segundoNumero = parseFloat(this.enPantalla);
      this.ultimoNumero = this.segundoNumero;

      this.realizarOperacion(this.primerNumero, this.segundoNumero, this.operacion);

      } else { this.realizarOperacion(this.primerNumero, this.ultimoNumero, this.operacion);
    }

    this.primerNumero = this.resultado;

    this.enPantalla = "";

    if (this.resultado.toString().length < 9){
      this.enPantalla = this.resultado.toString();
    } else {
      this.enPantalla = this.resultado.toString().slice(0,8) + "...";
    }

    this.teclaIgual= true;
    this.updatePantalla();

  },

  realizarOperacion: function(primerNumero, segundoNumero, operacion){
    switch(operacion){
      case "+": this.resultado = (primerNumero + segundoNumero);
      break;
      case "-":	this.resultado = (primerNumero - segundoNumero);
      break;
      case "*": this.resultado = (primerNumero * segundoNumero);
      break;
      case "/":this.resultado = (primerNumero / segundoNumero);
      break;
      case "raiz":this.resultado =  (Math.sqrt(primerNumero));
    }
  },

  updatePantalla: function(){
    this.pantalla.innerHTML = this.enPantalla;
  }

};


calculadora.init();
