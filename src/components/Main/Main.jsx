import { useEffect, useState } from "react";
import {
  MainWrapper,
  Bg,
  AgentsContainer,
  AgentsName,
  AgentsCountry,
} from "./MainStyled";
import Agents from "../../data/Agent";
const Main = () => {
  const [click, setClick] = useState(false);
  const hundleClick = (e) => {
    setClick(!click);
    click ? e.currentTarget.style.background = 'white' : e.currentTarget.style.background = 'linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%)';
  }
  return (
    <MainWrapper>
      <Bg>
        {Agents.map((el) => (
          <AgentsContainer onClick={hundleClick}>
            <AgentsName>{el.name}</AgentsName>
            <AgentsCountry>{el.country}</AgentsCountry>
          </AgentsContainer>
        ))}
      </Bg>
    </MainWrapper>
  );
};
export default Main;
