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
      <div
        className="flex bg-gray py-3 px-2 mr-1 ml-3 rounded-sm cursor-pointer"
        onClick={toggleMenu}
      >
        <p className="text-xs sm:text-sm">Teritorial MIliter</p>
        <div className="ml-auto">
          {iconPosition === "down" ? (
            <FaChevronDown className="w-4 h-4" />
          ) : (
            <FaChevronUp className="w-4 h-4" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mr-2 ml-3 my-2 py-2 px-6 text-xs bg-white-grey rounded-md">
          <ul>
            TNI AL
            <hr className="w-46 mx-auto border-1 border-gray-dark" />
            <li>
              <Checkbox
                label="Armada Satu"
                type="checkbox"
                showCircle={true}
                circleColor="bg-red"
                reference={checkboxRef}
              />
            </li>
            <li>
              <Checkbox
                label="Armada Dua"
                type="checkbox"
                showCircle={true}
                circleColor="bg-yellow"
                reference={checkboxRef}
              />
            </li>
            <li>
              <Checkbox
                label="Armada Tiga"
                type="checkbox"
                showCircle={true}
                circleColor="bg-blue-sky"
                reference={checkboxRef}
              />
            </li>
            <li>
              <Checkbox
                label="Lanal"
                type="checkbox"
                showCircle={true}
                circleColor="bg-green"
                reference={checkboxRef}
              />
            </li>
          </ul>
          <ul className="mt-2">
            TNI AU
            <hr className="w-46 mx-auto border-1 border-gray-dark" />
            <li>
              <Checkbox
                label="Komando Operasi"
                type="checkbox"
                reference={checkboxRef}
              />
            </li>
            <li>
              <Checkbox
                label="Komando Sector"
                type="checkbox"
                reference={checkboxRef}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Teritorial;