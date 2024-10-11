import { ChildProps } from "@/utils/types/childProps.type";
import styles from "@/css/CardPokemon/CardPokemon.module.css";

export const CardPokemonContainer = ({ children }: ChildProps) => {
  return <div className={styles.cardContainer}>{children}</div>;
};
