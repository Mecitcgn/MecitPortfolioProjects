/*
function pyramid(pattern, numRow, booleanVal){
  let lastString = "\n";
  if(!booleanVal){
    for(let i = 1; i <= numRow; i++){
      const space = numRow - i;
      const patternCount = i * 2 - 1;
      lastString += " ".repeat(space) + pattern.repeat(patternCount) + "\n";
    }
  }
  else{
    for(let i = numRow; i >= 1; i--){
      const space = numRow - i;
      const patternCount = i *  2 - 1;
      lastString += " ".repeat(space) + pattern.repeat(patternCount) + "\n";
    }
  }
  return lastString;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
*/
