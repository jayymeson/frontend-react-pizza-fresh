import Menu from "../../components/Menu";
import * as Styled from "./style";
import { SearchIcon } from "../../assets/icons";
import { DateTime } from "luxon";
import { mockedFavorites, mockedProducts } from "../../mocks";
import ProductsList from "../../components/ProductsList";
import { mockedCategories } from "../../mocks";
import { Dispatch, SetStateAction, useState } from "react";
import { Category, Favorite, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectCategory.id
  );

  const [selectFavorite, setselectFavorite] = useState<Favorite>(
    mockedFavorites[0]
  );

  const filteredFavorite: Favorite[] = mockedFavorites.filter(
    (element) => element.productName === selectFavorite.id
  );

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
            {mockedCategories.map((element) => {
              return (
                <Styled.CategoriesButton
                  active={element.name === selectCategory.name}
                  onClick={() => setSelectCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesButton>
              );
            })}
            {/* {mockedFavorites.map((element) => {
              return (
                <Styled.CategoriesButton
                  active={element.productName === selectFavorite.productName}
                  onClick={() => setselectFavorite(element)}
                >
                  {element.productName}
                </Styled.CategoriesButton>
              );
            })} */}
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
          <ProductsList list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
