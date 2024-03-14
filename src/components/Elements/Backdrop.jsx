
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper className="darkBg" onClick={() => toggleSidebar(false)} />;
}

Backdrop.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;
