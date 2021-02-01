


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
          ratingsResponse = response.Ratings[0].Value || "Sorry, your ratings are in another castle!",
          runtimeResponse = response.Runtime,
          genreResponse = response.Genre,
          directorResponse = response.Director,
          plotResponse = response.Plot;
          console.log(titleResponse, posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse);

      var newCard = document.createElement("div")
          newCard.setAttribute("class", "row")
          newCard.innerHTML = 
          "<div class=center-align card>" +
            "<div class=card-image waves-effect waves-block waves-light>" +
              `<img src="${posterResponse}">` +
            "</div>" +
            "<div class=card-content>" +
              '<span>${titleResponse}</span>' +
              '<p></p>'  +
              '<p>${runtimeResponse}</p>' +
              '<p>${directorResponse}</p>' +
              '<p>${genreResponse}</p>' +
            "</div>" +
            "<div class=card-reveal>" +
              '<span>${ratingsResponse[1]}</span>' +
              '<p id=#plotSpot class=flow-text>${plotResponse}</p>' +
            "</div>" +
          "</div>"
              document.body.appendChild(newCard);              
              
    });    
    document.getElementById("userInput").value = "";
   
        
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
