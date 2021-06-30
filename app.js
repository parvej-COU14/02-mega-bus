// First -Class part

function InputFistCase(isIncrease){
    const firstCase=document.getElementById("valueBtn");
    const firstCaseValue=parseInt(firstCase.value);
    let firstCaseValueNew=firstCaseValue;
    if(isIncrease==true){
        firstCaseValueNew=firstCaseValue+1;
    }
    if(isIncrease==false&&firstCaseValue>0){
        firstCaseValueNew=firstCaseValue-1;
    }
   
    firstCase.value=firstCaseValueNew;
    TotalAmount();
}
// Economic-Class part

function InputEconomicCase(isDecrease){
    const firstCase=document.getElementById("valueBtnEconomic");
    const firstCaseValue=parseInt(firstCase.value);
    let firstCaseValueNew=firstCaseValue;
    if(isDecrease==true){
        firstCaseValueNew=firstCaseValue+1;
    }
    if(isDecrease==false&&firstCaseValue>0){
        firstCaseValueNew=firstCaseValue-1;
    }
   
    firstCase.value=firstCaseValueNew;
    TotalAmount();
}
// Calculation  -Class part

function TotalAmount(){
    const firstClass=document.getElementById("valueBtn");
    const firstClassValue=parseInt(firstClass.value);

    const firstClassEconomic=document.getElementById("valueBtnEconomic");
    const economicCaseValue=parseInt(firstClassEconomic.value);

    const subTotal=firstClassValue*150+economicCaseValue*100;
    document.getElementById("subTotal").innerText=subTotal;
    const taxAmount=subTotal*0.1;
    document.getElementById("tax").innerText=taxAmount;
    const total=subTotal-taxAmount;
    document.getElementById("total").innerText=total;

}

 // booking  -Class part
 
const hideBtn=document.getElementById("bookBtn");
hideBtn.addEventListener('click',function(){
    // const bookhide=document.getElementById("bookForm");
    // bookhide.style.display="none";
    alert("Congratulations for your booking")
   
})