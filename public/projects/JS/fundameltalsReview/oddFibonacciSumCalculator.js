// ODD Fibonacci Sum

function sumFibs(num) {
	let prev = 0;
	let cur = 1;
	let sum = 0;

	while (num >= cur) {
		if (cur % 2 !== 0) {
			sum += cur;
		}
		const next = prev + cur;
		prev = cur;
		cur = next;
	}

	return sum;
}

sumFibs(2000);

/*
function sumFibs(num){
  let prev = 0;
  let cur = 1;
  let sum = 1;

  while(cur <= num){
    let next = prev + cur;
    prev = cur;
    cur = next;
    if(cur > num) break;
    if(cur % 2 !== 0) sum += cur;
  }

  return sum;
}

console.log(sumFibs(1000));
*/
