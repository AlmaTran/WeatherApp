const input = document.querySelector('.input-search')

function changeWeatherUI(weather) {
	const city = document.querySelector('.name .city')
	const country = document.querySelector('.name .country')
	const time = document.querySelector('.time')
	const temperature = document.querySelector('.temperature .value')
	const shortDesc = document.querySelector('.short-desc')
	const body = document.querySelector('body')

	const visibility = document.querySelector('.visibility span')
	const wind = document.querySelector('.wind span')
	const cloud = document.querySelector('.cloud span')

	city.innerHTML = weather.name
	country.innerHTML = weather.sys.country
	time.innerHTML = new Date().toLocaleString()
	shortDesc.innerHTML = weather.weather[0].main

	const temp = Math.round(weather.main.temp)
	temperature.innerHTML = temp


	body.setAttribute('class', 'hot')
	if (temp <= 25) {
	body.setAttribute('class', 'cool')	
	} 
	if (temp <= 22)
	{
	body.setAttribute('class', 'cold')	
	}
	if (temp <= 19)
	{
	body.setAttribute('class', 'colds')	
	}

	visibility.innerHTML = weather.visibility + ' (m)'
	wind.innerHTML = weather.wind.speed + ' (m/s)'
	cloud.innerHTML = weather.clouds.all + ' (%)'
}

input.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		getWeather(e.target.value)
	}
})

async function getWeather(input) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

	const res = await fetch(url)
	const weather = await res.json()

	changeWeatherUI(weather)
}

getWeather('Ho Chi Minh')
