// (function(){

// }())




// var amigos = ["Carlos", "Cesar", "Alex"];
// **REEMPLAZANDO UN ELEMENTO
// amigos[0] = "Nuevo";

// **AGREGAR ELEMENTOS AL FINAL DE UN ARREGLO
// amigos[amigos.length] = "Fernando";
// o
// amigos.push("Luchito", "Luchita", "Luchón");

// **ELIMINAR ELEMENTO FINAL DE UN ARREGLO
// amigos.pop();

// **CONCATENAR ARREGLOS
// var amigos = ["Carlos", "Cesar", "Alex"
// var amigos2 = ["Alejandro", "Diego", "Manuel"];
// var amigos3 = amigos.concat(amigos2);

// **AÑADIR "RANDOM" ENTRE ELEMENTOS DE UN ARRAY
// amigos.join(" : 
// document.write(amigos.join(" : "));

// **ORDENAR ALFABETICAMENTE ELEMENTOS DE UN ARRAY
// var ordenados = amigos.sort();
// document.write(ordenados);

// // **INVERTIR ORDER DE ELEMENTOS DE UN ARRAY
// var ordenados = amigos.reverse();
// document.write(ordenados);

//**OPERADORES LÓGICOS
// != Distinto de 
// || o 
// && y

// **CONDICIONALES IF
// var nombre = "Carlos";
// var edad = 22;

// if (edad == 25 || nombre == "Carlos" ) {
// 	document.write("Bienvenido es correctin");
// } else if (nombre == "Carlos"){
// 	document.write("Bienvenido oye oye " + nombre);
// } else{
// 	document.write("Juera de aqui");
// }

// if (edad === "22") {
// 	document.write("TRUE");
// } else {
// 	document.write("FALSE");
// }


// **CICLO FOR
// var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// for (var i = 0; i <= dias.length -1; i++) {
// 	document.write(dias[i] + "<br>")
// }


// **CICLO WHILE
// var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// var i = 0;
// while (i <= dias.length -1){
// 	document.write(dias[i] + "<br>" );
// 	i++;
// }

// **CICLO DO WHILE
// do{
// 	HAZ ESTO AL MENOS UNA VEZ
// } while (SEA TRUE);


// **FUNCIONES
// function suma(numero1, numero2){
// 	var num1 = numero1;
// 	var num2 = numero2;

// 	 return num1 + num2;
// }

// document.write(suma(10, 10));
// document.write("<br>");
// document.write(suma(30, 40));

// _____________________________

// function numMax(valor1, valor2) {
// 	if (valor1 > valor2) {
// 		return valor1;
// 	}
// 	else {
// 		return valor2;
// 	}
// }
// document.write(numMax(50, 90));


// **HACIENDO UNA CALCULADORA
// function suma(num1, num2){
// 	var num1 = parseFloat(document.getElementById('numero1').value);
// 	var num2 = parseFloat(document.getElementById('numero2').value);

// 	var result = num1 + num2;
// 	return result;
// }
// document.write(result);


// **CORTAR UNA CADENA DE TEXTO
// var nombre = "Mi nombre";
// var nombreDos = nombre.substring(4);

// document.write(nombreDos);


// **REEMPLAZAR UNA CADENA DE TEXTO
// REPLACE recibe dos parámetros, el primero es el que se va modificar y el segundo lo que va reemplazar
// var color = "Verda maril rojo";
// var colorDos = color.replace("a", "AAAY");

// document.write(colorDos);


// **ACCEDER A LOS ELEMENTROS A TRAVÉS DEL DOM
// var elementosP = document.getElementsByTagName('p');

// **

// 1.- CREAR ELEMENTO
// var elemento = document.createElement("h2");

// // 2.- CREAR NODO DE TEXTO
// var contenido = document.createTextNode("Este es el contenido po");

// // 3.- AÑADIR NODO AL ELEMENTO
// elemento.appendChild(contenido);

// // 4.- AGREGAR ATRIBUTOS AL ELEMENTO
// elemento.setAttribute("align", "center");

// // 5.- AGREGAR EL ELEMENTO AL DOCUMENTO
// document.getElementById("subtitulo").appendChild(elemento

// **AGREGAR NODOS AL DOM (Al inicio del elemento)
// var elemento = document.createElement("li");
// var contenido = document.createTextNode("Nuevo texto");
// elemento.appendChild(contenido);

// var padre = document.getElementsByTagName("li")[0].parentNode;
// var primerElementoLi = document.getElementsByTagName("li")[0];
// padre.insertBefore(elemento, primerElementoLi);

//**MODIFICANDO, REEMPLAZANDO, ELIMINANDO NODOS DEL DOM

// var elemento = document.createElement("li");
// var contenido = document.createTextNode("Nuevo texto");
// elemento.appendChild(contenido);

// var primerElemento = document.getElementById("primero");
// primerElemento.textContent = "aaaaaaaaaaaffffffffffffffffff";	
// Se puede utilizar inner.HTML o textContent, la diferencia es que el textContent es literal a la hora de traer o enviar, en cambio inner nos permite por ejemplo, agregar clases o atributos

//**REEMPLAZANDO, ELIMINANDO NODOS DEL DOM
// var elemento = document.createElement("li");
// var contenido = document.createTextNode("Nuevo texto");
// elemento.appendChild(contenido);

// var padre = document.getElementsByTagName("li")[0].parentNode;
// var referencia = document.getElementsByTagName("li")[0];
// padre.replaceChild(elemento, referencia)


//**ELIMINANDO NODOS DEL DOM
// var elemento = document.createElement("li");
// var contenido = document.createTextNode("Nuevo texto");
// elemento.appendChild(contenido);

// var padre = document.getElementsByTagName("li")[0].parentNode;
// var referencia = document.getElementsByTagName("li")[1];
// padre.removeChild(referencia);

//**ACCEDER ATRIBUTOS DEL DOM
// var elemento = document.createElement("div");
// var padre = document.getElementById("contenedor");
// var referencia = document.getElementsByTagName("div")[0];
// elemento.setAttribute("class", "azul");
// padre.insertBefore(elemento, referencia);


// **MODIFICANDO ESTILOS CON JS
// var elemento = document.getElementById("encabezado");

// **FUNCIÓN ZOOM (NO ENTENDÍ TODO)
// var zoom = function() {
// 	var thumb = document.getElementById("thumb");
// 	// thumb.className = "thumb grande";

// 	if (thumb.className == "thumb") {
// 		thumb.className = "thumb grande";
// 	}
// 	else {
// 		thumb.className = "thumb";
// 	}
// }

// **EVENTOS (CLICK)

// (function () {

// 	var saludo = function() {
// 		alert("kasjka");
// 	};
	
// 	var boton = document.getElementById("boton");
// 	boton.addEventListener("click", saludo);

// }())

// **VALIDACIÓN FORMULARIOS   
// var formulario = document.getElementsByName("formulario")[0];
// var elementos = formulario.elements;
// var boton = document.getElementById("btn");

// var validarNombre = function(e){
// 	if (formulario.nombre.value == 0){
// 		alert("Debes completar el campo nombre")
// 		e.preventDefault();
// 	}
// };

// var validarRadio = function(e){
// 	if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) { 
// 	} else {
// 		alert("Completa el campo sexo para enviar");
// 		e.preventDefault();
// 	}
// };

// var validarCheckbox = function(e){
// 	if (formulario.terminos.checked == true) {
// 	} else {
// 		alert("Debes aceptar los terrminos");
// 		e.preventDefault();
// 	}
// };

// var validar = function(e){
// 	validarNombre(e);
// 	validarRadio(e);
// 	validarCheckbox(e);
// };

// formulario.addEventListener("submit", validar);


// **TIMER
// (function(){
// 	var contador = 0;
// 	// TimeOut
// 	var saludo = function(){
// 		contador++;
// 		alert("saaaa");

// 		if (contador === 3) {
// 			clearInterval(intervalo);
// 		}
// 	};
// 	// setTimeout(saludo, 1000);

// 	// Interval
// 	var intervalo = setInterval(saludo, 2000);

// }())





// **FECHAS
// (function(){
// 	var fecha = new Date();

// 	console.log(fecha.getHours());
// 	console.log(fecha.getMinutes());
// 	console.log(fecha.getSeconds());

// 	console.log(fecha.getDay()); nombre del día
// 	console.log(fecha.getDate()); número del día del mes
// 	console.log(fecha.getMonth()); mes 
// 	console.log(fecha.getFullYear()); año

// 	document.write(fecha);

// }())

