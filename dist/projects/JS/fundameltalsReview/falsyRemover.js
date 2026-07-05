function bouncer(arr) {
  return arr.filter(x => 
    x !== false &&
    x !== 0 &&
    x !== "" &&
    x !== null &&
    x !== undefined &&
    !Number.isNaN(x)
  );
}

/*
function bouncer(arr) {
  return arr.filter(x => !!x);
}



function bouncer(arr) {
  return arr.filter(Boolean);
}
*/