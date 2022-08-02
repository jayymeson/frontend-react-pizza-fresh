import { Product } from "../../types";
import * as Styled from './style'

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Styled.CardContainer>
      <img alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </Styled.CardContainer>
  );
};

export default ProductCard;