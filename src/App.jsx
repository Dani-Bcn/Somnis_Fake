import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Viscoelastica from "./pages/Viscoelastica";
import Footer from "./Footer";
import Somiador from "./pages/Somiador";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/viscoelastica"} element={<Viscoelastica />} />
        <Route path={"/somiador"} element={<Somiador />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
