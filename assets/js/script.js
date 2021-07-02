function weatherCitySearch() {
    var searchTerm = document.querySelector('#searchTerm').value;
    console.log(searchTerm);
    // Create a variable to hold the value of rating
    // var rating = document.querySelector('#rating').value;
    // fetch(
    //   'https://api.giphy.com/v1/gifs/search?q=' +
    //     searchTerm +
    //     // Add the rating parameter
    //     '&rating=' +
    //     rating +
    //     '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
    // )
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(response) {
    //     console.log(response.data[0]);
    //     var responseContainerEl = document.querySelector('#response-container');
    //     responseContainerEl.innerHTML = '';
    //     var gifImg = document.createElement('img');
    //     gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
    //     responseContainerEl.appendChild(gifImg);
    
    storeSearch(searchTerm);


    //   });
  }

  function searchHistory() {  
      var previousSearchTerm = document.querySelector('#city-name').value;
      console.log(previousSearchTerm);
  }

  function storeSearch(search) {
      var searchedCity = localStorage.setItem("searchedCity", searchTerm);


  }

  function showPastSearches() {
    var pastSearch = localStorage.getItem("searchedCity");
    if (highScore === null) {
      highScore = 0;
    }
  
  }