var contador = 0 ;

function adicionar() {
    contador++;
    document.getElementById("contador").innerText = contador;
}

function reduzir() {
    contador--;
    document.getElementById("contador").innerText = contador;
}