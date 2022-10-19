import BG from "../../assets/image/bg.jpg";
import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BG});
  background-size: cover;
`
export const AgentsContainer = styled.div`
  height: 700px;
  width: 350px;
  background: linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%);
  border-top-left-radius: 10px;
`