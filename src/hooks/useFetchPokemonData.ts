import { PokemonType } from "@/utils/types/pokemon.type";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchPokemonData = () => {
  const [pagePokemon, setPagePokemon] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const fetchPokemonURL = async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );

      const pokemonRawData = await Promise.all(
        data.results.map(async ({ url }: { url: string }) => {
          const response = await axios.get(url);
          return response.data;
        })
      );

      const pokemonData = pokemonRawData.map(
        ({
          id,
          abilities,
          name,
          sprites: { back_default, back_shiny, front_default, front_shiny },
          types,
          weight,
        }) => ({
          id,
          abilities,
          name,
          sprites: { back_default, back_shiny, front_default, front_shiny },
          types,
          weight,
        })
      );

      setPagePokemon(pokemonData);
    };

    fetchPokemonURL();
    setLoading(false);
  }, []);

  return { pagePokemon, loading };
};
