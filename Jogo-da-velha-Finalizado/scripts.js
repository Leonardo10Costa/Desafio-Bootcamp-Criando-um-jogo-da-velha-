let jogador = null;
let vencedor = null;
let jogadorselecionado = document.getElementById("Jogador");
let vencedorselecionado = document.getElementById("Vencedor");

let quadrados = document.getElementsByClassName("quadrado");


mudarjogador("X");

function escolherquadrado(id){
	let quadrado = document.getElementById(id);
	if (vencedor !== null){
		return;
	}

	if (quadrado.innerHTML !== "-"){
		return;
	}


	quadrado.innerHTML = jogador;
	quadrado.style.color = "#000";
	if (jogador === "X"){
		jogador = "0";
	}else{
		jogador = "X";
	}
	mudarjogador(jogador);
	checavencedor ();
}
function mudarjogador(valor) {
	jogador = valor;
	Jogador.innerHTML = jogador;
}
function checavencedor(){
	let quad1 = document.getElementById("1");
	let quad2 = document.getElementById("2");
	let quad3 = document.getElementById("3");
	let quad4 = document.getElementById("4");
	let quad5 = document.getElementById("5");
	let quad6 = document.getElementById("6");
	let quad7 = document.getElementById("7");
	let quad8 = document.getElementById("8");
	let quad9 = document.getElementById("9");

	if (quad1.innerHTML !== "-" && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
		quad1.style.background = "#0f0";
		quad2.style.background = "#0f0";
		quad3.style.background = "#0f0";
		mudarvencedor (quad1);
		return;
	}
	if (quad4.innerHTML !== "-" && quad4.innerHTML === quad5.innerHTML && quad5.innerHTML === quad6.innerHTML){
		quad4.style.background = "#0f0";
		quad5.style.background = "#0f0";
		quad6.style.background = "#0f0";
		mudarvencedor (quad4);
		return;
	}
	if (quad7.innerHTML !== "-" && quad7.innerHTML === quad8.innerHTML && quad8.innerHTML === quad9.innerHTML){
		quad7.style.background = "#0f0";
		quad8.style.background = "#0f0";
		quad9.style.background = "#0f0";
		mudarvencedor (quad7);
		return;
	}
	if (quad1.innerHTML !== "-" && quad1.innerHTML === quad4.innerHTML && quad4.innerHTML === quad7.innerHTML){
		quad1.style.background = "#0f0";
		quad4.style.background = "#0f0";
		quad7.style.background = "#0f0";
		mudarvencedor (quad1);
		return;
	}
	if (quad2.innerHTML !== "-" && quad2.innerHTML === quad5.innerHTML && quad5.innerHTML === quad8.innerHTML){
		quad2.style.background = "#0f0";
		quad5.style.background = "#0f0";
		quad8.style.background = "#0f0";
		mudarvencedor (quad2);
		return;
	}
	if (quad3.innerHTML !== "-" && quad3.innerHTML === quad6.innerHTML && quad6.innerHTML === quad9.innerHTML){
		quad3.style.background = "#0f0";
		quad6.style.background = "#0f0";
		quad9.style.background = "#0f0";
		mudarvencedor (quad3);
		return;
	}
	if (quad1.innerHTML !== "-" && quad1.innerHTML === quad5.innerHTML && quad5.innerHTML === quad9.innerHTML){
		quad1.style.background = "#0f0";
		quad5.style.background = "#0f0";
		quad9.style.background = "#0f0";
		mudarvencedor (quad1);
		return;
	}
	if (quad3.innerHTML !== "-" && quad3.innerHTML === quad5.innerHTML && quad5.innerHTML === quad7.innerHTML){
		quad3.style.background = "#0f0";
		quad5.style.background = "#0f0";
		quad7.style.background = "#0f0";
		mudarvencedor (quad3);
		return;
	}

}
function mudarvencedor (quadrado){
	vencedor = quadrado.innerHTML;
	vencedorselecionado.innerHTML = vencedor;

}
function reiniciar (){
		
		vencedor = null;
		vencedorselecionado.innerHTML = "";
		
	for (var i = 1; i <= 9; i++){
		let limpar = document.getElementById(i);
		limpar.style.background = "#eee";
		limpar.style.color = "#eee";
		limpar.innerHTML = "-";
	}
	mudarjogador ("X");
}
