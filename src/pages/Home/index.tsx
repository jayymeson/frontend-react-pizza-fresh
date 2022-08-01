import Menu from "../../components/Menu";
import * as Styled from "./style";
import { SearchIcon } from "../../assets/icons";
import { DateTime } from "luxon";

const Home = () => {
  const actualDate = DateTime.now();

  const formatedDate = `${actualDate.weekdayLong}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year} `;

  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Pizza Fresh</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainar>
            <SearchIcon />
            <input placeholder="Procure pelo sabor" />
          </Styled.SearchInputContainar>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesBar>
            <Styled.CategoriesButton active>Pizzas</Styled.CategoriesButton>
            <Styled.CategoriesButton>Bebidas</Styled.CategoriesButton>
            <Styled.CategoriesButton>Porções</Styled.CategoriesButton>
          </Styled.CategoriesBar>
          <Styled.ProductsHeader>
            <h2>Escolha seu sabor</h2>
            <Styled.TableSelect>
              <option value="" disabled>
                Selecione a mesa
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Styled.TableSelect>
          </Styled.ProductsHeader>
          <div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </section>
      </Styled.HomeContentContainer>
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
