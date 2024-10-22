import { createContext } from "react";
import { ChildProps } from "@/utils/types/childProps.type";
import { usePokemonFetchURLs } from "@/hooks/usePokemonFetchURLs";
import { PokemonURLType } from "@/utils/pokemonURL.type";

export const PokemonPageContext = createContext<PokemonURLType[] | undefined>(
  undefined
);

export const PokemonPageContextProvider = ({ children }: ChildProps) => {
  const pokemonURls = usePokemonFetchURLs();
  console.log(pokemonURls.data);

  return (
    <PokemonPageContext.Provider value={pokemonURls.data}>
      {pokemonURls.loading && <div>Loading ...</div>}
      {!pokemonURls.loading && children}
    </PokemonPageContext.Provider>
  );
};
