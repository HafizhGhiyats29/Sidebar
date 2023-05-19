import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Checkbox from "../Checkbox";

const Teritorial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef();
  const [iconPosition, setIconPosition] = useState("down");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIconPosition(iconPosition === "down" ? "up" : "down");
  };

  return (
    <div className="">
      <div className="flex bg-white py-3 px-2 rounded-sm cursor-pointer" onClick={toggleMenu}>
        <p className="text-xs sm:text-sm">TNI AL</p>
        <div className="ml-auto">{iconPosition === "down" ? <FaChevronDown className="w-4 h-4" /> : <FaChevronUp className="w-4 h-4" />}</div>
      </div>
      {isOpen && (
        <div className=" py-2 px-6 text-xs bg-[#FFFFFF] rounded-md">
          <ul>
            <li>
              <Checkbox label="Armada Satu" type="checkbox" showCircle={true} circleColor="bg-red" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Armada Dua" type="checkbox" showCircle={true} circleColor="bg-yellow" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Armada Tiga" type="checkbox" showCircle={true} circleColor="bg-blue-sky" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Lanal" type="checkbox" showCircle={true} circleColor="bg-green" reference={checkboxRef} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Teritorial;
