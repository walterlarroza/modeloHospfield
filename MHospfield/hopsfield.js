// funcion para calcular los pesos
function calcularPesosSinapticos(imagenes) {
  const numUnidades = imagenes[0].length;
  const pesosSinapticos = Array(numUnidades)
    .fill(0)
    .map(() => Array(numUnidades).fill(0));

  for (let i = 0; i < numUnidades; i++) {
    for (let j = 0; j < numUnidades; j++) {
      if (i !== j) {
        for (let k = 0; k < imagenes.length; k++) {
          pesosSinapticos[i][j] += imagenes[k][i] * imagenes[k][j];
        }
        pesosSinapticos[i][j] /= numUnidades;
      }
    }
  }

  return pesosSinapticos;
}

// recuperar una imagen a partir de los pesos sinapticos
function recuperarImagen(pesosSinapticos, imagenInicial) {
  const numUnidades = imagenInicial.length;
  const nuevaImagen = Array(numUnidades).fill(0);

  for (let i = 0; i < numUnidades; i++) {
    for (let j = 0; j < numUnidades; j++) {
      nuevaImagen[i] += pesosSinapticos[i][j] * imagenInicial[j];
    }
    // si la suma acumulda es mayor o igual a 0 se establece en 1
    // de lo contrario en -1
    nuevaImagen[i] = nuevaImagen[i] >= 0 ? 1 : -1;
  }

  return nuevaImagen;
}

// por ejemplo
// entiendo que el peso es un numero
const imagenes = [
  [1, -1, 1, -1], 
  [-1, 1, -1, 1], 
  [1, 1, 1, 1],   
];

const pesosSinapticos = calcularPesosSinapticos(imagenes);

const imagenPosicionActual = [-1, 1, -1, 1];
// posicionamiento corregido
const imagenCorregida = recuperarImagen(pesosSinapticos, imagenPosicionActual);

console.log(imagenCorregida); // Imprime la imagen
