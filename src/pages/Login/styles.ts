import styled, { css } from "styled-components";
import logo_patterns from "../../assets/logo_patterns/pizza-pattern.png";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background: url(${logo_patterns});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.165rem;
    box-sizing: border-box;
  `}
`;

export const LoginFormContainer = styled.div`
  ${({ theme }) => css`
    width: 21.438rem;
    height: 26.875rem;
    background-color: ${theme.colors.baseBg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
    box-shadow: 3px 3px 6px rgb(108, 234, 105, 0.3);
    padding: 2rem 0;
    box-sizing: border-box;
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    box-sizing: border-box;

    h1 {
      width: 8rem;
      height: 10.5rem;
      text-transform: uppercase;
      font-family: ${theme.constants.logoFontFamily};
      color: ${theme.colors.textColor};
      font-size: 70px;
      text-align: center;
      border-top: 4px double ${theme.colors.textColor};
      border-bottom: 4px double ${theme.colors.textColor};
    }

    img {
      width: 7rem;
      height: 8rem;
    }
  `}
`;
