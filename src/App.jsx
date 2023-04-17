import Cards from "./Components/Cards/Cards";
import Singlepr from "./Components/Cards/Singlepr";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import Korzina from "./Pages/Korzina/Korzina";
import Service from "./Pages/Service/Service";
import Single from "./Pages/Single";
import "./index.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
