import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CategoriesButtonProps {
  active?: boolean;
}

interface ButtonProps {
  theme: Theme;
}

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  background-color: #252836;
  color: #fff;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display", cursive;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const SearchInputContainar = styled.div`
  width: 173px;
  height: 48px;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 10px;

  input {
    background: #2d303e;
    width: 120px;
    height: 38px;
    font-size: 14px;
    color: #fff;
    :focus {
      outline: none;
    }
  }
`;

export const CategoriesBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const CategoriesButton = styled.button<CategoriesButtonProps>`
  color: #393c49;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: #252836;

  :hover {
    color: #fff;
  }

  ${({ active }) =>
    active &&
    css`
      color: #6cea69;
      border-bottom: 2px solid #6cea69;
    `}
`;

export const ProductsHeader = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 48px;
  background-color: #e26b6b;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: #fff;
  padding: 0 1rem;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 15vw;
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
  `}
`;
