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

async function displayMovie() {

//fetching movie details
  var queryURL = "https://imdb-api.com/en/API/SearchTitle/k_uc3lp775/" + movieTitle + " "

  var response = await $.ajax({
    url: queryURL,
    method: "GET"
  })
  console.log(response);

//fetching movie posters command
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
 
fetch("https://imdb-api.com/en/API/Title/k_uc3lp775" + movieTitle + " ", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



// k_uc3lp775