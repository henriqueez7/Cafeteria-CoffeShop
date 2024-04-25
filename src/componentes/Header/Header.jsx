;import React, {useState} from 'react';
import styles from "./Header.module.css";
import logo from '../../assets/logo.png';
import Hero from "../Hero/Hero";
import listmenu from "../../../public/list.svg";
import fecharmenu from "../../../public/x-circle.svg";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  
    const FecharMenu = () => {
        setIsOpen(false);
    };

    const listMenu = () => {
        setIsOpen(true);
    };

    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} alt="logo" />
                <nav className={styles.nav}>
                    <div className={styles.listMenu} onClick={listMenu}>
                        <img src={listmenu} alt="list menu" />
                    </div>

                    <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
                        <div className={styles.FecharMenu} onClick={FecharMenu}>
                            <img src={fecharmenu} alt="fechar menu" />
                        </div>
                        <a href="#" className={styles.link}>Home</a>
                        <a href="#" className={styles.link}>Sobre</a>
                    </ul>
                </nav>

                
            </div>
            <Hero />
        </header>
    );
}