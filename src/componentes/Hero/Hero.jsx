import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Coffe Shop</h1>
            <p className={styles.text}>Melhore seu dia com um simples gole de café</p>
        </section>
    )
}