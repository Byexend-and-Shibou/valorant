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
  font-family: 'Druk-Wide-Bold';
  height: 300px;
  width: 100px;
  color: #fff;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.5px;
  font-weight: 500;
  font-size: 100px;
  transform: rotate(90deg);
  line-height: 93px;
  text-align: left;
  display: flex;
  align-items: center;
`
export const AgentsContainer = styled.div`
  border: 2px solid #1F2326;
  margin-left: 72px;
  margin-top: 113px;
  height: 700px;
  width: 350px;
  background: linear-gradient(0deg, rgba(31,35,38,1) 0%, rgba(51,51,51,1) 100%);
  border-top-left-radius: 30px;
`
export const AgentsName = styled.div`
  font-family: 'Druk-Wide-Bold';
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
  font-family: 'Druk-Wide-Bold';
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
export const AbilitiesContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 100%;
flex-direction: column-reverse;
`
export const Abilities = styled.div`
  margin-left: 20px;
  margin-top: 113px;
  height: 110px;
  width: 380px;
  background: #1F2326;
  border: 2px solid #fff;
`
export const SvgAbilities = styled.img`
  display: flex;
  justify-content: space-between;
`