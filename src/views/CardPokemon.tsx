import { Button } from "@/components/Button/Button";
import {
  CardPokemonContainer,
  CardPokemonImage,
  CardPokemonTitle,
  CardPokemonTypeComponent,
} from "../components/CardPokemon";
import { CardPokemonType } from "@/utils/types/cardPokemon.type";
import { CardPokemonContent } from "@/components/CardPokemon/CardPokemonContent";
import { usePokemonFetchData } from "@/hooks/usePokemonFetchData";

const CardPokemon = ({ name, url }: CardPokemonType) => {
  const data = usePokemonFetchData(url);

  return (
    <CardPokemonContainer>
      {data.loading && (
        <>
          <CardPokemonImage
            image={data.pokemonData?.sprites?.front_default || ""}
          />
          <CardPokemonContent>
            <CardPokemonTitle title={name} />
            <CardPokemonTypeComponent types={data?.pokemonData?.types || []} />
            <Button handler={() => {}} text="Detail view" />
          </CardPokemonContent>
        </>
      )}
      {!data.loading && <div>Loading ...</div>}
    </CardPokemonContainer>
  );
};

export default CardPokemon;
