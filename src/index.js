import "./assets/style.css";
import { getCurrentWeather,getOneCallWeather,getCityPosition} from "./data_manipulation";
import { getIcon,getDate } from "./utils";


getCityPosition("London,ON,CA")
getOneCallWeather();
