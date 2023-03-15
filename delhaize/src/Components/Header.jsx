import React from "react";
import HeaderCSS from "./Header.module.css";
import Logo from "../Images/Logo.svg";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <img src={Logo} className={HeaderCSS.logo} alt="logo" />
      <SearchBar />
      <div className={HeaderCSS.buttonContainer}>
        <button className={HeaderCSS.aanmelden}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 9.17a3.33 3.33 0 1 1 0-6.67 3.33 3.33 0 0 1 0 6.67z"
              opacity="0.3"
            ></path>
            <path d="M2.5 16.83c.32-3.98 3.55-6 7.49-6 3.99 0 7.26 1.91 7.5 6 .02.17 0 .67-.62.67H3.11c-.21 0-.63-.45-.6-.67z"></path>
          </svg>
          <p>Aanmelden</p>
        </button>
        <button className={HeaderCSS.winkelmandje}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M2.65 3.4a.98.98 0 1 0 0 1.96h.94l1.3 5.52.54 3.31v.01a1 1 0 0 0 1.17.81l9.2-1.67a1 1 0 0 0 .79-.71l1.43-5.01a1 1 0 0 0-.96-1.28H5.84l-.51-2.19a.98.98 0 0 0-.96-.76H2.65zM14.58 16a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-7.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"></path>
          </svg>
          <p>0</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
