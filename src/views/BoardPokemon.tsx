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
              route={pokemon.id}
              key={pokemon.id}
              title={pokemon.name}
              image={pokemon.sprites.front_shiny}
            />
          );
        })}
      </>
    </BoardPokemonContainer>
  );
};

export default BoardPokemonView;
