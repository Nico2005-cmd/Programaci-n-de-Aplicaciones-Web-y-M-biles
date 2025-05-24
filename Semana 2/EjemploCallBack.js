// Ejemplo de CALLBACK
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedir() {
  console.log("Adiós");
}

saludar("Luis", despedir);