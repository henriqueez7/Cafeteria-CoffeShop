import styles from "./FamososDia.module.css";
import italiano from "../../../public/cappuccino-italiano.jpg";
import Btn from "./btn/btn";
export default function SectionPrimary () {
    return (
        <section className={styles.container}>
            <div className={styles.titulo}>
                <h1>Famosos do Mês</h1>
            </div>

            <div className={styles.conteudo}>
                <div className={styles.conteudoImg}>
                    <img className={styles.Img} src={italiano} alt="" />
                </div>
                

                <div className={styles.capuccinoItaliano}>
                    <h3>Capuccino Italiano</h3>
                    <p>
                         O cappuccino italiano é uma bebida de café feita com café expresso, leite vaporizado espuma de leite em partes iguais. Originária da Itália, é preparada com um expresso forte sobre o qual o leite é adicionado e finalizada com espuma.
                         </p>
                    
                    <Btn />
                </div>
            </div>
        </section>
    );
}

