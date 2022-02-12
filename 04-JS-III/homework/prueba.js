function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for (let i = 0; i < 10; i++) {
    suma += 2;
    if (suma == i) break;
    else array.push(suma);
  }
  if (i < 9) return "Se interrumpió la ejecución";
  else return array;
}
