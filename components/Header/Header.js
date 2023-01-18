
import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";


const items = [
  {
    key: "1",
    label: (
      <div className="flex justify-start py-[1.5rem] pl-[1.5rem] gap-2 items-center w-[306px]">
        <img
          src="../../language-orange.svg"
          className="w-[1.5rem]"
          alt=""
        />
        <p
          
          
          className="underline"
        >
          Select a Language
        </p>
      </div>
    ),
  },
  {
    key: "EN",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        English
      </p>
    ),
  },
  {
    key: "TR",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        Turkish
      </p>
    ),
  },
  {
    key: "AR",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        Arabic
      </p>
    ),
  },
  {
    key: "FR",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        French
      </p>
    ),
  },
];

const Header = () => {
  const [selects, setSelects] = useState("EN");
  const [isopen, setIsopen] = useState(false);
  const onClick = ({ key }) => {
    setSelects(key);
  };
  return (
    <header>
      <div
        className={`${
          isopen ? "hidden" : "flex"
        } md:flex bg-[#0f0f0f] text-white mt-6 md:mx-[5.125rem] mx-4 px-8 gap-4 justify-between items-center rounded-[2.5rem]`}
      >
        <FaBars
          className="md:hidden static w-8 h-8 mx-[0.87rem] cursor-pointer "
          onClick={() => setIsopen(true)}
        />
        <img
          src="../../logo.svg"
          className="h-8 my-6 md:ml-10 "
          alt=""
        />
        <div className="bg-[#FFC400] hover:bg-[#FFD028] w-8 h-8 rounded-full text-black flex justify-center items-center md:hidden">
          <HiDownload />
        </div>

        <ul className="md:flex hidden w-fit gap-[2vw] md:my-4  ml-[1.7rem] font-gt-walsheim-pro font-normal text-[1.11vw]  ">
          <li className="my-4 ">
            <a href="">FEATURES</a>
          </li>
          <li className="my-4 ">
            <a href="">PRIVACY POLICY</a>
          </li>
          <li className="my-4 ">
            <a href="">HELP CENTER</a>
          </li>
          <li className="my-4 ">
            <a href="">SECURITY</a>
          </li>
          <button className="bg-[#FFD028] text-[#0b0b0b] font-medium border-[0.5px] rounded-[2.62rem] w-[10vw] h-[3.125rem] flex items-center justify-center">
            Free Download
          </button>
        </ul>

        <Dropdown
          className="hidden md:flex mr-[2.62rem] rounded-[1.5rem] border-yellow-400 w-18  "
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: [selects],
            onClick,
          }}
          placement="bottom"
          arrow
        >
          <Button className="text-white flex gap-1 justify-between ">
            <img src="../../language.svg" alt="" />
            {selects}
          </Button>
        </Dropdown>
      </div>
      <div
        className={`${
          isopen ? "absolute" : "hidden"
        } md:hidden bg-[#0f0f0f] text-white w-full left-0 `}
      >
        <div className="flex justify-between items-center ml-[3.75rem] mr-8">
          <img
            src="../../logo.svg"
            className="h-8 my-6 md:ml-10 "
            alt=""
          />
          <FaTimes className="w-8 h-8 cursor-pointer" onClick={()=>setIsopen(false)} />
        </div>

        <ul className=" flex md:flex-row flex-col md:my-4  font-gt-walsheim-pro font-normal text-base ">
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8  ">
            <a href="" className="ml-[3.75rem] ">
              FEATURES
            </a>
          </li>
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8">
            <a href="" className="ml-[3.75rem]">
              PRIVACY POLICY
            </a>
          </li>
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8">
            <a href="" className="ml-[3.75rem] ">
              HELP CENTER
            </a>
          </li>
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8">
            <a href="" className="ml-[3.75rem] ">
              SECURITY
            </a>
          </li>
          <button className="ml-[3.75rem] mt-8 py-4 px-5 bg-[#FFD028] text-[#0b0b0b] text-base leading-[18px] font-medium border-[0.5px] rounded-[2.62rem] w-[9.25rem] text-center whitespace-nowrap">
            <span >Free Download</span> 
          </button>
        </ul>
        <div className="flex justify-between ml-[3.75rem] mb-24 mt-[15rem] items-center">
          <div>
          <p className="font-gt-walsheim-pro text-[8px] uppercase leading-[9px] ">
            Copyright @ 2021 All Right <br/> Reserved - Paramount
          </p>
          </div>
          <div>
          <Dropdown
            className="flex mr-[2.62rem] rounded-[1.5rem] border-yellow-400 w-18 font-gt-walsheim-pro"
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [selects],
              onClick,
            }}
            placement="bottom"
            arrow
          >
            <Button className="text-white flex gap-1 justify-between ">
              <img src="../../language.svg" alt="" />{" "}
              {selects}
            </Button>
          </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
