function evaluarJuego(){
    var jugadaComputadora= generarJugadaComputadora();

    var mostrarJugadaComputadora= document.getElementById("jugadaComputadora");

    mostrarJugadaComputadora.value=jugadaComputadora;

    var jugadaUsuario= document.getElementById("jugadaUsuario").value;



    var mostrarResultado= document.getElementById("resultado");





    var resultado="";
    if (jugadaComputadora==jugadaUsuario.toUpperCase()) {
        resultado="EMPATE";
    } else {
        if (jugadaComputadora=="PIEDRA" && jugadaUsuario.toUpperCase()=="PAPEL") {
            resultado="GANASTE";
        }
        if (jugadaComputadora=="PIEDRA" && jugadaUsuario.toUpperCase()=="TIJERA") {
            resultado="PERDISTE";
        }
        if (jugadaComputadora=="TIJERA" && jugadaUsuario.toUpperCase()=="PAPEL") {
            resultado="PERDISTE";
        }
        if (jugadaComputadora=="PAPEL" && jugadaUsuario.toUpperCase()=="TIJERA") {
            resultado="GANASTE";
        }
        if (jugadaComputadora=="PAPEL" && jugadaUsuario.toUpperCase()=="PIEDRA") {
            resultado="PERDISTE";
        }
        if (jugadaComputadora=="TIJERA" && jugadaUsuario.toUpperCase()=="PIEDRA") {
            resultado="GANASTE";
        }
    };



    mostrarResultado.value=resultado;
    
    
    console.log(""+resultado);

}
function generarJugadaComputadora() {
    var jugadaComputadora="";
    var azar=Math.floor(Math.random()*3)+1;
    
    if(azar==1){
        jugadaComputadora="PAPEL";
    }
    if(azar==2){
        jugadaComputadora="PIEDRA";
    }
    if(azar==3){
        jugadaComputadora="TIJERA";
    }

    return jugadaComputadora;
}







function resetear() {

    var jugadaComputadora= document.getElementById("jugadaComputadora");
    var jugadaUsuario= document.getElementById("jugadaUsuario");
    var resultado=document.getElementById("resultado");
    jugadaComputadora.value="OCULTA";
    jugadaUsuario.value="";
    resultado.value="¿?";
    
    
    
    
    console.log("limpia");

}