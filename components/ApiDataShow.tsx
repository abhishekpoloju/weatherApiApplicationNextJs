import { apiFormat } from "@/pages/interfaces/interfaces";
import { useRouter } from "next/router";
import Image from "next/image";
import { WiDayCloudyWindy,WiDegrees } from "react-icons/wi"
export const ApiDataShow = (props: apiFormat) => {
  const obj = {
    "Rain": "RainImage.png",
    "Snow": "SnowImage.png",
    "Clear": "ClearSkyImage.png",
    "Clouds": "CloudImage.png",
    "Drizzle": "RainImage.png",
    "Atmosphere": "SunnyImage.png",
    "Thunder": "ThunderImage.png",
  };
  const router = useRouter();
  console.log(props.weather[0].main)
  return (
    <div className="flex flex-row">
      <div className="flex flex-col min-w-[300px] items-start justify-around h-[calc(100vh-80px)] px-5 border">
        <p className="font-semibold text-2xl">{props.name}</p>
        <Image src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} width={250} height={250} alt="" />
        <div className="flex flex-col gap-0">
          <p className="text-xl font-medium">{props.main.temp}&#8451;</p>
          {/* <p>{new Date().toLocaleString()}</p> */}
        </div>
        <div className="flex flex-col py-2">
          <p className="font-bold text-2xl">{props.weather[0].main}</p>
          <p className="font-light ml-3">-{props.weather[0].description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-slate-100 w-full items-center py-5 px-8">
        <span className="font-semibold text-3xl mb-4">Todays Highlights</span>
        <div className="grid grid-cols-3 gap-14 w-full h-[60vh] justify-evenly">
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Wind status
            </span>
            <div className="flex gap-2 items-center">
              <WiDayCloudyWindy/>
            <span className="font-semibold text-base">
              {props.wind.speed * 3.6}{" "}
              <span className="font-light text-slate-500">km/hr</span>
            </span>
            </div>
            <span>{props.wind.deg} degrees</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Sunrise & Sunset
            </span>
            <span>
              {new Date(props.sys.sunrise * 1000).toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: false,
              })}
            </span>
            <span>
              {new Date(props.sys.sunset * 1000).toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: false,
              })}
            </span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Humidity
            </span>
            <span className="font-semibold text-base">
              {props.main.humidity}{" "}
              <span className="font-light text-slate-500">%</span>
            </span>
            {props.main.humidity < 30 && (
              <span>Low-Humidity Dry-conditions</span>
            )}
            {props.main.humidity >= 30 && props.main.humidity < 65 && (
              <span>Good humidity Healthy</span>
            )}
            {props.main.humidity >= 65 && (
              <span>High-Humidity Wet and Unhealthy</span>
            )}
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              Visibility
            </span>
            <span className="font-semibold text-base">
              {props.visibility / 1000}{" "}
              <span className="font-light text-slate-500">km</span>
            </span>
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
            <span className="font-semibold text-base">
              {props.clouds.all}
              <span className="font-light text-slate-500">%</span>
            </span>
            <span>{props.wind.deg} degrees</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 gap-3">
            <span className="text-xl font-semibold text-slate-500">
              min-max temperatures
            </span>
            <span className="text-base">
              temp-max:{" "}
              <span className="font-semibold">{props.main.temp_max}</span>{" "}
              <span className="font-light text-slate-500">&#8451;</span>
            </span>
            <span className="text-base">
              temp-min:{" "}
              <span className="font-semibold">{props.main.temp_min}</span>{" "}
              <span className="font-light text-slate-500">&#8451;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
