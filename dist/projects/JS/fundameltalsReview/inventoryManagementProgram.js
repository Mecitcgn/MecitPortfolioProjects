/*
let inventory = [];

function findProductIndex(productName){
  let isExisting = inventory.find(item => item.name === productName.toLowerCase());

  for(let i = 0; i < inventory.length; i++){
    if(inventory[i] === isExisting){
      return i;
    }
  }

  return -1;
}

function addProduct(productObject){
  let newKey = productObject.name.toLowerCase();
  productObject.name = newKey;
  let existingProduct = inventory.find(item => item.name === productObject.name);
  if(existingProduct){
    existingProduct.quantity += productObject.quantity;
    console.log(existingProduct.name + " quantity updated");
  }
  else{
    inventory.push(productObject);
    console.log(productObject.name + " added to inventory")
  }
}

function removeProduct(productName, productQuantity){
  let index = findProductIndex(productName);
  if(index === -1){
    console.log(productName.toLowerCase() + " not found");
    return inventory;
  }
  if(inventory[index].quantity > productQuantity){
    inventory[index].quantity -= productQuantity;
    console.log("Remaining " + inventory[index].name.toLowerCase() + " pieces: " + inventory[index].quantity);
  }
  else{
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`)
    inventory.splice(index, 1);
  }
  return inventory;
}
addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "LETTUCE", quantity: 5});
addProduct({name: "LETTUCE", quantity: 5});
addProduct({name: "LETTUCE", quantity: 5});
addProduct({name: "APPLE", quantity: 5});
addProduct({name: "APPLE", quantity: 5});
console.log(findProductIndex("APPLE"));
console.log(removeProduct("LETTUCE", 15));
console.log(findProductIndex("STRA"));
*/