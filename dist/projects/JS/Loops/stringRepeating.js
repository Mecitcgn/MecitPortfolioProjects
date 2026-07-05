function repeatStringNumTimes(str, num){
  let fullSentence = "";
  if(num <= 0){
    return "";
  }
  for(let i = 0; i < num; i++){
    fullSentence += str;
  }
  return fullSentence;
}

console.log(repeatStringNumTimes("abc", 4));
