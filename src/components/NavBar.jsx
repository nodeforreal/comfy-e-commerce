import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { CartButtons, HamBurgerButton } from "./index";
import { useUIContext } from "../context/ui-context";

import logo from "../assets/logo.svg";


const NavBar = () => {
  const { openSidebar } = useUIContext();
 
  
  return (
    <Wrapper>
      <div className="flex-even nav-container nav-center section-center">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <NavLinks />
        <CartButtons />
        <HamBurgerButton onClick={openSidebar} />
      </div>
    </Wrapper>
  );
};

const NavLinks = () => {
  const links = navLinks();
  return (
    <div className="nav-links">
      {links.map(({ label, id, path }) => {
        return (
          <Link to={path} key={id} className="nav-item">
            {label}
          </Link>
        );
      })}
    </div>
  );
};

const Wrapper = styled.nav`
  height: 5rem;

  .nav-links {
    display: none;
  }

  .cart-btn-container {
    display: none;
  }

  .sidebar-open-btn {
    display: inline-block;
  }

  @media screen and (min-width: 992px) {
    .nav-links {
      display: flex;
      column-gap: 2rem;
    }
    .cart-btn-container {
      display: flex;
    }
    .sidebar-open-btn {
      display: none;
    }
  }
  
  .nav-item {
    padding: 0.45rem;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--clr-grey-3);
    &:hover {
      box-shadow: 0 0.218rem var(--clr-primary-7);
    }
  }
`;

export default NavBar;
