export function generarNumeroSinRepetir(
  min: number,
  max: number,
  numerosUtilizados: number[],
) {
  let numeroAleatorio;

  do {
    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numerosUtilizados.includes(numeroAleatorio));
  numerosUtilizados.push(numeroAleatorio);

  return numeroAleatorio;
}
