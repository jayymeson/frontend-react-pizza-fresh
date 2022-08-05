import toast from "react-hot-toast";
import { mockedProducts } from "../../mocks";
import Button from "../Button";
import CheckoutCards from "../CheckoutCard";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido 207</h2>
        <div>
          <Button
            text="Comer no local"
            onClick={() =>
              toast.error("Sessão em desenvolvimento", {
                duration: 2000,
              })
            }
            size="small"
          />
          <Button
            text="P/ Viagem"
            onClick={() =>
              toast.error("Sessão em desenvolvimento", {
                duration: 2000,
              })
            }
            size="small"
            variant="disabled"
          />
          <Button
            text="Delivery"
            onClick={() =>
              toast.error("Sessão em desenvolvimento", {
                duration: 2000,
              })
            }
            size="small"
            variant="disabled"
          />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
          </div>
          <h3>Preço</h3>
        </Styled.CheckoutDetailsHeader>
        <Styled.CheckoutCardsContainer>
          <CheckoutCards product={mockedProducts[0]}/>
          <CheckoutCards product={mockedProducts[1]}/>
        </Styled.CheckoutCardsContainer>
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
          onClick={() =>
            toast.error("Sessão em desenvolvimento", {
              duration: 2000,
            })
          }
          size={"x-large"}
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
