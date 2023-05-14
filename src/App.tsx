import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Notfound } from "./pages/notfound.tsx";
import "./App.css";
import "./css/header.css";
import {Help} from "./pages/help.tsx";
import {StadionHome} from "./pages/stadion-home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
          <Route path="/stadion" element={<StadionHome />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
