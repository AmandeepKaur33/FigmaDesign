import React, { useEffect, useRef, useState } from "react";
import SidebarElements from "./Helpers/SidebarElements";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});
  const navLinks = ["About Me", "Experiences", "Recommanded"];
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeTab];
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="bg-[#363C43] px-3 py-5 w-full lg:h-1/2 flex items-start">
      <SidebarElements />
      <div className="w-full lg:w-[720px] h-full px-3 flex flex-col gap-5">
        <ul className="w-full h-12 bg-[#171717] rounded-3xl mr-2 flex items-center justify-between gap-[6px] relative ">
          <li
            className="absolute top-0 h-full w-48 z-0 bg-[#28292F] rounded-2xl "
            style={{
              width: `${sliderStyle.width}px`,
              left: `${sliderStyle.left}px`,
              transition: "all 0.5s ease",
            }}
          ></li>
          {navLinks?.map((item, index) => (
            <li
              ref={(el) => (tabRefs.current[item] = el)}
              key={index}
              className={`z-10 cursor-pointer ${
                activeTab === item
                  ? "text-white before:w-48 before:h-full before:bg-[#7a8eff]"
                  : "text-[#A3ADB2]"
              }  px-6 py-2 text-lg font-medium`}
              onClick={() => {
                setActiveTab(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[#969696]">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. <br />
          <br />I was born and raised in Albany, NY& have been living in Santa
          Carla for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
      <div className="w-10 flex justify-center">
        <div className="w-2 h-16 bg-gradient-to-b from-[#888989] to-[#4A4E54] rounded-lg "></div>
      </div>
    </div>
  );
};

export default TabsWidget;