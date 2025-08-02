let APIKey = "69162c43525d643d787c822b3dfec23e",
    cityName,
    weatherValues;

// search area
let searchBox = document.getElementById("searchBox"),
    searchButton = document.getElementById("searchButton");

// location area
let locationText = document.getElementById("locationText");

// date area
let year = document.getElementById("year"),
    month = document.getElementById("month"),
    todayDate = document.getElementById("todayDate");

// current date
let currentDate = new Date().toString().split(" ");

// degree Celcius
let degreeCelcius = document.getElementById("degreeCelcius");

// climate condition 
climate = document.getElementById("climate");

// climate information
pressure = document.getElementById("pressureRender");
humidity = document.getElementById("humidityRender");
windSpeed = document.getElementById("windSpeedRender");

searchButton.addEventListener("click", () => {
    cityName = searchBox.value;

    // location
    locationText.innerText = searchBox.value;
    searchBox.value = "";

    // date
    year.innerText = currentDate[3];
    month.innerText = currentDate[2];
    todayDate.innerText = currentDate[1];

    // fetching the API value
    let fetchWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`);

    fetchWeather.then((response) => {
        if (!response.ok) {
            throw new Error("city not found");
        }
        return response.json();
    }).then((value) => {
        // console.log(value);
        weatherValues = value;
        degreeCelcius.innerText = weatherValues.main.temp;
        climate.innerText = weatherValues.weather[0].description;
        pressure.innerText = weatherValues.main.pressure;
        humidity.innerText = weatherValues.main.humidity;
        windSpeed.innerText = weatherValues.wind.speed;

    }).catch((error) => {
        console.error(error.message);
    });

    // for weather forecasting

    // next several days date
    let nextDate1 = document.getElementById("nextDate1");  // forecastValues.list[5].dt_txt.split(" ")[0];
    let nextDate2 = document.getElementById("nextDate2");  // forecastValues.list[13].dt_txt.split(" ")[0];
    let nextDate3 = document.getElementById("nextDate3");  // forecastValues.list[21].dt_txt.split(" ")[0];
    let nextDate4 = document.getElementById("nextDate4");  // forecastValues.list[29].dt_txt.split(" ")[0];
    let nextDate5 = document.getElementById("nextDate5");  // forecastValues.list[37].dt_txt.split(" ")[0];

    // temperature of next days
    let nextTemp1 = document.getElementById("nextTemp1");   // forecastValues.list[5].main.temp;
    let nextTemp2 = document.getElementById("nextTemp2");   // forecastValues.list[13].main.temp;
    let nextTemp3 = document.getElementById("nextTemp3");   // forecastValues.list[21].main.temp;
    let nextTemp4 = document.getElementById("nextTemp4");   // forecastValues.list[29].main.temp;
    let nextTemp5 = document.getElementById("nextTemp5");   // forecastValues.list[37].main.temp;

    let fetchForecast = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=metric`);

    fetchForecast.then((forecastResponse) => {
        if (!forecastResponse.ok) {
            alert("city not found");
            throw new Error("city is not define");
        }
    return forecastResponse.json();

    }).then((value) => {
        forecastValues = value;

        nextDate1.innerText = forecastValues.list[5].dt_txt.split(" ")[0];
        nextDate2.innerText = forecastValues.list[13].dt_txt.split(" ")[0];
        nextDate3.innerText = forecastValues.list[21].dt_txt.split(" ")[0];
        nextDate4.innerText = forecastValues.list[29].dt_txt.split(" ")[0];
        nextDate5.innerText = forecastValues.list[37].dt_txt.split(" ")[0];

        nextTemp1.innerText = forecastValues.list[5].main.temp;
        nextTemp2.innerText = forecastValues.list[13].main.temp;
        nextTemp3.innerText = forecastValues.list[21].main.temp;
        nextTemp4.innerText = forecastValues.list[29].main.temp;
        nextTemp5.innerText = forecastValues.list[37].main.temp;

    }).catch((error) => {
        console.error(error.message);
    });

});
