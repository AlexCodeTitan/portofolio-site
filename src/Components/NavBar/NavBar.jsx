import React, { useEffect, useState } from "react";
import { NavLink, NavWrapper, SideBar, SideDecoration } from "./NavBar.style";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import ModeButton from "../ModeButton/ModeButton";

function NavBar({ toggleTheme, theme }) {
  const links = [
    {
      path: "home",
      text: "Home",
    },
    {
      path: "about",
      text: "About",
    },
    {
      path: "portofolio",
      text: "Portofolio",
    },
    {
      path: "contact",
      text: "Contact",
    },
  ];
  const [selected, setSelected] = useState("home");

  const handleLinkClick = (id) => {
    setSelected(id);
    console.log(id, 1);
    console.log(selected, 2);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper shadow={isScrolled}>
        {links.map(({ path, text }) => (
          <NavLink
            as={Link}
            key={path}
            to={path}
            onClick={() => handleLinkClick(path)}
            active={selected === path ? "active" : "notActive"}
          >
            {text}
          </NavLink>
        ))}
      </NavWrapper>
      <SideBar>
        <SideDecoration />
        <BsLinkedin size={40} />
        <BsGithub size={40} />
        <ModeButton toggleTheme={toggleTheme} theme={theme} />
      </SideBar>
    </>
  );
}

export default NavBar;
