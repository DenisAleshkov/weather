const api = {
	key: 'ebc1a7836b5af40d808a2ffcb4bd00d2',
	url: 'https://api.openweathermap.org/data/2.5/'
}

document.addEventListener('DOMContentLoaded', async () => {
	try{
		let weatherData = await (await fetch(`${api.url}weather?q=Mogilev&appid=${api.key}`)).json()
		displayDate()
		displayWeather(weatherData)
		setTimeout(()=>document.querySelector('.current').style.opacity = 1, 100)
	}catch(e){}
})

   document.querySelector('.search-city').addEventListener('keydown', async function(e) {
		if (e.keyCode === 13) {
    		try{
				let weatherData = await (await fetch(`${api.url}weather?q=${this.value}&appid=${api.key}`)).json()
				console.log(weatherData)
				displayWeather(weatherData)
				this.value = ''
			}catch(e){
				alert('City is not found')
				throw e
			}
  		}	
	})
function displayWeather(weather) {

	let currentBlock = document.querySelector('.current')
	let icon = currentBlock.childNodes[11]
	
	icon.className = 'icon-' + weather.weather[0].icon

	const gradus = document.querySelector('.current-gradus')
	gradus.textContent = Math.round(weather.main.temp - 273)+'℃'

	const city = document.querySelector('.city-name')
	city.textContent = weather.name

	const citySymbols = document.querySelector('.city-symbols')
	citySymbols.textContent = ', ' + weather.sys.country

	const status = document.querySelector('.main-status')
	status.textContent = weather.weather[0].main

	const description = document.querySelector('.main-description')
	description.textContent = weather.weather[0].description
}

function displayDate() {
	const now = new Date()
	const date = document.querySelector('.date')
	date.textContent = dateBuilder(now)
}

function dateBuilder(date) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const month = months[date.getMonth()]
	const day = date.getDate()
	const year = date.getFullYear()

	return `${day} ${month}  ${year}`
}
