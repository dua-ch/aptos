import React from "react";
import RectangleBg from "../../assets/Rectangle-bg.png";
import UserIcon from "../../assets/User-Icon.png";
import UsersIcon from "../../assets/Users-Icon.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Foxysend: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-custom">
        <div className="pt-16">
          <div className="max-w-[620px] flex items-center justify-between m-auto">
            <h1 className="text-white text-4xl font-semibold">AirdropTool</h1>
            <div className="relative">
              <img
                src={RectangleBg}
                alt="RectangleBg"
                className="max-w-[380px]"
              />
              <p className="text-[#11122D] absolute top-0 left-0 flex items-center justify-center w-full h-full">
                <span className="text-[#11122D] font-semibold text-xl">
                  fees 0.001 $APT per NFT
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1290px] m-auto px-4 py-20 flex justify-between">
          <div className="basis-[57%] rounded-[32px] border-2 border-[#077858] bg-[#282828B2] p-8">
            <h1 className="text-white max-w-[550px] font-medium text-xl mb-7">
              Got Too Many NFTs/Tokens?Transfer them in bulk using FoxySend!
            </h1>
            <h1 className="text-[#0FEFA8] font-semibold text-3xl">NFTs</h1>
            <p className="text-white pt-3 font-medium">
              This Service costs
              <span className="text-[#18C38D] font-medium text-lg">
                0.002 APT
              </span>
              per NFT.
            </p>
            <div className="mt-7">
              <div className="flex items-center">
                <img
                  src={UserIcon}
                  alt="User-Icon"
                  className="max-w-[22px] mr-2"
                />
                <span className="text-[#0FEFA8] font-normal text-xl">
                  Sent to One
                </span>
              </div>
              <p className="text-white mt-5">
                Send single/multiple NFTs to one address.
              </p>
            </div>
            <div className="mt-7">
              <div className="flex items-center">
                <img
                  src={UsersIcon}
                  alt="User-Icon"
                  className="max-w-[24px] mr-2"
                />
                <span className="text-[#0FEFA8] font-normal text-xl">
                  Sent to Many
                </span>
              </div>
              <p className="text-white mt-5 max-w-[92%] leading-7">
                Send multiple NFTs to multiple addresses.NFTs will be randomly
                distributed to one per receipient. Number of selected NFTs must
                match number of receipients! In case of any failure, the failed
                addresses will be added to retry.
              </p>
            </div>
            <div className="pt-7">
              <h1 className="text-[#0FEFA8] font-semibold text-3xl">Tokens</h1>
              <p className="text-white max-w-[520px] mt-3 font-medium text-lg">
                This Service costs{" "}
                <span className="text-[#18C38D] font-medium text-lg">
                  0.002 APT
                </span>{" "}
                APT per transaction.
              </p>
            </div>
          </div>
          <div className="basis-[40%] flex items-center justify-center">
            <div>
              <h1 className="italic text-[#18C38D] text-center font-bold text-2xl">
                Please connect your wallet.
              </h1>
              <p className="text-white text-center">
                It's in the top-right corner, way up there.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Foxysend;
