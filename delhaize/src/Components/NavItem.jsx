import React from "react";
import NavCSS from "./Nav.module.css";

const NavItem = ({ categorie, id }) => {
  return <button className={NavCSS.categorieItem}>{categorie}</button>;
};

export default NavItem;
