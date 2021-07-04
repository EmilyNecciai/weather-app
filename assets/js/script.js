function weatherCitySearch() {
  var searchTerm = document.querySelector('#searchTerm').value;
  localStorage.setItem("searchedCity", searchTerm);
  weatherApi(searchTerm);
  loadCities();
}


function weatherApi(cityName) {

    // GET LAT/LONG
    fetch(
      'http://api.openweathermap.org/geo/1.0/direct?' +
        'q=' + cityName +
        '&appid=527dcf6e38939483d3ad43186117df6b'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        var cityLat = response[0].lat;
        var cityLong = response[0].lon;
        
        // GET WEATHER
        return fetch(
          'https://api.openweathermap.org/data/2.5/onecall?' +
            '&lat=' + cityLat +
            '&lon=' + cityLong +
            '&exclude=minutely,hourly,alerts' + 
            '&units=imperial' +
            '&appid=527dcf6e38939483d3ad43186117df6b'
        )
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            // console.log(response);
            var currentDate = moment.unix(response.current.dt).format('dddd, MMMM Do, YYYY');
            var currentTemp = response.current.temp;
            var currentIcon = response.current.weather[0].icon;
            var currentWind = response.current.wind_speed;
            var currentHumidity = response.current.humidity;
            var currentUvi = response.current.uvi;

            // DISPLAY CURRENT WEATHER DATA
            var iconImg = "http://openweathermap.org/img/w/" + currentIcon + ".png";
            $("#city-stats-space")
            .html("<h3>" + cityName + " - " + currentDate + "<img id='wicon' src='' alt='Weather icon'></h3>")
          
            $("#wicon")
            .attr("src", iconImg);
          
            $("#current-stats-space")
            .html(
              "<p>Temperature:  "+ currentTemp + "&deg;F</p>" +
              "<p>Wind Speed:  "+ currentWind + " MPH</p>" +
              "<p>Humidity:  "+ currentHumidity + "%</p>" +
              "<p>UV Index:  <span id='uv-style'>&nbsp;&nbsp;&nbsp;"+ currentUvi + "&nbsp;&nbsp;&nbsp;</span></p>");
          
              if (currentUvi < 2.0) {
                $("#uv-style")
                .addClass("uv-favorable");
              } else if (currentUvi > 2.0 && currentUvi < 8.0) {
                $("#uv-style")
                .addClass("uv-moderate");
              } else if (currentUvi > 8.0) {
                $("#uv-style")
                .addClass("uv-severe");
              }
            displayForecastData(response);
          });
      });
  }


//DISPLAY FORECAST DATA
function displayForecastData(response) {
  console.log(response);
  for (var i = 1; i < 6; i++) {

    var forecastDayEl = $("<div>")
    .addClass("box")
    .attr("data-id", i)
    .append("<div class='box'")
    .appendTo("#forecast-boxes");

    var forecastDate = $("<h4></h4>")
    .append("moment.unix(response.daily[i].dt).format('dddd, MMMM Do')");
    // var forecastTemp = response.daily[i].temp.day;
    // var forecastIcon = response.daily[i].weather[0].icon;
    // var forecastWind = response.daily[i].wind_speed;
    // var forecastHumidity = response.daily[i].humidity;
    // // console.log(forecastDate, forecastTemp, forecastIcon, forecastWind, forecastHumidity, forecastUvi);
    // var iconImg = "http://openweathermap.org/img/w/" + forecastIcon + ".png";
    
    // $("#box1")
    // .html(
    //   "<p>" + forecastDate + "</p>" +
    //   "<img id='ficon' src='' alt='Weather icon'>" +
    //   "<p>Temperature:  "+ forecastTemp + "&deg;F</p>" +
    //   "<p>Wind Speed:  "+ forecastWind + " MPH</p>" +
    //   "<p>Humidity:  "+ forecastHumidity + "%</p>"
    // );
    // $("#ficon")
    // .attr("src", iconImg);


    // i++;
  }
  }

// LOAD CITIES
function loadCities() {
    var pastSearch = localStorage.getItem('searchedCity');

    if (!pastSearch) {
    return false;
    } else {
    console.log(localStorage.getItem("searchedCity"));
    $("#previous-searches")
    .append("<button class='btn btn-secondary btn-block'" + 
    "onclick='weatherApi(" + pastSearch +")'>" + 
    pastSearch + 
    "</button>");
  }
}

loadCities();
