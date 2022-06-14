import "./assets/style.css";
import { getOneCallWeather} from "./data_manipulation";


$( document ).ready(function() {
    getOneCallWeather("London,ON,CA");

});


$("#place_search").on('click',function(){
    getOneCallWeather($("#place").val());

});