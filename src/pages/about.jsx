import styles from '@/styles/About.module.css'
import Image from 'next/image'

export default function About(){
    return (
        <>
            <div className={styles.about}>
            <Image src={'/images/charizard.png'} width={300} height={300} alt="Charizard"/>
            <h2>
                Bem-vindo ao Pokenext, um projeto desenvolvido em Next.js!
            </h2>
            <p>Next.js é um framework React de código aberto que oferece recursos avançados para criar aplicativos web modernos e escaláveis. Ele possui uma arquitetura híbrida que combina renderização no lado do servidor (SSR) e do lado do cliente (CSR) para fornecer uma experiência de usuário rápida e confiável.</p>
            <p>Com o Next.js, consegui criar uma aplicação web Pokenext que se integra perfeitamente com a API da PokéAPI, permitindo a exibição de informações detalhadas sobre todos os seus Pokémon favoritos. Com uma navegação simples e intuitiva, você pode explorar as diferentes espécies de Pokémon e visualizar seus atributos, habilidades e muito mais.</p>
            <p>Espero que você goste de usar o Pokenext e sinta-se à vontade para me enviar feedbacks e sugestões para melhorias futuras!</p>
            </div>
        </>
    )
}