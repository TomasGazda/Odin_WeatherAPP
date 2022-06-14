import { citynotFound, updateCity,updateDaily,updateInfo,updateToday} from "./dom_manipulation";






async function getOneCallWeather(city){
    let response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=1&appid=2dbe91dfe24f84b87c41ec2debd17d3e');
    let apiData = await response.json();
    if(apiData.cod != '400' && Object.keys(apiData).length >0){
        response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+apiData[0].lat+'&lon='+apiData[0].lon+'&exclude=hourly&units=metric&appid=2dbe91dfe24f84b87c41ec2debd17d3e');
        apiData = await response.json();
    
        updateInfo(apiData);
        updateToday(apiData);
        updateDaily(apiData);
        updateCity(city);

    }

    else{
        citynotFound();
        document.getElementById('temperature_now').innerHTML ="City not found! Please try different one";

    }
       
}



export{getOneCallWeather};