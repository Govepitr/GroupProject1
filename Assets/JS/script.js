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
        $('#randoP').click(function(){ 
            fetch("https://api.themoviedb.org?api_key=4e8eccd4159c538edb2e88a2a37f0695", inputVal, { 
            headers: {
            Accept: "application/json"
            }
          })
          .then(function(response) {
            return response.json();
          }).then(function(response){
            console.log(response);
          })
        });
}); 
        // var hoardBtn = localStorage.setItem(totalCard)
        // var timeStoneBtn = localStorage.getvalue('')
        // $('#dadSearch').click(function(){
        //     fetch("https://icanhazdadjoke.com/", {
              // headers: {
              // Accept: "application/json"
              // }
        //     })
        //     .then(function(response) {
        //       return response.json();
        //     })
        //     .then(function(response){
        //       console.log(response.data['joke']);
        //       var jokesContainerEl = document.querySelector('#jokes');
        //       jokesContainerEl.innerHTML = '';
        //       var jokesContent = document.createElement('hah');
        //       jokesContent.setAttribute('hah', response.data['joke']);
        //       jokesContainerEl.appendChild(jokesContent);
        //     });
        // });
            //   response => response.json())
            // .then(data = () => {
            //   console.log(data.joke)
            //   $("#p-id")
            // } 
