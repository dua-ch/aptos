import React from "react";
import { Routes, Route } from "react-router-dom";
import ConnectWallet from "./Pages/ConnectWallet/ConnectWallet";
import Foxysend from "./Pages/Foxysend/Foxysend";
import Home from "./Pages/Home/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foxysend" element={<Foxysend />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
      </Routes>
    </>
  );
};

export default App;
