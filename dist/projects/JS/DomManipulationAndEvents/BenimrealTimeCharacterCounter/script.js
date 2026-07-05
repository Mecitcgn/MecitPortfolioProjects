const txtArea = document.querySelector('#txtArea');
const countElem = document.querySelector('.count');
const paragraphElem = document.querySelector("p");
txtArea.addEventListener('keydown', () => {
  if(txtArea.value.length === 50){
    paragraphElem.style.color = "red";
  }
  countElem.textContent = txtArea.value.length + "/50";
});
