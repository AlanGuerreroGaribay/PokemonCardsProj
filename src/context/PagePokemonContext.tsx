import { createContext } from "react";
import { ChildProps } from "@/utils/types/childProps.type";
import { PokemonType } from "@/utils/types/pokemon.type";
import { useFetchPokemonData } from "@/hooks/useFetchPokemonData";

export const PokemonPageContext = createContext<PokemonType[] | undefined>(
  undefined
);

export const PokemonPageContextProvider = ({ children }: ChildProps) => {
  const pagePokemon = useFetchPokemonData();
  return (
    <PokemonPageContext.Provider value={pagePokemon.pagePokemon}>
      {children}
    </PokemonPageContext.Provider>
  );
};
