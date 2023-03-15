import React from "react";
import FooterCSS from "./Footer.module.css";
import Logo from "../Images/Logo_White.svg";
import Visa from "../Images/visa.svg";
import Maestro from "../Images/maestro.svg";
import Mastercard from "../Images/mastercard.svg";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className={FooterCSS.footerContainer}>
        <img src={Logo} alt="Delhaize Logo" className={FooterCSS.logo} />
        <div className={FooterCSS.linksContainer}>
          <SocialMedia />
          <p className={FooterCSS.copyright}>
            Copyright © 2022 All rights reserved. Delhaize Group.
          </p>
        </div>
        <div className="CreditCardsContainer">
          <img src={Visa} alt="Visa" className={FooterCSS.creditCard} />
          <img src={Maestro} alt="Maestro" className={FooterCSS.creditCard} />
          <img
            src={Mastercard}
            alt="Mastercard"
            className={FooterCSS.creditCard}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
