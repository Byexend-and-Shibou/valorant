import { useEffect, useState } from "react";
import { MainWrapper, Bg, AgentsContainer, AgentsName, AgentsCountry } from "./MainStyled";
const Main = () => {
  return (
    <MainWrapper>
      <Bg>
        <AgentsContainer>
          {/* <AgentsName>
            Pheonix
          </AgentsName> */}
          <AgentsCountry>
            United Kingdom
          </AgentsCountry>
        </AgentsContainer>
      </Bg>
    </MainWrapper>
  );
};
export default Main;
