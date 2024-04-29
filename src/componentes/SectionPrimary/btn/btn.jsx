import styles from "../btn/btn.module.css";
import React, { useState } from 'react';

export default function Btn() {
    const [animate, setAnimate] = useState(false);

    const alterarAnimacao = () => {
        setAnimate(prevState => !prevState);
    };

    const btnClasses = animate ? `${styles.btn} ${styles.animateBtn}` : styles.btn;

    return (
        <a
            href="#"
            className={btnClasses}
            onClick={alterarAnimacao}
            onMouseEnter={alterarAnimacao}
            onMouseLeave={alterarAnimacao}
        >
            Saiba Mais
        </a>
    )
}
