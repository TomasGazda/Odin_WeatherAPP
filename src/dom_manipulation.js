import { getIcon,getDate,tempUnits,speedUnits} from "./utils";

function updateCity(name){
 document.getElementById('city').innerHTML(name);
}

function updateToday(info){
    document.getElementById('weather_now').innerHTML(info.current.weather.main);
    document.getElementById('weather_image').innerHTML(getIcon(info.current.weather.icon));
    document.getElementById('temperature_now').innerHTML(tempUnits(info.current.temp));

}

function updateInfo(inof){
    document.getElementById('feeling').innerHTML();
    document.getElementById('wind').innerHTML();
    document.getElementById('humid').innerHTML();
    document.getElementById('rain').innerHTML();
}