import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import styled from "styled-components";

// Assets
import CloseIcon from "../../assets/svg/CloseIcon";


export default function Sidebar({ sidebaropen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" {...(sidebaropen && { sidebaropen })}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src="../../../public/favicon/agrofav.png" alt="logo" className="logoIcon" />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            AgroPulse
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebaropen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy
            smooth
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy
            smooth
            offset={-60}
          >
            Services
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy
            smooth
            offset={-60}
          >
            Projects
          </Link>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy
            smooth
            offset={-60}
          >
            Blog
          </Link>
        </li> */}
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy
            smooth
            offset={-60}
          >
            Pricing
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy
            smooth
            offset={-60}
          >
            Contact
          </Link>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/shop"
            spy
            smooth
            offset={-60}
          >
            Market
          </Link>
        </li> */}
        <li className="semiBold font15 pointer ">
              <a href="/shop"  style={{ padding: "10px 15px" }}  offset={-80} className="whiteColor">
                Market
              </a>
            </li> 
        

      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a href="/login" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a href="/register" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Get Started
          </a>
        </li>
        
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebaropen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;

Sidebar.propTypes = {
  sidebaropen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};