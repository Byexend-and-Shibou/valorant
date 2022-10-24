import { useEffect, useState } from "react";
import {
  TitleText,
  MainWrapper,
  Bg,
  AgentsContainer,
  AgentsName,
  AgentsCountry,
} from "./MainStyled";
import Agents from "../../data/Agent";
const Main = () => {
  return (
    <MainWrapper>
      <Bg>
        <TitleText>
          Agents
        </TitleText>
        {Agents.map((el) => (
          <AgentsContainer>
            <AgentsName>{el.name}</AgentsName>
            <AgentsCountry>{el.country}</AgentsCountry>
          </AgentsContainer>
        ))}
      </Bg>
    </MainWrapper>
  );
};
export default Main;
