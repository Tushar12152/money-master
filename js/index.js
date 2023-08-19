document.getElementById('calc-btn').addEventListener('click',function(){
     const totalIncome=getInputValue('total-income')

     const foodCost=getInputValue('food');
     const rentCost=getInputValue('rent');
     const clothCost=getInputValue('cloth')
     if(isNaN(totalIncome)||isNaN(foodCost)||isNaN(rentCost)||isNaN(clothCost)){
        alert('plese enter number value')
        return;
     }

     const totalCost=foodCost+rentCost+clothCost;
     const balance= totalIncome-totalCost;

     document.getElementById('total-cost').innerText=totalCost;
     document.getElementById('total-balance').innerText=balance;
})

function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const value=parseFloat(inputField.value);
    inputField.value='';
    return value;
}

document.getElementById('save-button').addEventListener('click',function(){
    const savePercent=getInputValue('save');
    const totalIncome=getInputValue('total-income');
   


    const foodCost=getInputValue('food');
    const rentCost=getInputValue('rent');
    const clothCost=getInputValue('cloth')
   
    const totalCost=foodCost+rentCost+clothCost;
    const balance= totalIncome-totalCost;
    
    const savingAmmount=(totalIncome*savePercent)/100;
    const remainingBalance=balance-savingAmmount;

    document.getElementById('saving-ammount').innerText=savingAmmount;
    document.getElementById('remain-balance').innerText=remainingBalance;




})