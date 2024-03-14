import { Link } from "react-scroll";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
// import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebaropen, toggleSidebar] = useState(false);
  const router = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebaropen={sidebaropen} toggleSidebar={toggleSidebar} />
      {sidebaropen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate navl " style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter ">
          <Link className="pointer flexNullCenter" to="home" smooth onClick={() => router("/")}>
          <img src="../../../public/favicon/agrofav.png" alt="logo" className="logoIcon" />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              AgroPulse
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebaropen)}>
            <BurgerIcon />
          </BurderWrapper>
          {path === "/" ? <UlWrapper className="flexNullCenter" >
            <li className="semiBold font15 pointer" >
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy smooth offset={-80}
              onClick={() => console.log(window.location.pathname)}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy smooth offset={-80}>
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy smooth offset={-80}>
                Projects
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy smooth offset={-80}>
                Blog
              </Link>
            </li> */}
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy smooth offset={-80}>
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy smooth offset={-80}>
                Contact
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/shop"  style={{ padding: "10px 15px" }}  offset={-80}>
                Market
              </a>
            </li>
          </UlWrapper> : null}
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/login" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/register" className="radius8 greenBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


