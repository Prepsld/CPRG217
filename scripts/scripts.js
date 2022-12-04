/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE


let modelName;
let duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        - set the value of the calculated-cost element's innerHTML to this new value
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
*/

// INSERT YOUR CODE HERE

const recalculate = function() {
    let cost;
    if (modelName === 'XYZ') {
        cost = duration * 100;
    } else if (modelName === 'CPRG') {
        cost = duration * 213;
    }
    const costLabel = document.getElementById('calculatedCost');
    costLabel.innerHTML = cost.toFixed(2);
}
//const cost = (modelName === 'XYZ') ? duration * 100 : duration * 213;


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

const changeModel = function() {
    const value = document.getElementById('modelText').innerHTML;
    if (value === 'Model XYZ') {
        modelText.innerHTML = 'Model CPRG';
        modelName = 'CPRG';
    } else {
        modelText.innerHTML = 'Model XYZ';
        modelName = 'XYZ';
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

let button;
const changeDuration = function() {
    const durationValue = durationText.innerHTML;

    const input = prompt('Enter Duration:');
    if (input !== null) {
        duration = parseInt(input);
        durationText.innerHTML = duration;
        recalculate();
    }
}
durationButton.onclick = changeDuration;


/* span elemen */
//https://github.com/Prepsld/CPRG217.git

// Assignment due 9th