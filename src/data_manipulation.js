import { getDate } from "./utils";


async function getCurrentWeather(city){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Oakville&appid=2dbe91dfe24f84b87c41ec2debd17d3e');
    const apiData = await response.json();
    console.log(apiData);
}

async function getOneCallWeather(lat,lon){
    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&units=metric&appid=2dbe91dfe24f84b87c41ec2debd17d3e');
    const apiData = await response.json();
    console.log(apiData);
    
    getDate(apiData.current.dt);
}

async function getCityPosition(city){

    const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=1&appid=2dbe91dfe24f84b87c41ec2debd17d3e');
    const apiData = await response.json();
    console.log(apiData);

}

export{getCurrentWeather,getOneCallWeather,getCityPosition};