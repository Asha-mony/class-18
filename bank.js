function getInputValue(inputFieldID) {

    const inputField = document.getElementById(inputFieldID)
    const inputFieldstring = inputField.value;
    // console.log(inputFieldstring);
    const inputFieldNumber = parseInt(inputFieldstring);
    // console.log(inputFieldNumber);
    inputField.value = ' ';
    return inputFieldNumber;

}

function getInnerText(textFieldID) {
    const textField = document.getElementById(textFieldID)
    const textFieldTotalNumber = parseInt(textField.innerText);
    return textFieldTotalNumber;

} 

 document.getElementById('btn-deposite').addEventListener('click', function() {
    // get input value
    const depositeFieldValue = getInputValue('deposite-field');

    // get innertext value
    const getInnerTextValue = getInnerText('deposite-total')

    // add input value and innertext
    const totalValue = depositeFieldValue + getInnerTextValue;

    // get the text field
    const innerTextField = document.getElementById('deposite-total')

    // set the value
    innerTextField.innerText = totalValue;

    const balanceValue = getInnerText('balance-total')
    const totalBalance = balanceValue + depositeFieldValue;

    const balanceField = document.getElementById('balance-total')
    balanceField.innerText = totalBalance;
    
})


 document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawFieldValue = getInputValue('withdraw-field');
    // console.log(withdrawFieldValue);


     // get innertext value
     const getInnerTextValue = getInnerText('withdraw-total')

     // add input value and innertext
     const totalValue = withdrawFieldValue + getInnerTextValue;
 
     // get the text field
     const innerTextField = document.getElementById('withdraw-total')
 
     // set the value
     innerTextField.innerText = totalValue;

     const balanceValue = getInnerText('balance-total')
     const totalBalance = balanceValue - withdrawFieldValue;
 
     const balanceField = document.getElementById('balance-total')
     balanceField.innerText = totalBalance;
     
})
























  // let depositeBtn = document.getElementById('btn-deposite');

// depositeBtn.addEventListener('click', function(){

//     console.log("Deposite button Clicked");
//     let depositeField = document.getElementById('deposite-field');
//     let depositeFieldstring = depositeField.value;
//     console.log(depositeFieldstring);
//     depositeField.value = ""

//     if (depositeFieldstring > 0){
//         let depositeTotal = document.getElementById('deposite-total');
//     let previousdepositeTotalString = depositeTotal.innerText  
//     let newDepositeTotal = parseInt(previousdepositeTotalString) + parseInt(depositeFieldstring);
//     console.log(newDepositeTotal);
//     // typeof- I couldn't underestand
//     depositeTotal.innerText = newDepositeTotal;



//     let balanceTotal = document.getElementById('balance-total');
//     let previousBalanceTotalString = balanceTotal.innerText;
//     let newBalanceTotal = parseInt(previousBalanceTotalString) + parseInt(depositeFieldstring);
//     balanceTotal.innerText = newBalanceTotal;
//     console.log(newBalanceTotal);


//     }

//    else{
//     alert('Enter Positive Amount')
//    }
    
// });