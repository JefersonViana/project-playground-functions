// Desafio 1 - Crie a função compareTrue
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));
// Desafio 2 - Crie a função splitSentence
function splitSentence(params) {
  const separacao = params.split(' ');
  return separacao;
}

console.log(splitSentence('go Trybe'));
// Desafio 3 - Crie a função concatName
function concatName(params) {
  const name = [];
  for (let index = 0; index < params.length; index += 1) {
    name.push(params[index]);
  }
  return `${name[name.length - 1]}, ${name[0]}`;
}

console.log(concatName(['captain', 'my', 'captain']));
// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

console.log(footballPoints(14, 8));
// Desafio 5 - Crie a função highestCount
function highestCount(params) {
  let higherNumber = 0;
  let amountOfRep = 0;
  for (let index = 0; index < params.length; index += 1) {
      if (params[index] > higherNumber ) {
        higherNumber = params[index];
      }
  }
  for (let index = 0; index < params.length; index += 1) {
    if (params[index] === higherNumber) {
      amountOfRep += 1;
    }
  }
  return amountOfRep;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
