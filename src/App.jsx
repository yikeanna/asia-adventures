
import Navbar from './layout/Navbar/Navbar';

// import Navbar from './.../.../Navbar';
import Footer from "./layout/Footer/Footer";
import { Route, Routes } from "react-router-dom"
import Home from './views/Home'
import About from "./views/About";

import CityPage from "./views/CityPage";
function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chengdu" element={<CityPage cityName="Chengdu" />} />
            <Route path="/chongqing" element={<CityPage cityName="Chongqing" />} />
            <Route path="/zhangjiajie" element={<CityPage cityName="Zhangjiajie" />} />
            <Route path="/changsha" element={<CityPage cityName="Changsha" />} />
            <Route path="/wuhan" element={<CityPage cityName="Wuhan" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
