import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 13.5rem;
    height: 18.5rem;
    border-radius: 16px;
    background-color: ${theme.colors.baseBg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;
    justify-content: center;
    padding: 1rem;
    padding-top: 3rem;
    box-sizing: border-box;
    font-family: ${theme.constants.bodyFontFamily};

    img {
      width: 8rem;
      position: absolute;
      top: -3.3rem;
    }

    p{
      margin-bottom: 1rem;
    }
  `}
`;
