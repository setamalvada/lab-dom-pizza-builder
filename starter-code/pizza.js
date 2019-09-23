// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: true
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
      
     
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mus){
    if (state.mushrooms) {
      $mus.style.visibility = "visible";
    }
    else {
      $mus.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pepp){
    if (state.greenPeppers) {
      $pepp.style.visibility = "visible";
    }
    else {
      $pepp.style.visibility = "hidden";
    }
  })


}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sau){
    if (state.whiteSauce) {
      $sau.style.visibility = "visible";
    }
    else {
      $sau.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($glu){
    if (state.glutenFreeCrust) {
      $glu.style.visibility = "visible";
      
    }
    else {
      $glu.style.visibility = "hidden";
    }
  })

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //no funciona, me dice undefined
  
  //const element =document.getElementsByClassName("btn")
  
  /*DOMTokenList.prototype.removeMany = function(classes) {
    var array = classes.split(' ');
    for (var i = 0, length = array.length; i < length; i++) {
      this.remove(array[i]);
    }
}*/

document.querySelector("btn").className=document.querySelector("btn").className.split("active").join(" ");

  

  //console.log();
 
  return element;
}
/*

const imageCard = card.parentElement.querySelector(".front");
	  imageCard.removeAttribute("class");
	  imageCard.setAttribute("class", "back");
	  card.removeAttribute("class");
    card.setAttribute("class", "front");


*/ 

function renderPrice() {
  const fixPrice = 10

  /*for(i=0;i<document.querySelectorAll("btn").length;i++){
    fixPrice += document.querySelectorAll("active")
    
  }
  for(i=0;i<ingredients.length;i++){
    fixPrice += ingredients.price;
    console.log(fixPrice)
  }
  */
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //document.getElementById("pepperonniprice").innerHTML=`$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}