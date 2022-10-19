import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Bg = styled.div`
  width: 100%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.6);
  }
`
export const Overlay = styled.span`
        height: 100%;
        width: 100%;
        background-color: #FF4656;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.7;
`
