var form = document.querySelector('form');
var inputTemp = document.querySelector('#inputTemp');
var inputScale = document.querySelector('#inputScale');
var outputScale = document.querySelector('#outputScale');
var convertedTemp = document.querySelector('#convertedTemp');
var outputScaleText = document.querySelector('#outputScaleText');
var output = document.querySelector('#output');

form.addEventListener('submit', function(event){
	event.preventDefault(); // prevent the form from submitting
	var temp = inputTemp.value;
	var inputScaleText = inputScale.value;
	var outputScaleText = outputScale.value;

	if (inputScaleText == "Celsius") {
		if (outputScaleText == "Fahrenheit") {
			var outputTemp = (temp * 1.8) + 32;
			convertedTemp.innerHTML = outputTemp.toFixed(2);
			outputScaleText.innerHTML = "°F";
		} else if (outputScaleText == "Kelvin") {
  			var outputTemp = parseFloat(temp) + 273.15;
			convertedTemp.innerHTML = outputTemp.toFixed(2);
			outputScaleText.innerHTML = "K";
		} else {
			convertedTemp.innerHTML = temp;
			outputScaleText.innerHTML = "°C";
		}
	} else if (inputScaleText == "Fahrenheit") {
		if (outputScaleText == "Celsius") {
			var outputTemp = (temp - 32) * (5/9);
			convertedTemp.innerHTML = outputTemp.toFixed(2);
			outputScaleText.innerHTML = "°C";
		} else if (outputScaleText == "Kelvin") {
  			var outputTemp = (parseFloat(temp) - 32) * (5/9) + 273.15;
			convertedTemp.innerHTML = outputTemp.toFixed(2);
			outputScaleText.innerHTML = "K";
		} else {
			convertedTemp.innerHTML = temp;
			outputScaleText.innerHTML = "°F";
		}
	} else if (inputScaleText == "Kelvin") {
		if (outputScaleText == "Celsius") {
			var outputTemp = parseFloat(temp) - 273.15;
			convertedTemp.innerHTML = outputTemp.toFixed(2);
			outputScaleText.innerHTML = "°C";
		} else if (outputScaleText == "Fahrenheit") {
			var outputTemp = (parseFloat(temp) - 273.15) * 1.8 + 32;
			convertedTemp.innerHTML = outputTemp.toFixed(2);
			outputScaleText.innerHTML = "°F";
		} else {
			convertedTemp.innerHTML = temp;
			outputScaleText.innerHTML = "K";
		}
	}
	
	output.style.display = "block";
});

