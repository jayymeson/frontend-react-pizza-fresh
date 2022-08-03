import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido ##12 </h2>
        <div>
          <button>Comer no local</button>
          <button>Viagem</button>
          <button>Delivery</button>
        </div>
      </Styled.OrderDetailsHeader>
      <div>
        <div>
          <h3>Item</h3>
          <h3>Quantidade</h3>
          <h3>Preço</h3>
        </div>
        <div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </div>
      <div>
        <div>
          <p>Desconto</p>
          <p>R$0,00</p>
        </div>
        <div>
          <p>Sub total</p>
          <p>R$0,00</p>
        </div>
        <Button text="Continuar para o pagamento" onClick={() => {}} variant={"disabled"}/> 
      </div>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
