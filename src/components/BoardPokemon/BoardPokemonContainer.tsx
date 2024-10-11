import { ChildProps } from "@/utils/types/childProps.type";
import styles from "@/css/BoardPokemon/BoardPokemon.module.css";

export const BoardPokemonContainer = ({ children }: ChildProps) => {
  return <div className={styles.boardContainer}>{children}</div>;
};
