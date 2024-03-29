import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

// Assets
// import LogoImg from "../../assets/svg/Logo";


export default function Contact() {

  const getCurrentYear = () => new Date().getFullYear()

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter " style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth offset={-80}>
            <img src="../../../public/favicon/agrofav.png" alt="logo" className="logoIcon" />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                AgroPulse
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">AgroPulse</span> All Right Reserved
            </StyleP>
            
            <Link className="whiteColor animate pointer font13" to="home" smooth offset={-80}>
              Back to top
            </Link>

          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;