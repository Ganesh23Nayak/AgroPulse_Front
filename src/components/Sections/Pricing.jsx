import React from "react";
import styled from "styled-components";

// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font20">
              The Current Pricing as of Now
              <br />
              Get Market Leading Prices Customized For You!!!
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull" style={{ justifyContent: "center" }}>
            <TableBox>
              <PricingTable
                icon="roller"
                price="₹25000/Acre"
                title="Basic : 4 Months"
                text="Paddy, also known as rice, is a staple food crop grown in flooded fields called paddies. It requires warm temperatures and ample water for optimal growth"
                offers={[
                  { offer: "Product Offer", cheked: true },
                ]}
                action={() => alert("clicked")}
              
              />
            </TableBox>
            
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




