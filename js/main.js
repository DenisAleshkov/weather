const api = {
	key: 'ebc1a7836b5af40d808a2ffcb4bd00d2',
	// url: 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}',
	url: 'https://api.openweathermap.org/data/2.5/'
}

document.addEventListener('DOMContentLoaded', ()=>{
    	fetch(`${api.url}weather?q=Mogilev&appid=${api.key}`)
			.then(res => res.json())
			.then(res=>displayWeather(res.name, res.main.temp,  res.weather[0].icon));	
})

  document.querySelector('.search-city').addEventListener('keydown', function(e) {
    	if (e.keyCode === 13) {
    		
    			fetch(`${api.url}weather?q=${this.value}&appid=${api.key}`)
				.then(res => res.json())
				.then(res=>{
					displayWeather(res.name, res.main.temp,  res.weather[0].icon)
				});

				this.value = ''
    		
  		}	
	})

function displayWeather(resCity, temp, weatherIcon) {
	let icon = document.querySelector('.icon');
	icon.className = 'icon-'+ weatherIcon;
	// icon.classList.toggle('icon-'+ weatherIcon);
	// icon.classList.add('icon-'+ weatherIcon);
	const gradus = document.querySelector('.current-gradus');
	gradus.textContent = Math.round(temp - 273);
	const city = document.querySelector('.current-city')
	city.textContent = resCity
}
