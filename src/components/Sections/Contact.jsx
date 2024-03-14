/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
// import { Button } from "react-scroll";
import styled from "styled-components";

// import PositionedSnackbar from "./Alert";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";


export default function Contact() {
  const handleButtonClick = () => {
    // <PositionedSnackbar/>
    alert("Thank you for your feedback!");
  }
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Lets get in touch</h1>
            <p className="font16 semiBold" style={{maxWidth: "800px"}}>
            This contact form offers ways for clients to reach out to us. It is where clients can ask questions, provide feedback, or seek support and also confirm their subscription.
              <br />
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label htmlFor="fname" className="font16">Full Name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" required />
                <label htmlFor="email" className="font16">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" required/>
                <label htmlFor="phone" className="font16">Phone:</label>
                <input type="numeric" id="phone" name="phone" className="font20 semiBold" required />
                <label htmlFor="message" className="font16">Message:</label>
                <textarea rows="1" cols="10" type="text" id="message" name="message" className="font20 " style={{resize: "none"}}/>
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} onClick={handleButtonClick}/>
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









