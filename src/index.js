// JavaScript Document

function ejercicio1() {
	/*Escriba un programa en JS que reciba un número entero N e imprima todos los números primos desde 1 hasta N.
	  Un número primo es aquel que solo es divisible por el mismo y por el número 1.*/
	
	let N = parseInt(window.prompt("1. Escriba un programa en JS que reciba un número entero N e imprima todos los números primos desde 1 hasta N. Un número primo es aquel que solo es divisible por el mismo y por el número 1.\n\n" +
		"Digite N: (1500 máximo recomendado)"));
	let cont = 0;
	let cont2 = 0;
	
	document.write("N = " + N + "<br>");
	document.write("Números primos de 1 hasta N: <br>");
	
	for (let i = 2; i <= N; i++) {
		let contador = 2;
		let primo = true;
		
		while ((primo) && (contador!=i)) {
			if (i % contador == 0) {
				primo = false;
			}
			contador++;
		}
		
		if (primo) {
			document.write("|"+i+"|");
			cont++;
		}
		
		if (cont == 29 && cont2 == 0) {
			document.write("<br>");
			cont = 0;
			cont2++;
		}
		
		if (cont == 23 && (cont2 > 0 && cont2 < 7)) {
			document.write("<br>");
			cont = 0;
			cont2++;
		}
	
		if (cont == 19 && (cont2 > 6 && cont2 < 15)) {
			document.write("<br>");
			cont = 0;
			cont2++;
		}
	}
}

function ejercicio2() {
	/*Dado un número N, imprima la sumatoria:
	Sumatoria = 1^N + 2^N + 3^N + 4^N + ... + N^N*/
	
	let N = parseInt(window.prompt("Dado un número N, imprima la sumatoria: Sumatoria = 1^N + 2^N + 3^N + 4^N + ... + N^N\n\n"
		+ "Digite el número N: "));
	let sum = 0;
	
	for (let i = 1; i<=N; i++) {
		sum = sum + (Math.pow(i,N));
	}
	
	document.write("N = " + N + "<br>");
	
	document.write("sum = " + sum);
	
}

function ejercicio3() {
	//Dado un número N, imprima la serie de Fibonacci (N términos)
	
	let N = parseInt(window.prompt("Dado un número N, imprima la serie de Fibonacci (N términos)\n\n"
		+ "Digite el número N: (95 máximo recomendado)"));
	let fibonacci = [0,1];
	
	document.write("N = " + N + "<br>Serie de Fibonacci:<br>");
	
	document.write("0, 1");
	
	for (let i = 2; i<=N; i++) {
		fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
		document.write(", " + fibonacci[i]);
	}
	
}