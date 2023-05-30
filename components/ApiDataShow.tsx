import { apiFormat } from "@/pages/interfaces/interfaces";
import { useRouter } from "next/router";
import Image from "next/image";
import { WiDayCloudyWindy, WiDegrees, WiHumidity } from "react-icons/wi";
import {FcBadDecision, FcGoodDecision} from "react-icons/fc"
import {MdOutlineMoodBad} from "react-icons/md"
import {
  BsFillSunriseFill,
  BsFillSunsetFill,
  BsFillCloudsFill,
} from "react-icons/bs";
import { GiInvisible } from "react-icons/gi";
import {FaTemperatureLow,FaTemperatureHigh} from "react-icons/fa"
export const ApiDataShow = (props: apiFormat) => {
  console.log(props.weather[0].main);
  return (
    <div className="flex flex-col sm:flex-row sm: h-full font-mono">
      <div className="flex flex-col min-w-[300px] items-center sm:items-start justify-around h-[calc(100vh-80px)] px-5 border">
        <p className="font-semibold text-3xl ml-14 mt-10 sm:ml-0 sm:mt-0">{props.name}</p>
        <Image
          src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          width={250}
          height={250}
          alt=""
        />
        <div className="flex flex-col gap-0">
          <p className="text-xl font-medium">{props.main.temp}&#8451;</p>
          {/* <p>{new Date().toLocaleString()}</p> */}
        </div>
        <div className="flex flex-col py-2">
          <p className="font-bold text-2xl">{props.weather[0].main}</p>
          <p className="font-light ml-3">-{props.weather[0].description}</p>
        </div>
      </div>
      <div className="flex flex-col flex-grow gap-5 h-full sm:h-full bg-slate-100 sm:bg-slate-100 w-full items-center py-5 px-8">
        <span className="font-semibold text-3xl mb-4 font-mono">Todays Highlights</span>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-full justify-evenly">
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Wind status
            </span>
            <div className="flex gap-2 items-center">
              <WiDayCloudyWindy />
              <span className="font-semibold text-base">
                {Math.ceil(props.wind.speed * 3.6 * 100) / 100}{" "}
                <span className="font-light text-slate-500">km/hr</span>
              </span>
            </div>
            <span>{props.wind.deg} degrees</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Sunrise & Sunset
            </span>
            <div className="flex flex-row items-center gap-2">
              <BsFillSunriseFill />
              <span>
                {new Date(props.sys.sunrise * 1000).toLocaleTimeString(
                  "en-IN",
                  {
                    timeZone: "Asia/Kolkata",
                    hour12: false,
                  }
                )}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsFillSunsetFill />
              <span>
                {new Date(props.sys.sunset * 1000).toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  hour12: false,
                })}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Humidity
            </span>
            <div className="flex items-center gap-2">
              <WiHumidity />
              <span className="font-semibold text-base">
                {props.main.humidity}{" "}
                <span className="font-light text-slate-500">%</span>
              </span>
            </div>
            {props.main.humidity < 30 && (
              <div className="flex items-center gap-2">
              <MdOutlineMoodBad/>
              <span className="ml-2">Normal, Good</span>
            </div>
            )}
            {props.main.humidity >= 30 && props.main.humidity < 65 && (
              <div className="flex items-center gap-2">
              <FcGoodDecision/>
              <span className="ml-2">Normal, Good</span>
            </div> 
            )}
            {props.main.humidity >= 65 && (
              <div className="flex items-center gap-2">
                <FcBadDecision/>
                <span className="ml-2">High-Humidity, Unhealthy</span>
              </div>             
            )}
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Visibility
            </span>
            <div className="flex items-center">
              <GiInvisible />
              <span className="font-semibold text-base">
                {props.visibility / 1000}{" "}
                <span className="font-light text-slate-500">km</span>
              </span>
            </div>
            {props.visibility / 1000 >= 8 && <span>Excellent</span>}
            {props.visibility / 1000 > 5 && props.visibility / 1000 < 8 && (
              <span>Good</span>
            )}
            {props.visibility / 1000 > 3 && props.visibility / 1000 <= 5 && (
              <span>Average</span>
            )}
            {props.visibility / 1000 <= 3 && <span>Poor</span>}
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Cloud Percentage
            </span>
            <div className="flex items-center gap-2">
              <BsFillCloudsFill />
              <span className="font-semibold text-base">
                {props.clouds.all}
                <span className="font-light text-slate-500">%</span>
              </span>
            </div>
            <span>{props.wind.deg} degrees</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            
            <span className="text-xl font-semibold text-slate-500">
              min-max temperatures
            </span>
            <div className="flex items-center gap-2">
              <FaTemperatureHigh/>
            <span className="text-base">
              temp-max:{" "}
              <span className="font-semibold">{props.main.temp_max}</span>{" "}
              <span className="font-light text-slate-500">&#8451;</span>
            </span>
            </div>
            <div className="flex items-center gap-2">
            <FaTemperatureLow/>
            <span className="text-base">
              temp-min:{" "}
              <span className="font-semibold">{props.main.temp_min}</span>{" "}
              <span className="font-light text-slate-500">&#8451;</span>
            </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
