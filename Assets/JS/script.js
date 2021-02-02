

$("#userInput").click(function() {
  
  $("#userInput").keyup(function(event){
    if(event.keyCode === 13) {
      $("#searchBtn").click();
    };
  });
});
  
$("#searchBtn").click(function() {

      // Selecting the input element and get its value 
      var inputVal = document.getElementById("userInput").value;
      
        $.ajax({ 
          'url': "http://www.omdbapi.com/?apikey=3171b37b&t=" + inputVal,
          'method': 'GET',
          'timeout': 0,
        }).then(function(response) {
          var titleResponse = response.Title,
              posterResponse = response.Poster,
              ratedResponse = response.Rated,
              ratingsResponse = response.Ratings[1].Value || response.Ratings[1].Value("Sorry, your ratings are in another castle!"),
              runtimeResponse = response.Runtime,
              genreResponse = response.Genre,
              directorResponse = response.Director,
              plotResponse = response.Plot;
              console.log(titleResponse, posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse);




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

const proxyurl = "https://agile-forest-93683.herokuapp.com/";
const url = "https://icanhazdadjoke.com/";

var dadBtn = document.querySelectorAll("dadSearch");
  dadBtn.onclick = (function() {
    fetch(proxyurl + url)    
      .then(reponse => response.text())
      .then(contents =>console.log(contents))
      .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))
    
});