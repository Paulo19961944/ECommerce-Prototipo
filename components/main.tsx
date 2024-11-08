"use client"
import styles from '../pages/styles.module.css';

export default function Main() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.blackFridayTitleContainer}>
                <img src="./images/Sale-Icon.png" alt="Ofertas" className={styles.saleImage} />
                <h2 className={styles.titleText}>BLACK FRIDAY</h2>
            </div>
            <article className={styles.blackFridayProducts}>
                <img src="./images/Back.png" alt="Voltar" className={styles.navigationImage}/>
                <img src="./images/Sapatos-Nike.jpg" alt="Sapatos Nike" className={styles.imageBlackFridayCard} />
                <img src="./images/Sapatos-Adidas.jpg" alt="Sapatos Adidas" className={styles.imageBlackFridayCard} />
                <img src="./images/Next.png" alt="Próximo" className={styles.navigationImage} />
            </article>
            <div className={styles.titleGameContainer}>
                <img src="./images/Game-Icon.png" alt="Games" className={styles.gamesImage} />
                <h2 className={styles.titleText}>GAMES</h2>
            </div>
            <article className={styles.gamesProducts}>
                <img src="./images/Back.png" alt="Voltar" className={styles.navigationImage}/>
                <img src="./images/Black_ops_2_cover.jpg" alt="Blackops 2" className={styles.imageGamesCard} />
                <img src="./images/Silent_Hill_2_Cover.jpg" alt="Silent Hill" className={styles.imageGamesCard} />
                <img src="./images/Next.png" alt="Próximo" className={styles.navigationImage}/>
            </article>
        </div>
        </>
    )
}