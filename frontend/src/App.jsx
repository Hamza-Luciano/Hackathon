import VehiclesEmissions from "@components/VehiclesEmissions";

import { Routes, Route } from "react-router-dom";
import Association from "./components/Association";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import CardForm from "./components/CardForm";
import Association from "./components/Association";


function App() {
  return (
    <div className="App">
      <Home />
      <VehiclesEmissions />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association" element={<Association />} />
        <Route path="/mycity" element={<CardForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
