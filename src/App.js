import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CarReport from "./Pages/CarReport";
import HeavyDutyReport from "./Pages/HeavyDutyReport";
import BikeReport from "./Pages/BikeReport";
import SignUpForm from "./Pages/SignUpForm";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-report" element={<CarReport />} />
        <Route path="/heavy-duty-truck-report" element={<HeavyDutyReport />} />
        <Route path="/motor-bikes-reports" element={<BikeReport />} />
        <Route path="/signup-form" element={<SignUpForm />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
