import * as Styled from "./styles";
import Logo from "../../assets/imgs/logo.png";
import HomeIcon from "../../assets/icons/home.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/logout.svg";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img alt="logo" src={Logo} />
      <div>
        <img alt="home" src={HomeIcon} />
        <img alt="settings" src={SettingsIcon} />
      </div>
      <img alt="logout" src={LogoutIcon} />
    </Styled.MenuContainer>
  );
};

export default Menu;
