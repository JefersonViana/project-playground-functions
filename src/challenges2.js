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
function triangleCheck(lineA, lineB, lineC) {
  let positivo = lineB - lineC;
  let positivo1 = lineA - lineC;
  let positivo2 = lineA - lineB;
  if (lineA > lineB + lineC) {
    return false;
  } else if (positivo < 0) {
    positivo = (lineB - lineC) * -1;
    if (positivo > lineA) {
      return false;
    } else if (lineA < lineB + lineC && lineA > positivo) {
      return true;
    }
  } else if (lineB > lineA + lineC) {
    return false;
  } else if (positivo1 < 0) {
    positivo1 = (lineA - lineC) * -1;
    if (positivo1 > lineB) {
      return false;
    } else if (lineB < lineA + lineC && lineB > positivo1) {
      return true;
    }
  } else if (lineC > lineA + lineB) {
    return false;
  } else if (positivo2 < 0) {
    positivo2 = (lineA - lineB) * -1;
    if (positivo2 > lineC) {
      return false;
    } else if (lineC < lineA + lineB && lineC > positivo2) {
      return true;
    }
  }
}
console.log(triangleCheck(16, 20, 30));
// Desafio 13 - Crie a função hydrate
function hydrate(string) {
  let regexep = /\d+/g;
  let numberList = string.match(regexep);
  let quantidadeCopos = 0;

  for (let index = 0; index < numberList.length; index += 1) {
    quantidadeCopos += parseInt(numberList[index], 10);
  }
  if (quantidadeCopos === 1) return `${quantidadeCopos} copo de água`;
  return `${quantidadeCopos} copos de água`;
}

console.log(hydrate('10 cachaça'));
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
