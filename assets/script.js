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

//Update Total
function updateTotal(){
        if(total >= 0)
         document.getElementById('qty-total').textContent = gb + cc + sugar;
         console.log('Total was updated')
}

// Add Gingerbread
document.getElementById('add-gb').addEventListener('click', function() {addGB()})
function addGB(){
        gb++;
         document.getElementById('qty-gb').textContent = gb;
         updateTotal()
         console.log('Gingerbread+ was clicked')
}
// Subtract Gingerbread
document.getElementById('minus-gb').addEventListener('click', function() {minusGB()})
function minusGB(){
        if(gb >= 1){
        gb--;
         document.getElementById('qty-gb').textContent = gb;
         updateTotal()
         console.log('Gingerbread- was clicked')}
}
// Add Chocolate Chip
document.getElementById('add-cc').addEventListener('click', function() {addCC()})
function addCC(){
        cc++;
         document.getElementById('qty-cc').textContent = cc;
         updateTotal()
         console.log('Chocolate Chip+ was clicked')
}
// Subtact Chocolate Chip
document.getElementById('minus-cc').addEventListener('click', function() {minusCC()})
function minusCC(){
        if(cc >= 1){
        cc--;
         document.getElementById('qty-cc').textContent = cc;
         updateTotal()
         console.log('Chocolate Chip- was clicked')}
}
// Add Sugar Sprinkle
document.getElementById('add-sugar').addEventListener('click', function() {addSugar()})
function addSugar(){
        sugar++;
        document.getElementById('qty-sugar').textContent = sugar;
        updateTotal() 
        console.log('Sugar Sprinkle- was clicked')
}
// Subtract Sugar Sprinkle
document.getElementById('minus-sugar').addEventListener('click', function() {minusSugar()})
function minusSugar(){
        if(sugar >= 1){
        sugar--;
         document.getElementById('qty-sugar').textContent = sugar; 
         updateTotal()
         console.log('Sugar Sprinkle- was clicked')}
}
