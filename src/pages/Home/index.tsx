import Menu from "../../components/Menu";
import * as Styled from "./style";
import { SearchIcon } from "../../assets/icons";
import { DateTime } from "luxon";
import ProductsList from "../../components/ProductsList";
import { useEffect, useState } from "react";
import { Category, Favorite, Product, User } from "../../types";
import OrderDetails from "../../components/OrderDetails";
import { useProducts } from "../../contexts/products";
import { useCategories } from "../../contexts/categories";
import { api } from "../../services";


const Home = () => {
  const { categories } = useCategories();
  const { products } = useProducts();

  const [selectCategory, setSelectCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );

  const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
  const [userFavoritesList, setUserFavoritesList] = useState<Product[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const filteredProducts: Product[] = products.filter(
    (element) => selectCategory && element.categoryId === selectCategory.id
  );

  const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const user: User = JSON.parse(localStorage.getItem("user") || "");

    const res = await api.get<User>(`/users/${user?.id}`, headers);

    const favorites = res.data.favorites;

    console.log(res.data);

    const favoritesNames: string[] = favorites.map((elem) => elem.productName);

    const favoritesList: Product[] = products.filter((elem) => {
      return favoritesNames.includes(elem.name);
    });

    setUserFavoritesList(favoritesList);
  };

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayLong}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year} `;

  useEffect(() => {
    handleGetFavorites();
  }, []);

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
            {categories.map((element) => {
              return (
                <Styled.CategoriesButton
                  active={element.name === selectCategory.name}
                  onClick={() => {
                    setSelectCategory(element);
                    setIsFavoritesList(false);
                  }}
                  key={element.id}
                >
                  {element.name}
                </Styled.CategoriesButton>
              );
            })}
            <Styled.CategoriesButton
              active={isFavoritesList}
              onClick={() => {
                setIsFavoritesList(true);
                setSelectCategory({} as Category);
              }}
            >
              Favoritos
            </Styled.CategoriesButton>
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
          <ProductsList
            isFavoritesList={isFavoritesList}
            handleGetFavorites={handleGetFavorites}
            list={
              isFavoritesList
                ? userFavoritesList
                : searchInputValue !== ""
                ? filteredProducts.filter((elem) =>
                    elem.name
                      .toLowerCase()
                      .includes(searchInputValue.toLowerCase())
                  )
                : filteredProducts
            }
          />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
