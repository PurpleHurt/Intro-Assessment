// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Christina Hurt" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`




// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {addGB()})
    

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

function addGB(){
        document.getElementById('qty-gb').textContent = gb; gb++;
   }


document.getElementById('minus-gb').addEventListener('click', function(e) {minusGB()})
function minusGB(){
           document.getElementById('qty-gb').textContent = gb; gb--;
}

document.getElementById('add-cc').addEventListener('click', function() {addCC()})
function addCC(){
        document.getElementById('qty-cc').textContent = cc; cc++;
}

document.getElementById('minus-cc').addEventListener('click', function() {minusCC()})
function minusCC(){
           document.getElementById('qty-cc').textContent = cc; cc--;
}

document.getElementById('add-sugar').addEventListener('click', function() {addSugar()})
function addSugar(){
        document.getElementById('qty-sugar').textContent = sugar; sugar++;
}

document.getElementById('minus-sugar').addEventListener('click', function() {minusSugar()})
function minusSugar(){
           document.getElementById('qty-sugar').textContent = sugar; sugar--;
}




