let count1 = 0;
let countEl1 = document.getElementById("score-home");
countEl1.textContent = 0;
let countEl2 = document.getElementById("score-guest");
countEl2.textContent = 0;

function sum1home(){
    count1 += 1;
    countEl1.textContent = count1;
}

function sum2home(){
    count1 += 2;
    countEl1.textContent = count1;
}

function sum3home(){
    count1 += 3;
    countEl1.textContent = count1;
}

let count2 = 0;
function sum4guest(){
    count2 += 1;
    countEl2.textContent = count2;
}

function sum5guest(){
    count2 += 2;
    countEl2.textContent = count2;
}

function sum6guest(){
    count2 += 3;
    countEl2.textContent = count2;
}

function reset(){
    count1 = 0;
    count2 = 0;
    countEl1.textContent = count1;
    countEl2.textContent = count2;
}