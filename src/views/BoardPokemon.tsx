import { BoardPokemonContainer } from "@/components/BoardPokemon/BoardPokemonContainer";
import { usePokemonPageContext } from "@/hooks/usePokemonPageContext";
import CardPokemon from "./CardPokemon";

const BoardPokemonView = () => {
  const pokemonData = usePokemonPageContext();

  return (
    <BoardPokemonContainer>
      <>
        {pokemonData?.map((pokemon) => {
          return (
            <CardPokemon
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
      </>
    </BoardPokemonContainer>
  );
};

export default BoardPokemonView;
