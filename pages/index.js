import Header from "../components/Header/Header.js";
import { IoIosArrowForward } from "react-icons/io";


export default function Home() {

  return (
    <>
      <Header />

      {/* Row1 */}
      <div className="md:flex md:flex-row justify-between md:mt-8 mt-[4.5rem] md:gap-[16rem]">
        <div className=" md:pl-[12rem] md:mt-[6.87rem] pl-4 pr-5 md:pr-0 md:w-[45.68rem]">
          <h2 className="text-[#0B0B0B] text-[2.25rem] md:text-[3.75rem] font-gt-walsheim-pro font-normal  md:leading-[4.31rem] leading-[2.56rem] capitalize tracking-[-0.02em]">You've never received an admission so fast before.
            
            
            
          </h2>
          <p className="font-gt-walsheim-pro font-medium text-sm md:text-[1.12rem] leading-4 md:leading-6 text-[#424242] mt-4">
            Paramount Students is a platform that connects you with the right universities abroad to pursue your dream education and also settle down in your new community. All in one app!
          </p>
          <div className="md:flex hidden flex-row">
            <div className="flex justify-start items-center ml-9 md:ml-0 mt-[2.25rem] ">
              <img src="../../app-store.svg" alt="" className="w-5 h-5 mr-1" />
              <span>iPhone</span>
              <IoIosArrowForward className="ml-3" />
            </div>
            <div className="flex justify-start items-center ml-9 mt-8 ">
              <img src="../../playstore.svg" alt="" className="w-5 h-5 mr-1" />
              <span>Android</span>
              <IoIosArrowForward className="ml-3" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[1.12rem] ">
          <div className="md:hidden static">
            <div className="flex justify-start items-center ml-9 mt-[2.25rem] ">
              <img src="../../app-store.svg" alt="" className="w-5 h-5 mr-1" />
              <span>iPhone</span>
              <IoIosArrowForward className="ml-3" />
            </div>
            <div className="flex justify-start items-center ml-9 mt-8 ">
              <img src="../../playstore.svg" alt="" className="w-5 h-5 mr-1" />
              <span>Android</span>
              <IoIosArrowForward className="ml-3" />
            </div>
          </div>

          <div className=" mr-1">
            <img
              src="../../row1.png"
              alt=""
              className=" md:min-w-[25rem] md:h-[38rem] w-[15.12rem] h-[23rem]"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

