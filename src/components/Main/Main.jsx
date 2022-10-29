import { useEffect, useState } from "react";
import {
  MainWrapper,
  Bg,
  AgentsContainer,
  AgentsName,
  AgentsCountry,
  Abilities,
  AbilitiesContainer,
  SvgAbilities
} from "./MainStyled";
import Agents from "../../data/Agent";
const Main = () => {
  const [click, setClick] = useState(false)
  const hundleClick = (e, i) => {
    setClick(!click);
    click ? e.currentTarget.style.background = 'white' : e.currentTarget.style.background = 'linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%)'
    // if(click && i !== e.currentTarget){
    //   e.currentTarget.style.background = 'linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%)'
    // }
  }
  return (
    <MainWrapper>
      <Bg>
        {Agents.map((el, i) => (
          <AgentsContainer onClick={hundleClick}>
            <AgentsName>{el.name}</AgentsName>
            <AgentsCountry>{el.country}</AgentsCountry>
            <AbilitiesContainer>
            <Abilities>
              <SvgAbilities src={el.skils}></SvgAbilities>
            </Abilities>
            </AbilitiesContainer>
          </AgentsContainer>
        ))}
      </Bg>
    </MainWrapper>
  );
};
export default Main;
