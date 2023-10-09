
import Navbar from './Navbar';
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About";

import CityPage from "./pages/CityPage";
function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chengdu" element={<CityPage cityName="Chengdu"/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
