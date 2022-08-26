import { Favorite, Product } from "../../types";
import ProductCard from "../ProductCard";
import * as Styled from "./styles";

interface ProductsListProps {
  list: Product[];
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const ProductsList = ({
  list,
  isFavoritesList,
  handleGetFavorites,
}: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard
          product={element}
          key={element.id}
          handleGetFavorites={handleGetFavorites}
          isFavoritesList={isFavoritesList}
        />
      ))}
    </Styled.ProductsListContainer>
  );
};

export default ProductsList;
