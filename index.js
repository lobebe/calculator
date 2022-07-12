

let sumAll= document.getElementById('sum-el')


//Add function
function add(){
let num1 = parseFloat(document.getElementById('num1-el').value)
let num2 = parseFloat(document.getElementById('num2-el').value)
let result = num1 + num2
sumAll.innerHTML = "Sum: " + result
}

//Subtract function
function subtract(){
let num1 = parseFloat(document.getElementById('num1-el').value)
let num2 = parseFloat(document.getElementById('num2-el').value)
let result = num1 - num2
sumAll.textContent = "Sum: " + result
}

//Divide function
function divide(){
let num1 = parseFloat(document.getElementById('num1-el').value)
let num2 = parseFloat(document.getElementById('num2-el').value)
let result = num1 / num2
sumAll.textContent = "Sum: " + result
}

//Multiply function
function multiply(){
let num1 = parseFloat(document.getElementById('num1-el').value)
let num2 = parseFloat(document.getElementById('num2-el').value)
let result = num1 * num2
sumAll.textContent = "Sum: " + result
}
