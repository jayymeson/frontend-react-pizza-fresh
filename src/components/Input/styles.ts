import styled, { css } from "styled-components";

interface StyledInputProps {
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, inputSize }) => css`
    all: unset;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 8px;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseBg1};
    counter-reset: ${theme.colors.baseBg1};
    padding-left: 1rem;

    ${inputSize === "small" &&
    css`
      width: 10.75rem;
    `}

    ${inputSize === "large" &&
    css`
      width: 22.375rem;
    `}
  `}
`;
