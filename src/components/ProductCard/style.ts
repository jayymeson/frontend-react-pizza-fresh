import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 12rem;
    height: 14.125rem;
    border-radius: 16px;
    background-color: ${theme.colors.baseBg2};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
