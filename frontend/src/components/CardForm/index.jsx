// import axios from "axios";
// import { useState, useEffect } from "react";
import SCardForm from "./style";
import face from "../../assets/ic-face-green.svg";
import meteo from "../../assets/02d.png";
import humidite from "../../assets/ic-humidity-72-px_2.svg";

export default function CardForm() {
  // const [test, setTest] = useState();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://api.airvisual.com/v2/nearest_city?key=5037c91f-5fa5-423c-9ec5-1e4628130b62`
  //     )
  //     .then(({ data }) => {
  //       setTest(data.data);
  //     });
  // }, []);

  return (
    <SCardForm>
      <div className="card">
        <h1>Qualité de l&#39;air à Lille </h1>
        <hr />
        <div className="block">
          <img src={face} alt="bien" className="face" />
          <p className="cool">
            <span className="num">25 </span>US AQI
          </p>
          <p className="good">Good</p>
        </div>
        <div className="weather">
          <p className="meteo">Today ! 22°</p>
          <img src={meteo} alt="meteo" className="imeteo" />
        </div>

        <p className="humidite">
          <img src={humidite} alt="humidite" className="imgcard" />{" "}
          <span className="caca">11 humidité</span>
        </p>
        {/* {test.city} {test.current.pollution.aqius} {test.current.weather.tp}
        {test.current.weather.hu} */}
      </div>
    </SCardForm>
  );
}
