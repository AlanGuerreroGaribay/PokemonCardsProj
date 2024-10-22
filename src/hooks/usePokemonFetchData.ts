import { PokemonType } from "@/utils/types/pokemon.type";
import { useEffect, useState } from "react";
import axios from "axios";

export const usePokemonFetchData = (url: string) => {
  const [pokemonData, setPokemonData] = useState<PokemonType>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPokemonData = async () => {
    setLoading(!loading);

    const data = await axios?.get(url);

    setPokemonData(data?.data);
  };

  useEffect(() => {
    fetchPokemonData();
    setLoading(!loading);
  }, []);

  return { pokemonData, loading };
};
