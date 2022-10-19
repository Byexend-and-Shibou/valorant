import { useEffect, useState } from "react";
import { MainWrapper, Bg, AgentsContainer } from "./MainStyled";
const Main = () => {
  return (
    <MainWrapper>
      <Bg>
        <AgentsContainer />
      </Bg>
    </MainWrapper>
  );
};
export default Main;
