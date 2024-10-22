import styles from "@/css/CardPokemon/CardPokemon.module.css";
export const CardPokemonImage = ({ image }: { image: string }) => {
  return <img className={styles.image} src={image} alt="" />;
};
