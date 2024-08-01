import { useEffect, useState } from "react";
import axios from "axios";
import content from "../utils/content";
import { Link } from "react-router-dom";

const API_KEY = "38c592a76d3a8b863dbd0eb63dfa0db7";

const Home = () => {
  const { hero, predictions } = content;
  const [city, setCity] = useState("pune");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = () => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    const units = "metric";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    axios
      .get(URL)
      .then((response) => {
        setWeatherData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("loading...");
        setWeatherData(null);
      });
  };

  const displayWeatherInfo = () => {
    if (!weatherData) return null;

    let backgroundColor = "";
    if (weatherData.main.temp < 8) {
      backgroundColor = "bg-blue-300";
    } else if (weatherData.main.temp > 20) {
      backgroundColor = "bg-orange-300";
    } else {
      backgroundColor = "bg-gray-300";
    }

    return (
      <div
        className={`transition-all duration-500 ease-in-out p-6 rounded-md shadow-md ${backgroundColor} text-white`}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Location: {weatherData.name}, {weatherData.sys.country}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
            <p className="text-lg">
              Weather: {weatherData.weather[0].description}
            </p>
          </div>
          <div>
            <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
            <p className="text-lg">
              Visibility: {weatherData.visibility / 1000} km
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="home" className="overflow-hidden max-w-full">
        {/* Main Content Section: Image and Name */}
        <div className="pt-10 relative flex flex-col md:flex-row md:items-center justify-center max-w-screen-2xl container">
          {/* Left Side: Name */}
          <div className="flex-1 flex flex-col justify-center sm:p-10 md:p-16">
            <h1 className="text-teal-600 font-bold text-4xl">
              {hero.firstName}
            </h1>
            <h6 className="text-dark_primary font-Inria mt-2">
              {hero.LastName}
            </h6>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex relative max-h-[calc(100vh-4rem)]">
            <img
              className="w-full h-full object-cover"
              src="images/home2.png"
              alt="Home"
            />
          </div>
        </div>

        <div className="border-stone-600 container max-w-screen-lg mx-auto p-8 bg-white rounded-md shadow-md mt-10">
          <div className="mb-4">
            <label
              htmlFor="cityInput"
              className="block text-sm font-semibold mb-2"
            >
              Enter Your City Name:
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                id="cityInput"
                value={city}
                onChange={handleCityChange}
                className="flex-grow p-3 border rounded-xl focus:outline-none focus:ring focus:border-green-300"
                placeholder="Jaisalmer"
              />
            </div>
          </div>

          {error && <div className="mt-6 text-red-600">{error}</div>}
          <div id="weatherInfo" className="mt-6 text-gray-800">
            {displayWeatherInfo()}
            <Link to="/weather">
              <button
                id="getWeatherBtn"
                onClick={fetchWeather}
                className="bg-blue-600 text-white p-3 rounded-md focus:ring focus:border-blue-300 w-40 mt-4"
              >
                Predict Weather
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-10">
          <h4 className="text-center font-Merriweather my-2">
            Our Crop Predictions
          </h4>
          <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {predictions.solutions_content.map((item, i) => (
                <Link to={item.link} key={i} className="flex flex-col">
                  <div className="rounded overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        className="w-full h-full object-cover"
                        src={item.logo}
                        alt="..."
                      />
                    </div>

                    <div className="px-6 py-4 flex-grow">
                      <h5 className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                        {item.org}
                      </h5>
                      <p className="text-gray-500 text-sm">{item.work}</p>
                    </div>
                    <div className="px-6 py-4 flex items-center">
                      <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex items-center">
                        <svg
                          height="13px"
                          width="13px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                        c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                        c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="ml-1">6 mins ago</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
