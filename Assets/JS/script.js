//---Pardon our dust!!

// var jokePick = [];
// var totalCard;

//local storage functions
// initTotalCardList();
// initJoke();

// function renderJoke(){
//   $("#storedJokes").val("");

//   for (i=0; i<jokePick.length; i++){
//     var p = $("<p>");
//     p.text(jokePick);
//     $("#jokePick").after(p);
//     debugger
//   }
// }

// function initJoke() {
//   var storedJokes = JSON.parse(localStorage.getItem("jokeData"));

//   if (storedJokes !== null)  {
//     jokePick = storedJokes;
//   }
// }

$("#userInput").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#searchBtn").click();
  }
})



$("#searchBtn").click(function () {

  // Selecting the input element and get its value 
  var inputVal = document.getElementById("userInput").value;
});
$("#userInput").click(function () {

  $("#userInput").keyup(function (event) {
    if (event.keyCode === 13) {
      $("#searchBtn").click();
    };
  });
});

$("#searchBtn").click(function () {

  // Selecting the input element and get its value 
  var inputVal = document.getElementById("userInput").value;
  var pureVal = inputVal;

  $.ajax({
    'url': "https://www.omdbapi.com/?apikey=3171b37b&t=" + inputVal,
    'method': 'GET',
    'timeout': 0,
  }).then(function (response) {
    var titleResponse = response.Title,
      posterResponse = response.Poster,
      ratedResponse = response.Rated,
      ratingsResponse = response.Ratings[1].Value || response.Ratings[0].Value,
      runtimeResponse = response.Runtime,
      genreResponse = response.Genre,
      directorResponse = response.Director,
      plotResponse = response.Plot;
    console.log(titleResponse, posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse);

    //--Coming soon to a project near you!!

    // var totalCard = titleResponse, posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse;

    // function  storeMovieArray(){

    //   localStorage.setItem("card", JSON.stringify(totalCard));
    // }

    // $("#timeStone").on("click", function(event){
    //   event.preventDefault();
    // })





    document.getElementById("movieDisplay2").innerHTML =
      `<div id="cardVanish" class="center-align card"> 
                <div class="card-image activator waves-effect waves-block waves-light"> 
                  <img src="${posterResponse}">
                </div>` +
      `<div class="card-content">
            <span class="card-title activator blue-text text-darken-4">${titleResponse}<i class="material-icons right">more_vert</i></span>
              </div>` +
      `<div class="card-reveal">
                <div class="card-title blue-text text-darken-4">
                  <p>Director: ${directorResponse}<i class="material-icons right activator">cancel</i></p>
                  <p>${ratedResponse}</p>
                  <p>${runtimeResponse}</p>
                  <p>Ratings: ${ratingsResponse}</p>
                  <p>${genreResponse}</p>
                  <p class="line">____________________</P>
                  <p>${plotResponse}</p>
                </div>
              </div>
            </div>` ;
    document.getElementById("userInput").value = ""
  });

});

// var hoardBtn = localStorage.setItem(totalCard)
// var timeStoneBtn = localStorage.getvalue('')

$('#dadSearch').click(function () {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  }).then(response => response.json())
  .then(function(data) {
   console.log(data.joke);
   document.getElementById("dadJokes").innerText = data.joke;
})
       

    

});