
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Assets
import ClientLogo01 from "../../../public/assets/images/avatars/avatar_1.jpg";
import ClientLogo02 from "../../../public/assets/images/avatars/avatar_2.jpg";
import ClientLogo03 from "../../../public/assets/images/avatars/avatar_3.jpg";
import ClientLogo04 from "../../../public/assets/images/avatars/avatar_4.jpg";
import ClientLogo05 from "../../../public/assets/images/avatars/avatar_5.jpg";
import ClientLogo06 from "../../../public/assets/images/avatars/avatar_6.jpg";
import ClientLogo07 from "../../../public/assets/images/avatars/avatar_7.jpg";
import ClientLogo08 from "../../../public/assets/images/avatars/avatar_8.jpg";
import ClientLogo09 from "../../../public/assets/images/avatars/avatar_9.jpg";
import ClientLogo10 from "../../../public/assets/images/avatars/avatar_10.jpg";

// import ClientLogo01 from "../../assets/img/clients/logo01.svg";
// import ClientLogo02 from "../../assets/img/clients/logo02.svg";
// import ClientLogo03 from "../../assets/img/clients/logo03.svg";
// import ClientLogo04 from "../../assets/img/clients/logo04.svg";
// import ClientLogo05 from "../../assets/img/clients/logo05.svg";
// import ClientLogo06 from "../../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true, 
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
        <p className="whiteColor font30 flexCenter kode-mono"> INFLUENCERS</p>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "50px" }}>Emily</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "45px" }}>Marcus</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "52px" }}>Sofia</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "55px" }}>Ava</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "52px" }}>Liam</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "50px" }}>Olivia</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo07} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "35px" }}>Benjamin</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo08} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "55px" }}>Mia</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo09} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "50px" }}>Elijah</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo10} alt="client logo" />
          <p className="whiteColor font16" style={{ marginLeft: "50px" }}>Noah</p>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 120px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
  
`;
const ImgStyle = styled.img`
  width: 135px;
  height: 135px;
  padding: 5%;
  border-radius: 100%;
`;