import React, { useRef } from "react";
import NavCSS from "./Nav.module.css";
import NavItem from "./NavItem";

const Nav = () => {
  const categorieen = [
    { id: 1, categorie: "Groenten" },
    { id: 2, categorie: "Fruit" },
    { id: 3, categorie: "Vlees" },
    { id: 4, categorie: "Vis" },
    { id: 5, categorie: "Frisdrank" },
    { id: 6, categorie: "Alcohol" },
    { id: 7, categorie: "Bakkerij" },
    { id: 8, categorie: "Kruidenier" },
    { id: 9, categorie: "Conserven" },
    { id: 10, categorie: "Diepvries" },
    { id: 11, categorie: "Zuivel" },
  ];

  let list = [];
  categorieen.forEach((item) => {
    list.push(
      <NavItem key={item.id} id={item.id} categorie={item.categorie} />
    );
  });

  let scroll = useRef(null);
  const slide = (shift) => {
    scroll.current.scrollLeft += shift;
  };

  return (
    <nav className={NavCSS.navigatie}>
      <button
        className={NavCSS.scrollButton}
        onClick={() => {
          slide(-80);
        }}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
        </svg>
      </button>
      <div className={NavCSS.scrollMenu} ref={scroll}>
        {list}
      </div>
      <button
        className={NavCSS.scrollButton}
        onClick={() => {
          slide(80);
        }}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
