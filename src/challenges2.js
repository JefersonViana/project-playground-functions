// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < number.length; index += 1) {
    let recebe = 0;
    if (number[index] < 0 || number[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index1 = 0; index1 < number.length; index1 += 1) {
      if (number[index] === number[index1]) {
        recebe += 1;
        if (recebe === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;
}

console.log(generatePhoneNumber([7, 5, 4, 8, 9, 6, 1, 2, 3, 6, 8]));
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
