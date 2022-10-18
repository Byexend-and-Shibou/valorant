import {Logo, Riot} from "../../assets/svg/SvgImporter"
import {Container, NavLogo, Dash} from './HeaderStyled'
const Header = () => {
    const NavEl = ["Game", "Champions", "News", "Patch Notes", "Discover", "Esports", "Universe", "Shop", "Support"]
    return(
        <Container>
            <NavLogo>
            <Riot/>
            <Dash/>
            <Logo/>
            </NavLogo>
        </Container>
    )
}
export default Header