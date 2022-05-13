import { useState, useEffect } from "react";
import api from "../../services/api";
import SVehiclesEmissions from "./style";
import GPL from "../../assets/GPL.png";
import Essence from "../../assets/essence.png";
import gazNat from "../../assets/gazNat.png";
import Diesel from "../../assets/Diesel.png";
import BioMethane from "../../assets/BioMethane.png";
import superEthanol from "../../assets/superEthanol.png";
import Electrique from "../../assets/Electrique.png";

export default function VehiclesEmissions() {
  const [gplData, setGplData] = useState({});
  const formGplData = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_lpg-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formGplData).then(({ data }) => {
      setGplData(data);
    });
  }, []);
  useEffect(() => {}, [gplData]);

  const [dieselData, setDieselData] = useState({});
  const formDieselData = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_diesel-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formDieselData).then(({ data }) => {
      setDieselData(data);
    });
  }, []);
  useEffect(() => {}, [dieselData]);

  const [biomethaneData, setBiomethaneData] = useState({});
  const formBiomethaneData = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_fcev_smr_centralized_biomethane-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formBiomethaneData).then(({ data }) => {
      setBiomethaneData(data);
    });
  }, []);
  useEffect(() => {}, [biomethaneData]);

  const [essenceData, setEssenceData] = useState({});
  const formEssenceData = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_petrol-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formEssenceData).then(({ data }) => {
      setEssenceData(data);
    });
  }, []);
  useEffect(() => {}, [essenceData]);

  const [naturalGasData, setNaturalGasData] = useState({});
  const formNaturalGasData = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_ngv-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formNaturalGasData).then(({ data }) => {
      setNaturalGasData(data);
    });
  }, []);
  useEffect(() => {}, [naturalGasData]);

  const [electricData, setElectricData] = useState({});
  const formElectricData = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car_light-fuel_source_bev-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formElectricData).then(({ data }) => {
      setElectricData(data);
    });
  }, []);
  useEffect(() => {}, [electricData]);

  const [e85Data, setE85Data] = useState({});
  const formE85Data = {
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_e85-engine_size_na-vehicle_age_na-vehicle_weight_na",
    parameters: {
      distance: 1000,
      distance_unit: "km",
    },
  };

  useEffect(() => {
    api.post("estimate", formE85Data).then(({ data }) => {
      setE85Data(data);
    });
  }, []);
  useEffect(() => {}, [e85Data]);

  return (
    <SVehiclesEmissions>
      <section>
        <h1>
          Émissions moyennes de co2 des voitures par type de moteur en 2021
        </h1>
        <div>
          <img className="pic" src={GPL} alt="gpl" />
          <p>GPL : 198 kg / 1000 km</p>
        </div>
        <div>
          <img className="pic" src={Essence} alt="essence" />
          <p>Essence : {essenceData.co2e} kg / 1000 km</p>
        </div>
        <div>
          <img className="pic" src={gazNat} alt="gaznat" />
          <p>Gaz naturel : {naturalGasData.co2e} kg / 1000 kms</p>
        </div>
        <div>
          <img className="pic" src={Diesel} alt="diesel" />
          <p>Diesel : {dieselData.co2e} kg / 1000 km</p>
        </div>
        <div>
          <img className="pic" src={BioMethane} alt="BioMethane" />
          <p>Biomethane : {biomethaneData.co2e} kg / 1000 km</p>
        </div>
        <div>
          <img className="pic" src={superEthanol} alt="superEthanol" />
          <p>Supréthanol E85 : {e85Data.co2e} kg / 1000 km</p>
        </div>
        <div>
          <img className="pic" src={Electrique} alt="Electrique" />
          <p>Électrique : {electricData.co2e} kg / 1000 km</p>
        </div>
      </section>
    </SVehiclesEmissions>
  );
}
