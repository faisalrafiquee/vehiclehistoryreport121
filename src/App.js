import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CarReport from "./Pages/CarReport";
import HeavyDutyReport from "./Pages/HeavyDutyReport";
import BikeReport from "./Pages/BikeReport";
import SignUpForm from "./Pages/SignUpForm";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//production  AalGkU6PM0G2dhULH_fqfBRGTZpu9Oel0wYXDGAk7uZ8tUY0IMz4a_XLBwCAZgZOUoF1eXNiKa8Ll0VG
//sandbox AUHBx6LBvzXP613OiWpnM96i66nTR32-9o-NTAAQ9PAAdIHyTTXzEFhJYkZc9r8h7x7CbbXIu4cmpn0f
const App = () => {
  return (
    <>
      <PayPalScriptProvider options={{clientId:'AalGkU6PM0G2dhULH_fqfBRGTZpu9Oel0wYXDGAk7uZ8tUY0IMz4a_XLBwCAZgZOUoF1eXNiKa8Ll0VG'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-report" element={<CarReport />} />
          <Route
            path="/heavy-duty-truck-report"
            element={<HeavyDutyReport />}
          />
          <Route path="/motor-bikes-reports" element={<BikeReport />} />
          <Route path="/signup-form" element={<SignUpForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </PayPalScriptProvider>
    </>
  );
};

export default App;
