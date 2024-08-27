// Función de encriptación
function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// Función de desencriptación
function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

// "Encriptacion"
document.getElementById("encriptarBtn").addEventListener("click", function () {
  let textoOriginal = document.getElementById("textoEntrada").value;
  let textoEncriptado = encriptar(textoOriginal);
  mostrarResultado(textoEncriptado);
});

// "Desencriptacion"
document
  .getElementById("desencriptarBtn")
  .addEventListener("click", function () {
    let textoEncriptado = document.getElementById("textoEntrada").value;
    let textoDesencriptado = desencriptar(textoEncriptado);
    mostrarResultado(textoDesencriptado);
  });

// Función para mostrar el resultado en pantalla y aplicar estilos, hecho con propiedad .style :)
function mostrarResultado(texto) {
  let resultadoElement = document.getElementById("resultadoEncriptado");
  resultadoElement.textContent = texto;
  resultadoElement.style.color = "blue";
  resultadoElement.style.fontSize = "20px";
  resultadoElement.style.backgroundColor = "#f0f0f0";
  resultadoElement.style.border = "2px solid blue";
  resultadoElement.style.padding = "15px";
  resultadoElement.style.borderRadius = "8px";
}
