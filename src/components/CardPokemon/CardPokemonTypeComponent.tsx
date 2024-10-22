import { TypesPokemonTypes } from "@/utils/types/pokemonTypes.type";

export const CardPokemonTypeComponent = ({ types }: TypesPokemonTypes) => {
  return (
    <div>
      {types.map((type) => {
        return <div key={type.type.name}>{type.type.name}</div>;
      })}
    </div>
  );
};
