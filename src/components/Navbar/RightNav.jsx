import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1001;
  position: relative;

  li {
    padding: 1rem 1rem;
    font-weight: 400;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  li > a {
    position: relative;
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  li > a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  li:hover > a::after {
    transform: scaleX(1);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: ${({ isHome, navbar }) =>
      isHome
        ? navbar
          ? "rgba(28, 44, 71, 0.95)"
          : "transparent"
        : "rgba(28, 44, 71, 0.95)"};
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    min-width: 190px;
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }

  li:hover > .dropdown {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    pointer-events: auto;
  }

  .dropdown li {
    padding: 1rem;
    width: 100%;
  }

  .sub-dropdown {
    position: relative;
  }

  .sub-dropdown .dropdown {
    top: 0;
    left: 100%;
    background: rgba(28, 44, 71, 0.95);
    min-width: 190px;
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }

  .sub-dropdown:hover > .dropdown {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    pointer-events: auto;
  }

  li:hover > a .arrow {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }

  @media (max-width: 985px) {
    flex-flow: column nowrap;
    background-color: var(--color-primary);
    border-left: 1px solid #eee;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;

    li {
      color: #fff;
      padding-left: 20px;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    .dropdown {
      position: static;
      background: transparent;
      box-shadow: none;
      display: ${({ ismobile, openDropdown }) =>
        ismobile && openDropdown ? "flex" : "none"};
      opacity: 1;
      transform: none;
      visibility: visible;
      padding-left: 20px;
      width: 100%;
    }

    .sub-dropdown .dropdown {
      position: static;
      background: transparent;
      display: ${({ ismobile, openSubDropdown }) =>
        ismobile && openSubDropdown ? "flex" : "none"};
      padding-left: 20px;
      width: 100%;
    }
  }
`;

const RightNav = ({ open }) => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [ismobile, setIsMobile] = useState(window.innerWidth <= 953);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 953);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownClick = (menu) => {
    if (ismobile) {
      setOpenDropdown(openDropdown === menu ? null : menu);
      setOpenSubDropdown(null); // close sub-dropdown when switching
    }
  };

  const handleSubDropdownClick = (submenu, event) => {
    if (ismobile) {
      event.stopPropagation();
      setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
    }
  };

  return (
    <Ul
      open={open}
      ismobile={ismobile}
      openDropdown={openDropdown}
      openSubDropdown={openSubDropdown}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => handleDropdownClick("aboutus")}>
        <Link to="/aboutus">
          {" "}
          About
          <ChevronDown size={14} className="arrow" />
        </Link>
        {(openDropdown === "aboutus" || !ismobile) && (
          <ul className="dropdown">
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/meet_the_team">Meet the Team</Link>
            </li>
          </ul>
        )}
      </li>

      {/* Support Us Dropdown */}
      <li onClick={() => handleDropdownClick("publications")}>
        <Link to="/publications">
          Publications <ChevronDown size={14} className="arrow" />
        </Link>
        {(openDropdown === "publications" || !ismobile) && (
          <ul className="dropdown">
            <li>
              <Link to="/publications?filter=MuntahaPress">Muntaha Press</Link>
            </li>
            <li>
              <Link to="/publications?filter=SidraSeries">Sidra Series</Link>
            </li>
          </ul>
        )}
      </li>
      {/* Courses Dropdown */}
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/podcasts">Podcasts</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/videos">Videos</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
