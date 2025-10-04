import { useState } from "react";
import "./DropdownMenu.css";
import arrow from "../../assets/images/arrow.png";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(["En"]);
  const [unselectedOption, unsetSelectedOption] = useState([
    "Russian",
    "日本語",
    "中文",
  ]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option, unoption) => {
    setSelectedOption(option);
    unsetSelectedOption(unoption);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <p className="header__nav__lang--text">{selectedOption}</p>
        <img className={"header__nav__lang--img"} src={arrow} />
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {unselectedOption.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(unselectedOption, selectedOption)}
            >
              <p className="dropmenu--list">{option}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
