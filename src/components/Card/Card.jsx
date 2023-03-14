import styles from "@/components/Card/card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({pokemon}){
    return (
        <>
            <div className={styles.card}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width={120} height={120} title={pokemon.name} alt={pokemon.name}/>
                <p className={styles.id}>
                    #{pokemon.id}
                </p>
                <p className={styles.name}>
                    {pokemon.name}
                </p>
                <Link href={`/pokemon/${pokemon.id}`} className={styles.button}>
                    Detalhes
                </Link>
            </div>
        </>
    )
}