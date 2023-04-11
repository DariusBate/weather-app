const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');

const days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const apiKey = '6bf5da3a73a0493c5d378d4a0d174c95';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

//city will store the city name//

const city = "Timisoara";

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const hourIn12HrFormat = hour >=13 ? hour %12: hour;
    const minutes = time.getMinutes();
    const date = time.getDate();
    const month = time.getMonth();
    const day= time.toLocaleTimeString("en-us", {
        weekday: 'long' 
    });
    
    dateEl.innerHTML = day; 


})



getWeatherData();
function getWeatherData(){

    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude} = success.coords;
        console.log(success);

        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=6bf5da3a73a0493c5d378d4a0d174c95").then(res => res.json()).then(data =>{
            console.log(data);
            
        const weather = data.main.temp;
        const weatherInCelsius = data.main.temp - 273.15;
        const fixedTemp = weatherInCelsius.toFixed(2);
        document.querySelector(".weather-icon").innerHTML = data.weather.icon;
        document.querySelector(".current-weather").innerHTML = fixedTemp + '\u00B0';

        
        })

})
}



