function sumAll(arr) {
    let start = arr[0];
    let end = arr[1];
    let sum = 0;
  
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
  
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  }