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
      url: "https://imdb-api.com/en/API/SearchTitle/k_uc3lp775/" + inputVal,
      method: 'GET',
    }).then(function(response) {
      console.log(response.results);
      console.log(response);
      if (response.results) {
        Array(0) > 1,
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



// k_uc3lp775

// search();