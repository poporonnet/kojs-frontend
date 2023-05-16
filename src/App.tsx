import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Notfound } from "./pages/notfound.tsx";
import "./App.css";
import { Help } from "./pages/help.tsx";
import { StadionHome } from "./pages/stadion-home";
import {StadionRoot} from "./pages/Stadion/StadionRoot.tsx";
import {StadionDescription} from "./pages/Stadion/StadionDescription.tsx";
import {StadionProblem} from "./pages/Stadion/StadionProblem.tsx";
import {StadionResult} from "./pages/Stadion/StadionResult.tsx";
import {StadionRanking} from "./pages/Stadion/StadionRanking.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/stadion" element={<StadionHome />} />
        <Route path=":stadionId" element={<StadionRoot />} >
          <Route path="description" element={<StadionDescription />} />
          <Route path=":problemId/problem" element={<StadionProblem />} />
          <Route path="result" element={<StadionResult />} />
          <Route path="ranking" element={<StadionRanking />} />
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
