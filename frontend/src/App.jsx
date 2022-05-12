import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import Footer from "./components/Footer";
import Association from "./components/Association";

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
