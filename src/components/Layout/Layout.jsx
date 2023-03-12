import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "@/components/Layout/layout.module.css";

export default function Layout({children}){
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <title>PokeNext</title>
        </Head>
        <body>
            <Navbar/>
                <main>
                    {children}
                </main>
            <Footer/>
        </body>
        </>
    )
}