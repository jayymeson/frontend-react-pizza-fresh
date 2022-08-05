import * as Styled from "./styles";
import { Product } from "../../types";
import { useState } from "react";
import { TrashIcon } from "../../assets/icons";
import toast from "react-hot-toast";
import Input from "../Input";

interface CheckoutCardProps {
  product: Product;
}

const CheckoutCards = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader>
        <img alt={product.name} src={product.image} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <Styled.ProductQuantityInput
          type="number"
          min="1"
          max="5"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <span>R${(product.price * quantity).toFixed(2)}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Detalhes do produto"
        />
        <Styled.RemoveProductButton
          onClick={() =>
            toast.error("Sessão em desenvolvimento", {
              duration: 2000,
            })
          }
        >
          <TrashIcon />
        </Styled.RemoveProductButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCards;
