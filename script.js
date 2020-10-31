let userBudget = 0; 
let totalBudget = 0; 
let totalBill = 0;
let budget = 0;
let appleQuantity = 0; 
let applePrice = 50;
let mangoQuantity = 0; 
let mangoPrice = 60;
let grapesQuantity = 0; 
let grapesPrice = 100;

function showPrice() {
    userBudget = parseInt(document.querySelector('#user_budget').value);
    totalBudget = userBudget;
    document.querySelector('#totalBudget').innerHTML = totalBudget;
}

function appleInc() {
    if(totalBill <= budget) {
        budget = userBudget;
        document.querySelector('#apple_quantity').innerHTML = ++appleQuantity;
        totalBill = appleQuantity * applePrice;
        document.querySelector('#totalBill').innerHTML = totalBill;
        budget = budget - applePrice;
        document.querySelector('#remainBill').innerHTML = userBudget - totalBill;
} else {
    alert('Oooopss! You have Insufficent Budget')
}
}

function appleDec() {
    if(appleQuantity <= 0) {
        alert('Alassss! Please Enter The Quantity Of Apples')
} else {
    budget = userBudget;
    document.querySelector('#apple_quantity').innerHTML = --appleQuantity;
    totalBill = appleQuantity * applePrice;
    document.querySelector('#totalBill').innerHTML = totalBill;
    budget = budget + applePrice;
    document.querySelector('#remainBill').innerHTML = userBudget - totalBill;
}
}

function mangoInc() {
    if(totalBill <= budget) {
        budget = userBudget;
        document.querySelector('#mango_quantity').innerHTML = ++mangoQuantity;
        totalBill = mangoQuantity * mangoPrice;
        document.querySelector('#totalBill').innerHTML = totalBill;
        budget = budget - mangoPrice;
        document.querySelector('#remainBill').innerHTML = userBudget - totalBill;
} else {
    alert('Oooopss! You have Insufficent Budget')
}
}

function mangoDec() {
    if(mangoQuantity <= 0) {
        alert('Alassss! Please Enter The Quantity Of Mangoes')
} else {
    budget = userBudget;
    document.querySelector('#mango_quantity').innerHTML = --mangoQuantity;
    totalBill = mangoQuantity * mangoPrice;
    document.querySelector('#totalBill').innerHTML = totalBill;
    budget = budget + mangoPrice;
    document.querySelector('#remainBill').innerHTML = userBudget - totalBill;
}
}

function grapesInc() {
    if(totalBill <= budget) {
        budget = userBudget;
        document.querySelector('#grapes_quantity').innerHTML = ++grapesQuantity;
        totalBill = grapesQuantity * grapesPrice;
        document.querySelector('#totalBill').innerHTML = totalBill;
        budget = budget - grapesPrice;
        document.querySelector('#remainBill').innerHTML = userBudget - totalBill;
} else {
    alert('Oooopss! You have Insufficent Budget')
}
}

function grapesDec() {
    if(grapesQuantity <= 0) {
        alert('Alassss! Please Enter The Quantity Of Grapes')
} else {
    budget = userBudget;
    document.querySelector('#grapes_quantity').innerHTML = --grapesQuantity;
    totalBill = grapesQuantity * grapesPrice;
    document.querySelector('#totalBill').innerHTML = totalBill;
    budget = budget + grapesPrice;
    document.querySelector('#remainBill').innerHTML = userBudget - totalBill;
}
}