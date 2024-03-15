import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// Components
import FullButton from "../Buttons/FullButton";
import CheckMark from "../../assets/svg/Checkmark";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";



export default function PricingTable({ icon, price, title, text,  offers, action }) {
  const [y, setY] = useState(window.scrollY);
  // const router = useNavigate();
  // const path = window.location.pathname;
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow emboss" style={{border: "3px solid Gray",marginBottom: "50px"}}>
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                    
                  ) : (
                    <div style={{ minWidth: "20px" }} />
                  )}
                </div>
                
                <div> 
                 <p className="font20 extraBold">{item.offer}</p> 
                <p className="font16">Discount Will be provided on Referrals</p> 
               </div>

              </div>
            ))
          : null}
      </div>
      <div style={{ margin: "30px 0"}} className="font13">
        <p className="font16 semiBold" style={{ marginBottom: "10px" }}>**Terms and Conditions**</p>
        <ul>
          <em>
          <li style={{ marginBottom: "10px" }} >Minimum Land Size : 1 Acre</li>
          <li style={{ marginBottom: "10px" }}>Continuous Water Supply</li>
          <li style={{ marginBottom: "10px" }}>If payments are delayed, profit percentage will be increased by 1%</li>
          </em>
        </ul>  
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto",justifyItems: "center" }}>
      <Link activeClass="active" to="contact" spy smooth offset={-80} >
        <FullButton title="Buy"/>
        </Link>
      </div>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

PricingTable.propTypes = {
  icon: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string, // Add prop type validation for the text prop
  offers: PropTypes.array,
  action: PropTypes.func
};