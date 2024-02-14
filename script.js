document.addEventListener('DOMContentLoaded', () => {
    let search = document.querySelector('input');
    let btn = document.querySelector('#submitBtn');
    let city = document.querySelector('.city-txt');
    let degree = document.querySelector('.temp-txt');
    let weather = document.querySelector('.weather-txt');
    let humidity = document.querySelector('.humidity-txt');
    let wind = document.querySelector('.wind-txt');
    let bg = document.querySelector('.container');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (search.value !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=816366c90cdddb7e620a6932c7df52ff`)
                .then(res => res.json())
                .then(datas => {
                    city.textContent = datas.name;
                    degree.textContent = `${Math.floor(datas.main.temp -273.15)}${"°C"}`;
                    weather.textContent = datas.weather[0].description;
                    humidity.textContent = `${datas.main.humidity}${" %"}`
                    wind.textContent = `${datas.wind.speed}${" Km"}`
                    
                    console.log(datas);
                    let temp = parseInt(degree.textContent);
                    if (temp >= 26) {
                        bg.style.backgroundImage = 'url("Bg-1.webp")';
                    } else if (temp > 20 && temp < 26) {
                        bg.style.backgroundImage = 'url("Bg-2.webp")';
                    } else {
                        bg.style.backgroundImage = 'url("Bg-3.webp")';
                    }
                })
        } else {
            alert('Please enter the city name');
        }
    });
});
