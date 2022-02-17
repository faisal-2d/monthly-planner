// get any input value 
function getValue(inputField){    
    const inputText = document.getElementById(inputField).value;
    
    if(inputText == '' || inputText < 0 || isNaN(inputText)){
       return warining();
    }
    const inputValue = parseFloat(inputText);
    return inputValue;
}         
       

// get total expences
function getTotalExpences(){
    const totalCost = getValue('food-input') + getValue('rent-input') + getValue('clothes-input');
    return totalCost;
}

// inner text update 
function updateInnerText(textFiled, newText){
    document.getElementById(textFiled).innerText = newText.toFixed(2);
}

// calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncome = getValue('income-input');
    const totalCost = getTotalExpences();
    
    const balance = totalIncome - totalCost;
    if(balance>=0){
        updateInnerText('total-expences', totalCost);
        updateInnerText('balance', balance);
    }
    else{
        warining();
    }  

       
});

// saving parcentage calculation
function calculateSaving(number){
    const totalSaving = getValue('income-input')*(number/100);
    return totalSaving;
}


// saving button
document.getElementById('save-btn').addEventListener('click', function(){
    const saving = getValue('save-input');
    const totalSavingAmount = calculateSaving(saving);

    const netBalance = getValue('income-input') - getTotalExpences();
    const remainingBalance = netBalance - totalSavingAmount;
    
    if(netBalance>0 && remainingBalance>0){
        updateInnerText('saving-amount', totalSavingAmount);
        updateInnerText('remaining-balance', remainingBalance);  
    }
    else {
        warining2();
    }  
});

// input validity 
function warining(){
    document.getElementById('alert').style.display = 'block';
}
function warining2(){
    document.getElementById('alert').style.display = 'block';
    document.getElementById('alert').style.innerText = 'You have spent all!';
}

