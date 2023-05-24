import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-black.png";

const Navbar: React.FC = () => {
  return (
    <div className="max-w-[1290px] m-auto px-4 py-4 flex items-center justify-between">
      <a href="/">
        <img src={Logo} alt="l" />
      </a>
      <Link
        to="/connectwallet"
        className="py-3 px-8 rounded-full font-medium"
        style={{
          background:
            "linear-gradient(90.28deg, #0FF0A9 5.28%, #19BE8A 96.09%)",
          boxShadow: "0px 2px 20px rgba(15, 240, 169, 0.2)",
        }}
      >
        Select Wallet
      </Link>
    </div>
  );
};

export default Navbar;
