import toast from "react-hot-toast";
import { api } from "../../services";
import { Favorite, Product, User } from "../../types";
import Button from "../Button";
import * as Styled from "./style";

interface ProductCardProps {
  product: Product;
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const ProductCard = ({
  product,
  isFavoritesList,
  handleGetFavorites,
}: ProductCardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const user: User = JSON.parse(localStorage.getItem("user") || "");

  const handleSetFavorite = () => {
    const data = {
      userId: user.id,
      productName: product.name,
    };

    api
      .post("/products/favorite/", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Produto favoritado com sucesso!");
      })
      .catch(() => toast.error("Produto já favoritado"));
  };

  const handleRemoveFavorite = async () => {
    const res = await api.get<User>(`/users/${user?.id}`, headers);

    const favoriteId: string | undefined = res.data.favorites
      .filter((elem) => elem.productName === product.name)
      .find((elem) => elem.userId === user.id)?.id;

    api
      .delete(`/products/favorite/${favoriteId}`, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Produto desfavoritado com sucesso!");
      })
      .catch(() => toast.error("Erro"));
  };

  return (
    <Styled.CardContainer>
      <img alt={product.name} src={product.image} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Button
        onClick={isFavoritesList ? handleRemoveFavorite : handleSetFavorite}
        text={
          isFavoritesList ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
        size="small"
        variant={isFavoritesList ? "cancel" : "disabled"}
      />
    </Styled.CardContainer>
  );
};

export default ProductCard;
