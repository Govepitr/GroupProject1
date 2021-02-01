
// loadDoc()

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// let btn = document.getElementById("searchBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function userInput(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("userInput").value;
   
    $.ajax({ 
      'url': "https://imdb-api.com/en/API/SearchMovie/k_uc3lp775/" + inputVal,
      'method': 'GET',
      'timeout': 0,
    }).then(function(response) {
      console.log(response);
      

      if (response) {
        [0] > 1,
        console.log('Too many results, please be more specific');
      }
    });    
  
  // Displaying the value
  console.log(inputVal);
}


$("#userInput").keypress(function(e){
  if(e.which == 13){
    $("#searchBtn").click();
  }
})

$(document).ready(function(){
  $('.parallax').parallax();
});

// function d {

// }


// k_uc3lp775

// search();

