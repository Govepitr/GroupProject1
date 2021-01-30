// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("searchBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Event handler if the user chooses to hit enter instead of clicking
$("#userInput").keypress(function(e){
  if(e.which == 13){
    $("#searchBtn").click();
  }
})

// async function displayMovie() {


// //fetching movie posters command
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };
 
// fetch("https://imdb-api.com/en/API/Title/k_uc3lp775" + movieTitle, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }

function search (userInput) {
  
$.ajax({ 
  url: "https://imdb-api.com/en/API/SearchTitle/k_uc3lp775/" + userInput,
  method: 'GET',
}).then(function(response) {
  console.log(response.results);
  console.log(response);
  if (response.results) {
    Array(0) > 1,
    console.log('Too many results, please be more specific');
  }
});
}


// errorMessage is the error response for the user's input


// function doThis (func) {
//   func()
// }

// function doThat () {
//   return 1
// }

// search("lordoftherings", doThis, doThat)

// k_uc3lp775

search();