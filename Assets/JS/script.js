


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function userInput(){
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
          ratingsResponse = response.Ratings[1].Value,
          runtimeResponse = response.Runtime,
          genreResponse = response.Genre,
          directorResponse = response.Director,
          plotResponse = response.Plot;
          console.log(posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse);

      var newCard = document.createElement("div")
          newCard.setAttribute("class", "row")
          newCard.innerHTML = 
              "<div class=row card-large>" +
                "<div class=col s12 m7>" +
                  "<div>" +
                      `<span class=h1 card-title>${titleResponse}</span>` +
                        "<div class=card-image>" +
                          `<img src="/">${posterResponse}</img>` +
                        "</div>" +
                  "</div>" +
                  "<div class='card-content'>" +
                      `<p>${plotResponse}</p>` +
                  "</div>" +              
                "</div> " +
              "</div>"
              document.body.appendChild(newCard);
    });    
  
   
        
}


$("#userInput").keypress(function(e){
  if(e.which == 13){
    $("#searchBtn").click();
  }
})

 

$("#searchBtn").click(function (){
  $("#movieDisplay1").css("display", "none");
  $("#movieDisplay2").css("display", "block"); 

})
