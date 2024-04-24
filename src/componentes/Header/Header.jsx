import styles from "./Header.module.css";
import logo from '../../assets/logo.png';
import Hero from "../Hero/Hero";

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} alt="logo" />
                <nav className={styles.nav}>
                    <a href="#" className={styles.link}>Home</a>
                    <a href="#" className={styles.link}>Sobre</a>
                </nav>
            </div>
            <Hero />
        </header>
    );
}