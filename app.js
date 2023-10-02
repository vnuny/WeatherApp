var btn = document.getElementById("send");
var input = document.getElementById("input");

var tempV = document.querySelector(".tempV");
var windV = document.querySelector(".windV");
var skyconditionV = document.querySelector(".skyconditionV");
var countryV = document.querySelector(".countryV");
var container = document.querySelector(".container");
var error = document.querySelector(".error");
btn.addEventListener("click", function(){
    var city = input.value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=758ad0c4104ea2d6fa78079034df655e`)
    .then(res => res.text())
    .then(rep => {  
        var data = JSON.parse(rep);
        var temp = Math.round((data.main.temp) - 273.15);
        var windspeed = Math.round((data.wind.speed) * 3.6);
        var skyaction = data.weather[0].description;
        var countryname = data.sys.country;

        tempV.innerHTML = temp + `°C`;
        windV.innerHTML = windspeed + "km/h";
        skyconditionV.innerHTML = skyaction;
        countryV.innerHTML = countryname;
        container.style.height = "20em";
        
        error.style.display = "none";



    }).catch(err => {
        container.style.height = "140px";
        error.style.display = "block";
    })
})

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=758ad0c4104ea2d6fa78079034df655e`
