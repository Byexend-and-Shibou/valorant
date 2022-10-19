import BG from "../../assets/image/bg.jpg";
import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const Bg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: url(${BG});
  background-size: cover;
  justify-content: center;
`
export const AgentsContainer = styled.div`
  height: 700px;
  width: 350px;
  background: linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%);
  border-top-left-radius: 10px;
`
export const AgentsName = styled.p`
  
`
export const AgentsCountry = styled.p`
  color: #FF4656;
  font-weight: 500;
  font-size: 24px;
  transform-origin: center;
  transform: rotate(90deg);
  text-align: center;
`