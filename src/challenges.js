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
  let higherNumber = params[0];
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

console.log(highestCount([-2, -2, -1]));
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea (base, height) {
  return (base * height) / 2;
}

console.log(calcTriangleArea(10, 50));

function calcRectangleArea(base, height) {
  return base * height;
}

console.log(calcRectangleArea(10, 50));

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}

console.log(calcAllAreas(10, 50, 'retângulo'));
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  let result1 = 0;
  let result2 = 0;

  if (cat1 === cat2) {
    return 'Os gatos trombam e o rato foge';
  } else if (cat1 > mouse && mouse > cat2) {
    result1 = cat1 - mouse;
    result2 = mouse - cat2;
    if (result1 < result2) {
      return 'cat1';
    } else if (result1 === result2) {
      return 'Os gatos trombam e o rato foge';
    } else {
      return 'cat2';
    }
  } else if (cat2 > mouse && mouse > cat1) {
    result1 = mouse - cat1;
    result2 = cat2 - mouse;
    if (result2 < result1) {
      return 'cat2';
    } else if (result1 === result2) {
      return 'os gatos trombam e o rato foge';
    } else {
      return 'cat1';
    }
  } else if (mouse > cat1 && cat1 > cat2) {
    return cat1;
  } else if (mouse > cat2 && cat2 > cat1) {
    return cat2;
  } else if (mouse < cat1 && cat1 < cat2) {
    return cat1;
  } else if (mouse < cat2 && cat2 < cat1) {
    return 'cat2';
  }

}

console.log(catAndMouse(0, 3, 2));
// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(param) {
  const array = [];
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] % 3 === 0 && param[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (param[index] % 3 === 0 && param[index] % 5 !== 0) {
      array.push('fizz');
    } else if (param[index] % 5 === 0 && param[index] % 3 !== 0) {
      array.push('buzz');
    } else if (param[index] % 5 !== 0 && param[index] % 3 !== 0) {
      array.push('bug!');
    }
    
  }
  return array;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
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
