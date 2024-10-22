import { useContext } from "react";
import { PokemonPageContext } from "../context/PagePokemonContext";

export const usePokemonPageContext = () => {
  const context = useContext(PokemonPageContext);

  if (!PokemonPageContext) {
    throw new Error("context must be used within a UserContextProvider");
  }
  return context;
};
