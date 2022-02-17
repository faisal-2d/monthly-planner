function warining(){
    document.getElementById('alert').style.display = 'block';
}

// get any input value 
function getValue(inputField){  
    console.log('it is:' + typeof(inputField));   
    const inputText = document.getElementById(inputField).value;
    
    if(inputText == ''){
        console.log('empty');
        warining();
    }

    const inputValue = parseFloat(inputText); 

    console.log('it is also: ' + typeof(inputValue));

    return inputValue;

}         
       

// get total expences
function getTotalExpences(){
    const totalCost = getValue('food-input') + getValue('rent-input') + getValue('clothes-input');
    return totalCost;
}

// inner text update 
function updateInnerText(textFiled, newText){
    document.getElementById(textFiled).innerText = newText;
}

// calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncome = getValue('income-input');
    const totalCost = getTotalExpences();
    
    const balance = totalIncome - totalCost;

    updateInnerText('total-expences', totalCost);
    updateInnerText('balance', balance);

       
});

// saving parcentage calculation
function calculateSaving(number){
    const totalSaving = Math.round(getValue('income-input')*(number/100));
    return totalSaving;

}


// saving button
document.getElementById('save-btn').addEventListener('click', function(){
    const saving = getValue('save-input');
    const totalSavingAmount = calculateSaving(saving);

    const remainingBalance = getValue('income-input') - getTotalExpences() - totalSavingAmount;

    updateInnerText('saving-amount', totalSavingAmount);
    updateInnerText('remaining-balance', remainingBalance);    
});

// input validity 

