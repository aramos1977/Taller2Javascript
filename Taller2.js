/*  Definir Tres variables, asignarles un valor y utilizando 
    decisiones imprimir en la consola la que tenga mayor valor.
    Número Mayor */

var n1,n2,n3,t,mayor;
	n1 = parseInt(prompt("Ingrese el Primer Número 1"));
	n2 = parseInt(prompt("Ingrese el Segundo Número 2"));
	n3 = parseInt(prompt("Ingrese el Tercer Número 3"));

	if (n1 > n2) {
		t = n1;
	}else{
		t = n2;
	}

	if (t > n3) {
		mayor = t;
	}else{
		mayor = n3;
	}

	document.write("El Número Mayor es: "+mayor);

	