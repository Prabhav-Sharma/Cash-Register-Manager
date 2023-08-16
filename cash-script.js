const calculateButton = document.querySelector("#button-calculate");
const billInput = document.querySelector("#input-bill");
const cashInput = document.querySelector("#input-cash");
const output2000 = document.querySelector("#output-2000");
const output500 = document.querySelector("#output-500");
const output100 = document.querySelector("#output-100");
const output50 = document.querySelector("#output-50");
const output10 = document.querySelector("#output-10");
const output5 = document.querySelector("#output-5");
const output1 = document.querySelector("#output-1");
const returnStat = document.querySelector("#return-stat")

const notes =(output, amount, currency) => {
    let currentNotes = Math.floor(amount / currency);
    output.innerText = currentNotes;
    return amount - (currentNotes * currency);
}

const divideAmount=() => {
    let billAmount = Number(billInput.value);
    let cashAmount = Number(cashInput.value);
    if(Math.sign(billAmount) === -1 || Math.sign(cashAmount) === -1){
        returnStat.innerText =`Not how the world works! Only positive figures!`;
    }else if(billAmount === 0){
        returnStat.innerText =`Seems like there is no bill to pay!`;
    }
     else if(cashAmount<billAmount){
        returnStat.innerText = `C'mon dude, this ain't funny. Pay up!`;
    }else{
    let returnAmount = cashAmount - billAmount;
    returnStat.innerText = `Amount to be returned: ₹ ${returnAmount}`;
    notes(output1, notes(output5, notes(output10, notes(output50, notes(output100, notes(output500, notes(output2000, returnAmount, 2000), 500), 100), 50), 10), 5), 1);
}

calculateButton.addEventListener("click", divideAmount);
