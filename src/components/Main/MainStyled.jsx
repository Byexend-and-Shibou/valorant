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

export const AgentsName = styled.div`
color: #ffffff;
  font-weight: 500;
  font-size: 72px;
  transform-origin: left;
  transform: rotate(90deg);
  line-height: 93px;
  text-align: center;
  display: flex;
`
export const AgentsCountry = styled.div`
  color: #FF4656;
  font-weight: 500;
  font-size: 24px;
  transform-origin: left;
  transform: rotate(90deg);
  text-align: center;
  margin-left: 50px;
  display: flex;
  margin-top: -60px;
  line-height: 31px;
`