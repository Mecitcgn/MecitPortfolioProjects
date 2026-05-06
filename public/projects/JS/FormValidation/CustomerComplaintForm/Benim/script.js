const complaintsGroup = document.querySelector("#complaints-group");
const checkboxes = [...complaintsGroup.querySelectorAll("input[type='checkbox']")];

const solutionsGroup = document.querySelector("#solutions-group");
const radioButtons = [...solutionsGroup.querySelectorAll("input[type='radio']")];

const submitButton = document.querySelector("#submit-btn");

const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const orderNoInput = document.querySelector("#order-no");
const productCodeInput = document.querySelector("#product-code");
const quantityInput = document.querySelector("#quantity");
const complaintDescInput = document.querySelector("#complaint-description");
const solutionDescInput = document.querySelector("#solution-description");

function validateForm() {
  const result = {
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  };

  // full-name not empty
  result["full-name"] = fullNameInput.value.trim() !== "";
  fullNameInput.style.border = result["full-name"] ? "2px solid green" : "2px solid red";

  // email validation
  result["email"] = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  emailInput.style.border = result["email"] ? "2px solid green" : "2px solid red";

  // order-no validation: 2024########
  result["order-no"] = /^2024\d{6}$/.test(orderNoInput.value);
  orderNoInput.style.border = result["order-no"] ? "2px solid green" : "2px solid red";

  // product-code: XX##-X###-XX#
  result["product-code"] = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCodeInput.value);
  productCodeInput.style.border = result["product-code"] ? "2px solid green" : "2px solid red";

  // quantity positive integer
  result["quantity"] = /^[1-9]\d*$/.test(quantityInput.value);
  quantityInput.style.border = result["quantity"] ? "2px solid green" : "2px solid red";

  // complaints-group
  result["complaints-group"] = checkboxes.some(cb => cb.checked);
  complaintsGroup.style.border = result["complaints-group"] ? "2px solid green" : "2px solid red";

  // complaint-description if "Other" checked
  const otherComplaintChecked = document.querySelector("#other-complaint")?.checked;
  if(otherComplaintChecked){
    result["complaint-description"] = complaintDescInput.value.trim().length >= 20;
    complaintDescInput.style.border = result["complaint-description"] ? "2px solid green" : "2px solid red";
  } else {
    result["complaint-description"] = true; // not required if Other not checked
    complaintDescInput.style.border = "";
  }

  // solutions-group
  result["solutions-group"] = radioButtons.some(rb => rb.checked);
  solutionsGroup.style.border = result["solutions-group"] ? "2px solid green" : "2px solid red";

  // solution-description if "Other" radio checked
  const otherSolutionChecked = document.querySelector("#other-solution")?.checked;
  if(otherSolutionChecked){
    result["solution-description"] = solutionDescInput.value.trim().length >= 20;
    solutionDescInput.style.border = result["solution-description"] ? "2px solid green" : "2px solid red";
  } else {
    result["solution-description"] = true;
    solutionDescInput.style.border = "";
  }

  return result;
}

function isValid(validateObject) {
  return Object.values(validateObject).every(v => v === true);
}

[fullNameInput, emailInput, orderNoInput, productCodeInput, quantityInput, complaintDescInput, solutionDescInput, ...checkboxes, ...radioButtons].forEach(item => {
  item.addEventListener("change", validateForm);
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const result = validateForm();
  const valid = isValid(result);

  if (!valid) {
    console.log("Form geçersiz");
  } else {
    console.log("Form başarılı");
  }
});