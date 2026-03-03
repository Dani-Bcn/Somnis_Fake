import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Somnis from "./pages/Somnis";
import Footer from "./Footer";
import Aniversari from "./pages/Aniversari";
import King from "./pages/King";
import Sleep from "./pages/Sleep";
import Podium_plus from "./pages/Podium_plus";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/somnis"} element={<Somnis />} />
        <Route path={"/aniversari"} element={<Aniversari />} />
        <Route path={"/king"} element={<King />} />
        <Route path={"/sleep"} element={<Sleep />} />
        <Route path={"/podiumplus"} element={<Podium_plus />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
