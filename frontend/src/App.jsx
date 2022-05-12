import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Links />
    </div>
  );
}

export default App;
