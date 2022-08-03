import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido 207</h2>
        <div>
          <Button text="Comer no local" onClick={() => {}} size="small" />
          <Button
            text="P/ Viagem"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
          <Button
            text="Delivery"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <h3>Item</h3>
          <h3>Quantidade</h3>
          <h3>Preço</h3>
        </Styled.CheckoutDetailsHeader>
        <div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Desconto</p>
          <p>R$0,00</p>
        </div>
        <div>
          <p>Sub total</p>
          <p>R$0,00</p>
        </div>
        <Button
          text="Continuar para o pagamento"
          onClick={() => {}}
          size={"large"}
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
