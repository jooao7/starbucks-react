import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  HeaderStyle,
  LogoStyle,
  UlStyle,
  ListIten,
} from "/src/Components/Header/HeaderStyle.jsx";

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle src={logo} alt="Logomarca Starbucks" />
      <nav>
        <UlStyle>
          <ListIten>
            <Link to="/">Home</Link>
          </ListIten>
          <ListIten>
            <Link to="/novidades">Novidades</Link>
          </ListIten>
          <ListIten>
            <Link to="/sobre">Sobre</Link>
          </ListIten>
        </UlStyle>
      </nav>
    </HeaderStyle>
  );
};
export default Header;
