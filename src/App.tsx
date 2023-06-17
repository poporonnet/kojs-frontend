import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Notfound } from "./pages/notfound.tsx";
import "./App.css";
import { Help } from "./pages/help.tsx";
import { Playground } from "./pages/playground";
import { StadionHome } from "./pages/stadion-home";
import { StadionRoot } from "./pages/Stadion/StadionRoot.tsx";
import { StadionDescription } from "./pages/Stadion/StadionDescription.tsx";
import { StadionProblem } from "./pages/Stadion/StadionProblem.tsx";
import { StadionResult } from "./pages/Stadion/StadionResult.tsx";
import { StadionRanking } from "./pages/Stadion/StadionRanking.tsx";
import { Footer } from "./components/footer";
import { Login } from "./pages/login";
import { Mypage } from "./pages/mypage";
import { CreateAccount } from "./pages/create-account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/stadion" element={<StadionHome />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="stadion/:stadionId" element={<StadionRoot />}>
          <Route path="description" element={<StadionDescription />} />
          <Route path=":problemId/problem" element={<StadionProblem />} />
          <Route path="result" element={<StadionResult />} />
          <Route path="ranking" element={<StadionRanking />} />
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
