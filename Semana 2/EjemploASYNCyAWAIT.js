// Ejemplo con ASYNC y AWAIT
async function procesar() {
  try {
    let resultado = await obtenerDatos();
    console.log("Procesado:", resultado);
  } catch (error) {
    console.error("Error en procesamiento:", error);
  }
}

procesar();