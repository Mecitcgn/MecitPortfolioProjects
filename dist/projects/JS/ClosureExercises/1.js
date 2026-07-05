function createCounter(){
  let count = 0;
  function counter(){
    count++;
    return `The Count is: ${count}`;
  }

  return counter;
}

let countElement = createCounter();
countElement();
countElement();
countElement();
countElement();
countElement();
