import { PokemonURLType } from "@/utils/pokemonURL.type";
import { useEffect, useState } from "react";
import axios from "axios";

export const usePokemonFetchURLs = () => {
  const [data, setData] = useState<[PokemonURLType[]]>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPokemonURLs = async () => {
    setLoading(!loading);

    const pokemonURLs = (await axios.get("https://pokeapi.co/api/v2/pokemon/"))
      .data.results;
    setData(pokemonURLs);

    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonURLs();
  }, []);

  return { data, loading };
};
