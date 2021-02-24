let calcScreen = document.getElementById("screen");
document.getElementById("calculator").addEventListener("click", (event) => {
    let getText = event.target.innerText;
    if (getText === "DEL") {
        let calcScreenValue = (calcScreen.value).split('');
        let calcScreenDelete = calcScreenValue.pop();//removing the last element
        let calcScreenJoin = calcScreenValue.join('');
        calcScreen.value = calcScreenJoin;
    }
    else if(getText === "C"){
        calcScreen.value = '';
    }
    else if(getText === "="){
        let result = eval(calcScreen.value);
        calcScreen.value = result;
        console.log(result);
    }
    else {
        calcScreen.value = calcScreen.value + getText;
    }

})