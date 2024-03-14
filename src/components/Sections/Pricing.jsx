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
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
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
            <TableBox>
            <div style={{textAlign:"center", marginTop:"50%"}} className="glassContainer">
                To Be Added
            </div>

            </TableBox>
            <TableBox>
            <div style={{ padding: "50% 50%" }}>
                To Be Added
              </div>
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




