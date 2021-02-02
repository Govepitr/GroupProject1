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

  $.ajax({
    'url': "http://www.omdbapi.com/?apikey=3171b37b&t=" + inputVal,
    'method': 'GET',
    'timeout': 0,
  }).then(function (response) {
    var titleResponse = response.Title,
      posterResponse = response.Poster,
      ratedResponse = response.Rated,
      ratingsResponse = response.Ratings[0].Value || response.Ratings[0].Value("Sorry, your ratings are in another castle!"),
      runtimeResponse = response.Runtime,
      genreResponse = response.Genre,
      directorResponse = response.Director,
      plotResponse = response.Plot;
    console.log(titleResponse, posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse);

    document.getElementById("userInput").addEventListener("search", function (event) {
      $(".movieDisplay2").empty();
    });

    var newCard = document.createElement("div")
    newCard.innerHTML =
      `<div id="cardVanish" class="center-align card"> 
                  <div class="card-image activator waves-effect waves-block waves-light"> 
                    <img src="${posterResponse}">
                  </div>` +
      `<div class="card-content">
                  <span class="card-title activator blue-text text-darken-4">${titleResponse}</span>
                </div>` +
      `<div class="card-reveal">
                  <span class="card-title blue-text text-darken-4">
                    <p>${directorResponse}</p>
                    <p>${ratedResponse}</p>
                    <p>${runtimeResponse}</p>
                    <p>${ratingsResponse[1]}</p>
                    <p>${runtimeResponse}</p>
                  </span>
                  <p>${plotResponse}</p>
                </div>
              </div>`
    document.getElementById("movieDisplay2").appendChild(newCard);

  });



});