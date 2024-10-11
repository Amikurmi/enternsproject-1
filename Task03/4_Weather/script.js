// Select DOM elements
const getWeatherBtn = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const weatherOutput = document.getElementById('weather-output');

// Event listener for "Get Weather" button
getWeatherBtn.addEventListener('click', displayWeather);

// Function to display weather for the entered city
function displayWeather() {
    const city = cityInput.value.trim();

    if (city === '') {
        weatherOutput.textContent = 'Please enter a city name!';
        return;
    }

    // Hardcoded weather message for simplicity
    const weatherMessage = `Weather for ${city} is sunny.`;

    // Display the weather message
    weatherOutput.textContent = weatherMessage;
}
