import Menu from "../../components/Menu";
import * as Styled from "./style";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <div>
        <header>
          <div>
            <h1>Pizza Fresh</h1>
            <p>{new Date(Date.now()).toLocaleDateString()}</p>
          </div>
        </header>
        <section>
          <div>
            <p>Pizzas</p>
          </div>
          <div>
            <h2>Escolha seu sabor</h2>
            <select>
              <option value="1"></option>
            </select>
          </div>
          <div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </section>
      </div>
      <aside>
        <header>
          <h2>Pedido ##12 </h2>
          <div>
            <button>Comer no local</button>
            <button>Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
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
          <button>Continuar para o pagamento</button>
        </div>
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;
