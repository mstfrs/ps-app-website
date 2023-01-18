import Header from "../components/Header/Header.js";
import { IoIosArrowForward } from "react-icons/io";
import { Carousel } from "antd";
import Lottie from 'react-lottie';
import frame3 from "../assets/Animations/Frame 3.json"


export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: frame3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      <Header />

      {/* Row1 */}
      <div className="md:flex md:flex-row justify-between md:mt-8 mt-[4.5rem] md:gap-[16rem]">
        <div className=" md:pl-[12rem] md:mt-[6.87rem] pl-4 pr-5 md:pr-0 md:w-[45.68rem]">
          <h2 className=" row1-title text-[#0B0B0B] font-gt-walsheim-pro font-normal  md:leading-[4.31rem] leading-[2.56rem] capitalize tracking-[-0.02em]">
            You've never received an admission so fast before.
          </h2>
          <p className="font-gt-walsheim-pro font-medium text-sm md:text-[1.12rem] leading-4 md:leading-6 text-[#424242] mt-4">
            Paramount Students is a platform that connects you with the right
            universities abroad to pursue your dream education and also settle
            down in your new community. All in one app!
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

      {/* Row2 */}

      <div className="pb-20 md:pb-[3.3rem]">
        <div className="font-gt-walsheim-pro capitalize text-center mx-4">
          <h2 className="row2-title font-medium leading-[120%] tracking-[0.01em] md:leading-[2.8rem] text-[#0B0B0B]   mt-[4.5rem]">
            The most secure education system{" "}
            <span className="text-[#FFC400]"> paramount students</span> has.
          </h2>
          <p className=" row2-text font-normal leading-4 text-[#424242] mt-4">
            With over 50+ universities, 200 high schools, and 7000 registered
            students
          </p>
        </div>

        <div className="flex justify-center mt-[3.75rem]  md:hidden">
        <div className=" w-[21.5rem] text-center">
          <Carousel effect="fade" autoplay dots={false} >
            <div className="text-center font-medium">
              <img
                src="../../row2-1.png"
                alt=""
                className="w-[21.5rem] h-[19-18rem] "
              />
              <h3 className="font-gt-walsheim-pro text-lg leading-[1.25rem] capitalize text-[#0B0B0B] mt-4 ">
                200+ High Schools
              </h3>
            </div>
            <div className="text-center font-medium">
              <img
                src="../../row2-2.png"
                alt=""
                className="w-[21.5rem] h-[19-18rem]"
              />
              <h3 className="font-gt-walsheim-pro text-lg leading-[1.25rem] capitalize text-[#0B0B0B] mt-4 ">
                7000+ Students
              </h3>
            </div>
            <div className="text-center font-medium">
              <img
                src="../../row2-3.png"
                alt=""
                className="w-[21.5rem] h-[19-18rem]"
              />
              <h3 className="font-gt-walsheim-pro text-lg leading-[1.25rem] capitalize text-[#0B0B0B] mt-4 ">
                50+ Universities
              </h3>
            </div>
          </Carousel>
        </div>
        </div>

        <div className="hidden md:flex mt-[5rem] flex-row gap-[5.25rem] px-[7.5rem]">
        <div className="text-center font-medium">
              <img
                src="../../row2-1.png"
                alt=""
                className="  "
              />
              <h3 className="font-gt-walsheim-pro text-lg leading-[1.25rem] capitalize text-[#0B0B0B] mt-4 ">
                200+ High Schools
              </h3>
            </div>
            <div className="text-center font-medium">
              <img
                src="../../row2-2.png"
                alt=""
                className=""
              />
              <h3 className="font-gt-walsheim-pro text-lg leading-[1.25rem] capitalize text-[#0B0B0B] mt-4 ">
                7000+ Students
              </h3>
            </div>
            <div className="text-center font-medium">
              <img
                src="../../row2-3.png"
                alt=""
                className=""
              />
              <h3 className="font-gt-walsheim-pro text-lg leading-[1.25rem] capitalize text-[#0B0B0B] mt-4 ">
                50+ Universities
              </h3>
            </div>
          </div>


      </div>

      {/* Row3 */}

      <div className="font-gt-walsheim-pro  md:mt-[6.25rem] mt-12 md:mr-[7.5rem]">
        <div className="">
          <h2 className="row3-title1 capitalize px-4 text-center leading-8 md:leading-[2.87rem] tracking-[-0.01em] text-[#0B0B0B] self-stretch">How Does Paramount Students Mobile app work</h2>
          <p className="row3-text1 capitalize text-center leading-[1.31rem] md:leading-6 text-[#424242] self-stretch mt-2 md:mt-4">Swift onboarding and user-friendly features</p>

        </div>
        <div className="md:flex md:flex-row-reverse justify-center gap-[12.18rem] md:mt-16">
        <div className="mt-[3.75rem] ml-4 md:mt-[7.18rem]">
          <h2 className=" row3-title2 font-medium text-[#0B0B0B] leading-8 md:leading-[2.87rem] tracking-[0.005em] self-stretch">Sign up for and fill out your educational background.</h2>
          <p className="row3-text2 capitalize mt-4 leading-4 md:leading-6 text-[#424242] text-justify">Paramount Students is a platform that connects you with the right universities abroad to pursue your dream education and also settle down in your new community. All in one app!</p>
          <div className="row3-text3 rounded-[1.25rem] border-[0.5px] w-[20.5rem] h-10 border-[#5151FD] px-2 pl-3 flex items-center mt-4 ">
            <p className="row3-text3 capitalize">Learn more about Sign Up Process</p>
            <IoIosArrowForward className="ml-4 text-[#131313] " /></div>
        </div>
        <div className="flex justify-center mt-12 md:ml-[12.18rem]">
        <img
              src="../../row3.png"
              alt=""
              className=" md:min-w-[21.9rem] md:h-[44.5rem] w-[10.96rem] h-[22.25rem]"
            />
            </div>
        </div>

      </div>

      {/* Row4 */}
      <div className="relative mt-[-6.12rem] z-20 text-white bg-[#0f0f0f]">
        <div className="mx-4 font-gt-walsheim-pro pt-[6.12rem] tracking-[0.005em]">
          <h2 className="row4-title1 font-bold leading-8  ">
          Find your dream university and program, as well as a huge number of scholarships.
          </h2>
          <p className=" row4-text1 leading-4 mt-4 capitalize">
          Paramount Students is a platform that connects you with the right universities abroad to pursue your dream education and also settle down in your new community. All in one app!
          </p>
        </div>
        <div className="mt-12">
          <Lottie options={defaultOptions}
              height={500}
              width={450}/>
        </div>
      </div>
    </>
  );
}
