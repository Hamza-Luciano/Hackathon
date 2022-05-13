import { Routes, Route } from "react-router-dom";
import Association from "./components/Association";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association" element={<Association />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
