import { Routes, Route } from "react-router-dom";
import Association from "./components/Association";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import CardForm from "./components/CardForm";
import VehiclesEmissions from "./components/VehiclesEmissions";
import Head from "./components/Head";

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association" element={<Association />} />
        <Route path="/mycity" element={<CardForm />} />
        <Route path="/articles" element={<VehiclesEmissions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
