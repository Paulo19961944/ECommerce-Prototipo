"use client"
import styles from '../pages/styles.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <img src="./images/Sacola-de-Compras-Photoroom.png" alt="Compre em nossa Loja" className={styles.logo} />
            <img src="./images/Menu-Hamburguer.png" alt="Menu" className={styles.hamburgerMenu} />
        </div>
    )
}