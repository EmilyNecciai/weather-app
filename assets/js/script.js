function weatherCitySearch() {
    var searchTerm = document.querySelector('#searchTerm').value;
    console.log(searchTerm);
    // Create a variable to hold the value of rating
    // var rating = document.querySelector('#rating').value;

// GET LAT/LONG

    fetch(
      'http://api.openweathermap.org/geo/1.0/direct?' +
        'q=' + searchTerm +
        '&appid=527dcf6e38939483d3ad43186117df6b'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        var cityLat = response[0].lat;
        var cityLong = response[0].lon;

        console.log(cityLat + " " + cityLong);

        getWeather(cityLat, cityLong);

      });
    }


// GET WEATHER

function getWeather(lat, long) {  
    fetch(
      'https://api.openweathermap.org/data/2.5/onecall?' +
        '&lat=' + lat +
        '&lon=' + long +
        '&exclude=minutely,hourly,alerts' + 
        '&units=imperial' +
        '&appid=527dcf6e38939483d3ad43186117df6b'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        console.log("Datetime:" + " " + response.current.dt + " " + 
          "Temp:" + " " + response.current.temp + " " +
          "IdonId:" + " " + response.current.weather[0].icon + " " +
          "Wind:" + " " + response.current.wind_speed + " " +
          "Humidity:" + " " + response.current.humidity + " " + 
          "UV Index:" + " " + response.current.uvi);
    //     var responseContainerEl = document.querySelector('#response-container');
    //     responseContainerEl.innerHTML = '';
    //     var gifImg = document.createElement('img');
    //     gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
    //     responseContainerEl.appendChild(gifImg);
    
    // storeSearch(searchTerm);


      });
  }

// PLACEHOLDER FOR DISPLAY CITY CONTENT
// function displayCityData(params) {
  
  
// }




//PLACEHOLDER FOR SEARCH HISTORY FUNCTION
  // function searchHistory() {  
  //     var previousSearchTerm = document.querySelector('#city-name').value;
  //     console.log(previousSearchTerm);
  // }



//PLACEHOLDER FOR STORE SEARCH DATA
  // function storeSearch(search) {
  //     var searchedCity = localStorage.setItem("searchedCity", searchTerm);


  // }



//PLACEHOLDER FOR SHOW SEARCH HISTORY FUNCTION

  // function showPastSearches() {
  //   var pastSearch = localStorage.getItem("searchedCity");
  //   if (highScore === null) {
  //     highScore = 0;
  //   }
  
  // }