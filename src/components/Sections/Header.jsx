import React from "react";
import styled from "styled-components";
// import { useNavigate } from 'react-router-dom';
import { motion,useScroll,useTransform} from "framer-motion";

import Dots from "../../assets/svg/Dots";
// Components
// import FullButton from "../Buttons/FullButton";
import QuotesIcon from "../../assets/svg/Quotes";
// Assets
import HeaderImage from "../../assets/img/header5-img.jpg";


export default function Header() {
  const { scrollYProgress } = useScroll()
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, -1]);
  
  // const navigate = useNavigate();
  return (
    <div className="backGround">
      <div className="glassContainer"> 
    <Wrapper id="home" className="container  flexSpaceCenter">
      <LeftSide className="flexCenter ">
        <div>
          <h1 className="extraBold font60 textBg">Planting Tommorow&apos;s Harvest, Today! </h1>
          <HeaderP className="font20 semiBold ">
          Welcome to AgroPulse, where modern convenience meets traditional farming expertise.
          </HeaderP>
          {/* <BtnWrapper>
            <FullButton title="Get Started" action={() => navigate('/register')} />
          </BtnWrapper> */}
        </div>
      </LeftSide>
      <RightSide >

        <ImageWrapper>
        
        <motion.div
          style={{ scale }}
          initial={{ scale: 0}}
          animate={{ scale: 1}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 35
              }}
        >
              <motion.div
              style={{  scaleY: scrollYProgress }}
              />
              
              
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
                        
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
          </motion.div>

          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Farming is a passion, a vocation, a way of life. It is not just a job, it&apos;s a lifestyle.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Anonymous</p>
            </div>
          </QuoteWrapper>

        </ImageWrapper>
        
        {/* <GreyDiv className="lightBg" /> */}
      </RightSide>
    </Wrapper>
    </div>
    </div>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
// const BtnWrapper = styled.div`
//   max-width: 190px;
//   @media (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;
// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;



