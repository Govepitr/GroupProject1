
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
      'url': "http://www.omdbapi.com/?apikey=3171b37b&t=" + inputVal,
      'method': 'GET',
      'timeout': 0,
    }).then(function(response) {
      console.log(response, [0]);
      console.log(response, "Title");
      console.log(response, "Poster");
      console.log(response, "Plot");
      console.log(response, [0]);
      // console.log(response);
      // console.log(response);
      // console.log(response);
      // console.log(response);
      
      
      var newCard = document.createNewElement("div")
  
        newCard.setAttribute("class", "row")
        newCard.innerHTML = 
        "<div class=\"row\">
            <div class=\"col s12 m7\">
              <div class=\"card\">
                  <span class=\"card-title\">${Title}</span>
                    <div class=\"card-image\">
                      <img src=\"\">${Poster}</img>
                    </div>
              </div>
              <div class="plotSummary">
                  <p>${Plot}</p>
              </div>
            </div> 
          </div>".ts
                
        document.getelementById("#moviedisplay2").appendChild("div");


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













// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
//   console.log(userInput);
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }





// k_uc3lp775



