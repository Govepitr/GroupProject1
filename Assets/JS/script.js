//The function that provided the click button life and purpose
$("#searchBtn").on("click", function(event){
  event.preventDefault();

  moviename = $("#userInput").val().trim();
  if(moviename === ""){
    alert("Please enter an actual title")

  }else{
  moviename.push(moviename);
  } 
  displayMovie();

});


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
  var settings = {
    "url": "https://imdb-api.com/en/API/" + movieTitle + "/k_uc3lp775/tt1832382",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}



// k_uc3lp775