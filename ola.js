const readline = require('readline-sync');

function calcularOLA(montoReclamo, topeOLA, porcentajeExcedente) {
  const rebaja = porcentajeExcedente / 100; // Convertir porcentaje a decimal

  if (montoReclamo <= topeOLA) {
    return {
      montoInicial: montoReclamo,
      montoOLA: montoReclamo,
      montoExcedente: 0,
      montoExcedenteConRebaja: 0,
      montoTotal: montoReclamo
    };
  } else {
    const montoExcedente = montoReclamo - topeOLA;
    const montoExcedenteConRebaja = montoExcedente * (1 - rebaja);
    return {
      montoInicial: montoReclamo,
      montoOLA: topeOLA,
      montoExcedente: montoExcedente,
      montoExcedenteConRebaja: montoExcedenteConRebaja,
      montoTotal: topeOLA + montoExcedenteConRebaja
    };
  }
}

function leerNumero(prompt) {
  let numero;
  while (true) {
    const input = readline.question(prompt);
    numero = parseFloat(input.replace(',', '.')); // Reemplazar coma por punto
    if (!isNaN(numero)) {
      break;
    }
    console.log('Ingrese un número valido');
  }
  return numero;
}

function main() {
  const topeOLA = leerNumero('Ingrese el monto de OLA: ');
  const porcentajeExcedente = leerNumero('Ingrese el porcentaje de la quita al excedente (por ejemplo, 20 para 20%): ');
  const montoReclamo = leerNumero('Ingrese el monto total del reclamo: ');
  const resultado = calcularOLA(montoReclamo, topeOLA, porcentajeExcedente);

  console.log(`Monto Inicial: ${resultado.montoInicial.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log(`Monto OLA (tope): ${resultado.montoOLA.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log(`Monto Excedente: ${resultado.montoExcedente.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log(`Monto Excedente con rebaja del ${porcentajeExcedente}%: ${resultado.montoExcedenteConRebaja.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log(`Monto Total: ${resultado.montoTotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
}

main();