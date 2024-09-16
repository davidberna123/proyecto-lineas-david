alert("Hola soy bernal")
var Cartulina = document.getElementById("Formato")
var Lienzo = Cartulina.getContext("2d")

var BORRAR = document.getElementById("BORRAR")
BORRAR.addEventListener("click", borrareltablero)

var dibujar = document.getElementById("dibujar")
dibujar.addEventListener("click", dibujartodo)

dibujarlineas(0, 0, 300, 0, "red")
dibujarlineas(0, 0, 0, 300, "black")
dibujarlineas(0, 300, 300, 300, "green")
dibujarlineas(300, 300, 300, 0, "blue")

function dibujarlineas(xi, yi, xf, yf, color){
Lienzo.beginPath()
Lienzo.strokeStyle = color
Lienzo.moveTo(xi, yi)
Lienzo.lineTo(xf, yf)
Lienzo.stroke()
Lienzo.closePath()
}

function borrareltablero(){
Lienzo.clearRect(2, 2, 297, 297)
}

function dibujartodo(){
var infiz = document.getElementById("izinf").value
var supiz = document.getElementById("supiz").value
var desup = document.getElementById("supde").value
var infde = document.getElementById("deinf").value

var lineastexto = document.getElementById("lineaspedidas")
var lineasnumero = parseInt(lineastexto.value)
var espacio = 300/lineasnumero

    for(m = 0; m < lineasnumero; m++){
        dibujarlineas(0, m*espacio, espacio + m*espacio, 300, infiz)
        dibujarlineas(0, espacio + m*espacio, 300 - m*espacio, 0, supiz)
        dibujarlineas(300, espacio + m*espacio,  m*espacio, 0, desup)
        dibujarlineas(m*espacio, 300,  300, 300 - espacio - m*espacio, infde)
    }
    
    
}