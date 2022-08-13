import Input from "../../components/Input";
import * as Styled from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/auth";



const Login = () => {
  const {login} = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      const data = {
        email,
        password,
      };

      return axios
        .post(
          "https://backend-nest-pizza-fresh-production.up.railway.app/auth/login",
          data
        )
        .then((res) => {
         login({token: res.data.token, user: res.data.user})
        })
        .catch(() => {
          toast.error("Usuário ou senha inválido");
        });
    }
    toast.error("Usuário ou senha incorretos");
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>Pizza Fresh</h1>
          <img alt="logo" src={Logo} />
        </Styled.LoginLogoContainer>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
        />
        <Button text="Entrar" size="large" onClick={handleLogin} />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
