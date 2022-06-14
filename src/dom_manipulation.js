import { getIcon,getDate,tempUnits,speedUnits} from "./utils";

function updateCity(name){
 document.getElementById('city').innerHTML = name;
}

function updateToday(info){
    document.getElementById('weather_now').style.visibility = "visible";
    document.getElementById('weather_image').style.visibility = "visible";

    document.getElementById('weather_now').innerHTML = info.current.weather[0].main;
    document.getElementById('weather_image').innerHTML = getIcon(info.current.weather[0].icon);
    document.getElementById('temperature_now').innerHTML =tempUnits(info.current.temp);
    

}

function updateInfo(info){
    document.getElementById('left_panel').style.visibility = "visible";

    document.getElementById('feeling').innerHTML = tempUnits(info.current.feels_like);
    document.getElementById('wind').innerHTML = speedUnits(info.current.wind_speed);
    document.getElementById('humid').innerHTML = info.current.humidity+' %';
    document.getElementById('rain').innerHTML = tempUnits(info.current.dew_point);
    
}

function updateDaily(info){
    document.getElementById('daily').style.visibility = "visible";

    document.getElementById('day_1_date').innerHTML =getDate(info.daily[0].dt);
    document.getElementById('day_1_image').innerHTML =getIcon(info.daily[0].weather[0].icon);
    document.getElementById('day_1_temperature').innerHTML =tempUnits(info.daily[0].temp.day);
    document.getElementById('day_2_date').innerHTML =getDate(info.daily[1].dt);
    document.getElementById('day_2_image').innerHTML =getIcon(info.daily[1].weather[0].icon);
    document.getElementById('day_2_temperature').innerHTML =tempUnits(info.daily[1].temp.day);
    document.getElementById('day_3_date').innerHTML =getDate(info.daily[2].dt);
    document.getElementById('day_3_image').innerHTML =getIcon(info.daily[2].weather[0].icon);
    document.getElementById('day_3_temperature').innerHTML =tempUnits(info.daily[2].temp.day);
}

function citynotFound(){
    document.getElementById('left_panel').style.visibility = "hidden";
    document.getElementById('daily').style.visibility = "hidden";
    document.getElementById('weather_now').style.visibility = "hidden";
    document.getElementById('weather_image').style.visibility = "hidden";
}

export {updateCity,updateInfo,updateToday,updateDaily,citynotFound};