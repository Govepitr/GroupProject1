



$("#userInput").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#searchBtn").click();
  }
});



$("#searchBtn").click(function () {

  // Selecting the input element and get its value 
  var inputVal = document.getElementById("userInput").value;
});
$("#userInput").click(function () {

  // Allows pressing enter to serve same function as click
  $("#userInput").keyup(function (event) {
    if (event.keyCode === 13) {
      $("#searchBtn").click();
    };
  });
});

$(document).ready(function(){
  $(".storeMovie").collapsible();
});


$("#searchBtn").click(function () {

  // Selecting the input element and get its value 
  var inputVal = document.getElementById("userInput").value;
  

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
    
      

    document.getElementById("movieDisplay2").innerHTML =
      `<div class="center-align card totalCard"> 
                <div class="card-image activator waves-effect waves-block waves-light"> 
                  <img src="${posterResponse}">
                </div>` +
      `<div id="saveMovie" class="card-content">
          <button class="btn-floating btn-small waves-effect waves-light orange darken-2 click-to-toggle" type="submit" name="action">
          <i class="material-icons">save</i>
          </button>
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
  var movieDeets = {titleResponse, posterResponse, ratedResponse, 
    ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse }
    $(saveMovie).click = (function(){
      localStorage.setItem('movieFile', JSON.stringify(movieDeets));        
    }).then(function(
    (console.log(movieFile));
    // var miniMovie = localStorage.getItem('movieFile');
    // console.log('miniMovie')
 




            $('#dadSearch').click(function () { 
              fetch("https://icanhazdadjoke.com/", {
                headers: {
                  Accept: "application/json"
                }
              }).then(response => response.json())
              .then(function(data) {
              console.log(data.joke);
              document.getElementById("dadJokes").innerText = data.joke;
            });
          });
)};
