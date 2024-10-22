import { ChildProps } from "@/utils/types/childProps.type";
import styles from "@/css/CardPokemon/CardPokemon.module.css";

export const CardPokemonContent = ({ children }: ChildProps) => {
  return <div className={styles.content}>{children}</div>;
};
