import React from "react";
import RectangleBg from "../../assets/Rectangle-bg.png";
import SearchIcon from "../../assets/SearchIcon.png";
import ArrowIcon from "../../assets/arrow-down.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
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
            <h1 className="text-white max-w-[475px] font-medium text-xl mb-7">
              Generate mint lists or snapshots for Editions and Collections.
            </h1>
            <h1 className="text-[#0FEFA8] font-semibold text-3xl">Mint</h1>
            <h1 className="text-[#0FEFA8] font-normal my-3 text-xl">Creator</h1>
            <p className="text-white">
              Obtain all NFTs minted from the by the same creator.
            </p>
            <div className="pt-3">
              <h1 className="text-[#0FEFA8] font-normal my-3 text-xl">
                Edition
              </h1>
              <p className="text-white">
                Obtain all NFTs minted from an Edition.
              </p>
            </div>
            <div className="pt-3">
              <h1 className="text-[#0FEFA8] font-normal my-3 text-xl">
                Collection Key
              </h1>
              <p className="text-white">
                Obtain all NFTs in a Metaplex Certified Collection using the
                key.
              </p>
            </div>
            <div className="pt-7">
              <h1 className="text-[#0FEFA8] font-semibold text-3xl">
                Collection Mints
              </h1>
              <p className="text-white max-w-[520px] my-3 font-medium">
                You can obtain mint list filtered by traits using this feature.
                This Service cost 0.1 $APT
              </p>
              <p className="text-white max-w-[520px] my-3 font-medium">
                To airdrop NFTs to many wallets, use
                <a
                  href="/"
                  className="text-[#18C38D] text-lg font-semibold underline"
                >
                  AirdropTool
                </a>
              </p>
            </div>
          </div>
          <div className="basis-[40%]">
            <div className="rounded-[32px] border-2 border-[#077858] bg-[#282828B2] p-8">
              <div className="flex justify-between">
                <a
                  href="/"
                  className="py-4 basis-[49%] block text-center rounded-full bg-[#0F9FF0] font-semibold text-white"
                >
                  Mints
                </a>
                <a
                  href="/"
                  className="py-4 basis-[48%] block text-center border border-[#FFFFFF80] text-[#FFFFFF80] font-semibold rounded-full"
                >
                  Holers
                </a>
              </div>
              <div className="h-[1px] bg-[#FFFFFF33] w-full my-9" />
              <div className="flex justify-between">
                <a
                  href="/"
                  className="py-4 basis-[48%] block text-center rounded-full bg-[#0F9FF0] font-semibold text-white"
                >
                  Address
                </a>
                <a
                  href="/"
                  className="py-4 basis-[49%] block text-center border border-[#FFFFFF80] text-[#FFFFFF80] font-semibold rounded-full"
                >
                  Collection
                </a>
              </div>
            </div>
            <div className="relative pt-10">
              <input
                type="text"
                placeholder="Enter Creator address"
                className="h-full w-full border border-[#077858] bg-[#282828B2] pt-6 pb-6 pl-14 outline-none text-white rounded-full"
              />
              <img
                src={SearchIcon}
                alt="SearchIcon"
                className="absolute top-[3.8rem] w-[25px] left-[1rem]"
              />
            </div>
            <div className="relative pt-10">
              <input
                type="text"
                placeholder="Creator"
                className="h-full w-full border border-[#077858] bg-[#282828B2] pt-6 pb-6 pl-6 outline-none text-white rounded-full"
              />
              <img
                src={ArrowIcon}
                alt="ArrowIcon"
                className="absolute top-[4.45rem] w-[22px] right-[1.5rem]"
              />
            </div>
            <div className="relative pt-16">
              <button
                type="button"
                className="pt-5 rounded-full pb-5 w-full text-[#11122D] font-semibold text-lg"
                style={{
                  background:
                    "linear-gradient(90.28deg, #0FF0A9 5.28%, #19BE8A 96.09%)",
                }}
              >
                Load Mints
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
