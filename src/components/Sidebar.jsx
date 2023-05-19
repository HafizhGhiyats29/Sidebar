import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import Hamburger from "hamburger-react";
import Teritorial from "./Layer/Teritorial";
import Batas from "./Layer/Batas";
import WilayahDarat from "./Layer/WilayahDarat";
import WilayahLaut from "./Layer/WilayahLaut";
import Navigasi from "./Layer/Navigasi";
import Cuaca from "./Layer/Cuaca";
import Udara from "./Layer/Udara";
import Laporan from "./Layer/Laporan";
import Vital from "./Layer/Vital";
import Radar from "./Layer/Radar";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" flex h-screen">
      <div className={`fixed inset-y-0 left-0 z-10 w-72 bg-[#f5f5f5] text-black px-5 py-4 transform transition duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <p className=" text-black text-2xl ">Layers</p>
        <div className=" mt-3 mr-2  max-h-[calc(84vh-72px)] scrollbar-thin">
          <ul className="space-y-3">
            <li>
              <Teritorial />
            </li>
            <li>
              <Batas />
            </li>
            <li>
              <WilayahDarat />
            </li>
            <li>
              <WilayahLaut />
            </li>
            <li>
              <Navigasi />
            </li>
            <li>
              <Cuaca />
            </li>
            <li>
              <Radar />
            </li>
            <li>
              <Udara />
            </li>
            <li>
              <Laporan />
            </li>
            <li>
              <Vital />
            </li>
          </ul>
        </div>
        <div clasname="">
          <button className={`absolute top-7 -right-14  bg-white  rounded-md transition duration-300 ${isSidebarOpen ? "opacity-80" : ""}`} onClick={handleSidebarToggle}>
            <Hamburger size={20} />
          </button>
        </div>
      </div>
      <div className={`flex-1  overflow-y-auto duration-300 ${isSidebarOpen ? "ml-72" : ""}`}>
        <img src="https://miro.medium.com/max/1200/1*1XFvsDgsLWnAL1GFnaDTOw.png" className="w-full h-full" alt="map contoh" />
      </div>
    </div>
  );
}

export default Sidebar;
