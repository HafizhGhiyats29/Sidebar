import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SlSettings, SlArrowLeft } from "react-icons/sl";
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
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-10 w-72 bg-gray text-black px-6 py-6 transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-full h-full rounded-sm ">
          <p className="font-bold text-black text-xl px-6 pt-8 ">Layers</p>
          <hr className="w-48 mx-auto border border-gray-dark " />
          <div className="overflow-y-auto mt-3 max-h-[calc(84vh-72px)] scrollbar-thin">
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

          <button className="absolute flex text-black bottom-0 mb-6 py-4 px-6">
            <SlSettings className="mr-2 text-2xl font-bold" />
            Map Setting
          </button>
        </div>
        <button
          className={`absolute top-7 -right-9 transition duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleSidebarToggle}
        >
          <SlArrowLeft
            size={38}
            className="bg-white py-1 px-2 rounded-sm shadow-sm shadow-gray-dark"
          />
        </button>
      </div>
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          isSidebarOpen ? "ml-72" : ""
        }`}
      >
        <button
          className="absolute bg-white rounded-md py-2 px-2 top-8 ml-11"
          onClick={handleSidebarToggle}
        >
          <FaBars />
        </button>

        <img
          src="https://miro.medium.com/max/1200/1*1XFvsDgsLWnAL1GFnaDTOw.png"
          className="w-full h-full"
          alt="map contoh"
        />
      </div>
    </div>
  );
}

export default Sidebar;
