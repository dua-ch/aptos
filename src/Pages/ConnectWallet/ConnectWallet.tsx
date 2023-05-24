import React from "react";
import UserIcon from "../../assets/User-Icon.png";
import UsersIcon from "../../assets/Users-Icon.png";
import RectangleBg from "../../assets/Rectangle-bg.png";
import SearchIcon from "../../assets/SearchIcon.png";
import aptosNft from "../../assets/aptos-nft.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ConnectWallet: React.FC = () => {
  const Data = [
    { id: 1, image: aptosNft },
    { id: 2, image: aptosNft },
    { id: 3, image: aptosNft },
    { id: 4, image: aptosNft },
    { id: 5, image: aptosNft },
    { id: 6, image: aptosNft },
    { id: 7, image: aptosNft },
    { id: 8, image: aptosNft },
    { id: 9, image: aptosNft },
    { id: 10, image: aptosNft },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-custom-connect-wallet">
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
          <div className="basis-[40%]">
            <div className="rounded-[32px] border-2 border-[#077858] bg-[#282828B2] p-8">
              <div className="flex justify-between">
                <a
                  href="/"
                  className="py-4 basis-[49%] text-center rounded-full bg-[#0F9FF0] font-semibold text-white"
                >
                  NFTs
                </a>
                <a
                  href="/"
                  className="py-4 basis-[48%] text-center border border-[#FFFFFF80] text-[#FFFFFF80] font-semibold rounded-full"
                >
                  TOKENS
                </a>
              </div>
              <div className="h-[1px] bg-[#FFFFFF33] w-full mb-12 mt-9" />
              <div className="flex items-center justify-between">
                <div className="basis-[48%]">
                  <p className="text-[#FFFFFFB2]">
                    Select the NFT(s) you wish to transfer
                  </p>
                </div>
                <div className="basis-[50%] flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-full border basis-[48%] py-3 border-[#0F9FF0] text-[#0F9FF0]"
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    className="rounded-full border basis-[48%] py-3 border-[#FFFFFF80] text-[#FFFFFF80]"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-11">
                <a
                  href="/"
                  className="py-4 basis-[48%] text-center rounded-full bg-[#0F9FF0] font-semibold text-white"
                >
                  Sent to One
                </a>
                <a
                  href="/"
                  className="py-4 basis-[49%] text-center border border-[#FFFFFF80] text-[#FFFFFF80] font-semibold rounded-full"
                >
                  Sent to Many
                </a>
              </div>
              <div className="relative pt-12">
                <input
                  type="text"
                  placeholder="Enter Creator address"
                  className="h-full w-full border border-[#077858] bg-[#282828B2] pt-6 pb-6 pl-14 outline-none text-white rounded-full"
                />
                <img
                  src={SearchIcon}
                  alt="SearchIcon"
                  className="absolute top-[4.4rem] w-[25px] left-[1rem]"
                />
              </div>
            </div>
            <div className="relative pt-14">
              <div className="h-full w-full border border-[#077858] bg-[#282828B2] pt-5 pb-5 text-center outline-none text-white rounded-full">
                <span className="text-white font-semibold text-lg">
                  No NFT(s) Selected
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1290px] m-auto px-4 pb-20">
          <div className="rounded-[32px] border-2 border-[#077858] border-dashed bg-[#282828B2] p-8">
            <div className="flex items-center justify-between">
              <label className="text-white font-semibold block relative pl-[35px] cursor-pointer text-xl select-none">
                Heartstone
                <input
                  type="checkbox"
                  checked
                  id="Heartstone"
                  className="absolute opacity-0 w-0 h-0 cursor-pointer"
                />
                <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-[#282828B2] border border-white rounded-[4px]"></span>
              </label>
              <p className="text-white font-medium text-lg">
                10 &nbsp;
                <span className="text-[#FFFFFF99]">Selected</span>
              </p>
            </div>
            <div className="flex justify-between flex-wrap">
              {Data.length > 0 ? (
                Data.map((item, index) => {
                  return (
                    <div className="basis-[18.5%]" key={item.id}>
                      <label className="border-2 border-[#077858] block rounded-lg relative cursor-pointer mt-6">
                        <img src={aptosNft} alt="aptosNft" />
                        <input
                          type="checkbox"
                          id="aptosNft"
                          checked
                          className="absolute opacity-0 w-0 h-0 cursor-pointer"
                        />
                        <span className="aptosNft absolute top-[0.5rem] right-[0.5rem] h-[25px] w-[25px] rounded-full z-20 border bg-[#ffffff10] border-white"></span>
                      </label>
                    </div>
                  );
                })
              ) : (
                <div>No Data Found</div>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1290px] m-auto px-4 pb-20">
          <div className="rounded-[32px] border-2 border-[#077858] border-dashed bg-[#282828B2] p-8">
            <div className="flex items-center justify-between">
              <label className="text-white font-semibold block relative pl-[35px] cursor-pointer text-xl select-none">
                Heartstone
                <input
                  type="checkbox"
                  id="Heartstone"
                  className="absolute opacity-0 w-0 h-0 cursor-pointer"
                />
                <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-[#282828B2] border border-white rounded-[4px]"></span>
              </label>
              <p className="text-white font-medium text-lg">
                0 &nbsp;
                <span className="text-[#FFFFFF99]">Selected</span>
              </p>
            </div>
            <div className="flex justify-between flex-wrap">
              {Data.length > 0 ? (
                Data.map((item, index) => {
                  return (
                    <div className="basis-[18.5%]" key={item.id}>
                      <label className="border-2 border-[#077858] block rounded-lg relative cursor-pointer mt-6">
                        <img src={aptosNft} alt="aptosNft" />
                        <input
                          type="checkbox"
                          id="aptosNft"
                          className="absolute opacity-0 w-0 h-0 cursor-pointer"
                        />
                        <span className="aptosNft absolute top-[0.5rem] right-[0.5rem] h-[25px] w-[25px] rounded-full z-20 border bg-[#ffffff10] border-white"></span>
                      </label>
                    </div>
                  );
                })
              ) : (
                <div>No Data Found</div>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1290px] m-auto px-4 pb-20">
          <div className="rounded-[32px] border-2 border-[#077858] bg-[#282828B2] p-8">
            <input
              type="text"
              placeholder="Wallet address, .sol domain or @twitter"
              className="h-full w-full border border-[#077858] bg-[#282828B2] pt-6 pb-6 pl-8 outline-none text-white rounded-full"
            />
            <div className="flex justify-between items-center pt-8">
              <button
                type="button"
                className="basis-[24%] border border-[#FFFFFF80] text-[#FFFFFF80] pt-5 pb-5 rounded-full text-lg font-semibold"
              >
                Reset
              </button>
              <button
                type="button"
                className="basis-[74%] border border-transparent pt-5 pb-5 rounded-full text-lg font-semibold"
                style={{
                  background:
                    "linear-gradient(90.28deg, #0FF0A9 5.28%, #19BE8A 96.09%)",
                }}
              >
                Confirm (10)
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ConnectWallet;
