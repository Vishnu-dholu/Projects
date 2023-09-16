//API key and URL
const apiKey = "039fdf99e800f9dbbb6536581c82a096";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

//Select the weather icon element
const weatherIcon = document.querySelector(".weather-icon");

//Function to fetch and display weather data
async function checkWeather(city){
    //Fetch weather data from the API
    const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);

    //Handle the response based on the status code
    if(response.status == 404){
        //Display error message if data is not found
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        //Parse the JSON data
        var data = await response.json();

        //Update weather details in the UI
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        //Set weather icon based on weather condition 
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }

        //Display the weather data container after fetching and displaying the data
        document.querySelector(".weather").style.display = "block";

    }
}

//Add event listener to search button
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", function(){
    const cityInput = document.querySelector("input");
    const city = cityInput.value.trim();
    if (city !== ""){
        //Call checkWeather function when the button is clicked
        checkWeather(city);
    }
});