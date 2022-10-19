import { useEffect, useState } from "react";
import BG from "../../assets/image/bg.jpg";
import { MainWrapper, Bg, Overlay} from "./MainStyled";
const Main = () => {
  return (
    <MainWrapper>
      <Bg>
        <img src={BG}/>
        <Overlay/>
      </Bg>
    </MainWrapper>
  );
};
export default Main;
