import Input from "../../components/Input";
import * as Styled from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";
import toast from "react-hot-toast";

const Login = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>Pizza Fresh</h1>
          <img alt="logo" src={Logo} />
        </Styled.LoginLogoContainer>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Entrar" size="large" onClick={() => toast.error("Sessão em desenvolvimento")}/>
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
