import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #1F2326;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const NavLogo = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
`
export const Dash = styled.div`
    width: 2px;
    height: 42px;
    border-radius: 2px;
    background-color: #fff;
`
export const NavMenu = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
`
export const NavMenuText = styled.div`
    margin-left: 80px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    font-size:14px;
    font-weight: 700;
`
export const User = styled.div`
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserImage = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #fff;
`
export const UserName = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    svg{
        margin-left: 18px;
    }
`