// Ejemplo de PROMESA
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = true;
      if (exito) {
        resolve("Datos recibidos con éxito.");
      } else {
        reject("Hubo un error al obtener los datos.");
      }
    }, 2000);
  });
}

obtenerDatos()
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error(error));
