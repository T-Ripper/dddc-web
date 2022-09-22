import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import History from "./Pages/History";
import OurUniquenes from "./Pages/OurUniqueness";
import Belief from "./Pages/Belief";
import HomePage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Give from "./Pages/Give";
import Footer from "./Components/Footer/Footer";
import Media from "./Pages/Media";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/uniqueness" element={<OurUniquenes />} />
        <Route path="/belief" element={<Belief />} />
        <Route path="/media" element={<Media />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
