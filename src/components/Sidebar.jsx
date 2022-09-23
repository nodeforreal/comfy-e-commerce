import React from "react";
import { useUIContext } from "../context/ui-context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { navLinks } from "../utils/constants";
import CloseButton from "./CloseButton";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user-context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useUIContext();
  return (
    <Wrapper className={isSidebarOpen ? "open-sidebar" : "close-sidebar"}>
      <div className="flex-even nav-container section-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" onClick={closeSidebar} />
        </Link>
        <CloseButton onClick={closeSidebar} />
      </div>
      <NavLinks />
      <div className="cart-btn-container">
        <CartButtons onClick={closeSidebar} />
      </div>
    </Wrapper>
  );
};

const NavLinks = () => {
  const { closeSidebar } = useUIContext();
  const { isAuthenticated } = useUserContext();

  return (
    <div className="nav-links">
      {navLinks.map(({ path, id, label }) => {
        return (
          <Link to={path} key={id} className="nav-link" onClick={closeSidebar}>
            {label}
          </Link>
        );
      })}
      {isAuthenticated && (
        <Link to="/checkout" className="nav-link" onClick={closeSidebar}>
          checkout
        </Link>
      )}
    </div>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: var(--clr-primary-10);
  transition: transform 0.3s linear;

  .nav-link {
    padding: 0.8rem 2rem;
    display: block;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-3);
    transition: padding 0.2s linear;
    &:hover {
      padding-left: 2.5rem;
      background-color: var(--clr-grey-9);
    }
  }

  .cart-btn-container {
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export default Sidebar;
