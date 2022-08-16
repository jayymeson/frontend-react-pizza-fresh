import Input from "../../components/Input";
import * as Styled from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import { api } from "../../services";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("O formato do e-mail está inválido").required(),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("/auth", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha inválido");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>Pizza Fresh</h1>
          <img alt="logo" src={Logo} />
        </Styled.LoginLogoContainer>
        <StyledInput placeholder="Email" {...register("email")} />
        <StyledInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </ErrorMessage>
        <Button text="Entrar" size="large" type="submit" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
