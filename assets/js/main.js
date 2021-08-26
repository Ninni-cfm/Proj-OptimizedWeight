//****************************************************************************
// define some constant variables for easier access on the UI
const lblBodySize = document.getElementById("lblBodySize");
const numBodySize = document.getElementById("numBodySize");
const lblAge = document.getElementById("lblAge");
const numAge = document.getElementById("numAge");
const rbBodyType = document.getElementById("rbBodyType");
const result = document.getElementById("result");

//****************************************************************************
// function calculateIdealWeight(), called by the "Calc" button
function calculateIdealWeight() {

    // get the body size 
    let bodySize = Number(numBodySize.value);

    // get the age
    let age = Number(numAge.value);

    // show possible faulty inputs
    lblBodySize.classList = (bodySize <= 0 ? "error" : "");
    lblAge.classList = (age <= 0 ? "error" : "");

    // no body size no weight calculation...
    if (bodySize <= 0) {
        numBodySize.focus();
        return;
    }

    // or just in case the user "forgot" to give his/her age ;-)
    if (age <= 0) {
        numAge.focus();
        return;
    }

    // Calculate the ideal weight according to these formulas:
    // Formula for people with a slim build:
    // ( ( body height in cm - 100 ) + ( age / 10 ) ) * 0.9 * 0.9
    // Formula for people with a broad build:
    // ( ( body height in cm - 100 ) + ( age / 10 ) ) * 0.9 * 1.1

    // get the body type
    // because the formulas for both body types only differ in the last
    // factor put it into a variable and use it for the calculation
    let bodyType = rbBodyType.checked ? 1.1 : 0.9;

    // do the calculation and show the result
    let idealWeight = ((bodySize - 100) + (age / 10)) * 0.9 * bodyType;
    result.innerHTML = `Dein Idealgewicht ist ${idealWeight.toFixed(1)} kg.`
}
