import React from "react";
import Discord from "../../assets/discord.png";
import LinkedIn from "../../assets/Linkedin.png";
import Twitter from "../../assets/Twitter.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#282828] py-6 flex items-center justify-center">
      <ul className="flex items-center gap-[1rem]">
        <li>
          <a
            href="/"
            className="bg-[#FFFFFF1A] rounded-full h-[44px] w-[44px] flex items-center justify-center"
          >
            <img src={Discord} alt="Discord" className="w-[24px]" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="bg-[#FFFFFF1A] rounded-full h-[44px] w-[44px] flex items-center justify-center"
          >
            <img src={Twitter} alt="Twitter" className="w-[24px]" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="bg-[#FFFFFF1A] rounded-full h-[44px] w-[44px] flex items-center justify-center"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-[24px]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
