import { Button } from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
import {
  CardPokemonContainer,
  CardPokemonImage,
  CardPokemonTitle,
} from "../components/CardPokemon";
import { CardPokemonType } from "@/utils/types/cardPokemon.type";

const CardPokemon = ({ title, route, image }: CardPokemonType) => {
  const navigate = useNavigate();

  const navigationHandler = (route: number) => {
    navigate(`/pokemon/${route}`);
  };

  return (
    <CardPokemonContainer>
      <CardPokemonTitle title={title} />
      <CardPokemonImage image={image} />
      <Button handler={() => navigationHandler(route)} text="Detail view" />
    </CardPokemonContainer>
  );
};

export default CardPokemon;
