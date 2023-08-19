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