import {Logo, Riot} from "../../assets/svg/SvgImporter"
import {Container, NavLogo, Dash, NavMenu, NavMenuText} from './HeaderStyled'
const Header = () => {
    const NavEl = ["Game", "Champions", "News", "Patch Notes", "Discover", "Esports", "Universe", "Shop", "Support"]
    return(
        <Container>
            <NavLogo>
            <Riot/>
            <Dash/>
            <Logo/>
            </NavLogo>
            <NavMenu>
            {NavEl.map((el) => (
                   <NavMenuText onClick={() => window.location.href="https:/" + `${el}` + ".com"}>{el}</NavMenuText>
            ))}
            </NavMenu>
        </Container>
    )
}
export default Header