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
export const TitleText = styled.div`
  height: 600px;
  width: 100px;
  color: #fff;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  font-weight: 500;
  font-size: 100px;
  transform: rotate(90deg);
  line-height: 93px;
  text-align: left;
  display: flex;
  align-items: center;
`
export const AgentsContainer = styled.div`
  margin-left: 72px;
  margin-top: 113px;
  height: 700px;
  width: 350px;
  background: linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%);
  border-top-left-radius: 30px;
`

export const AgentsName = styled.div`
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke: 2px;
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
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke: 0.3px;
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