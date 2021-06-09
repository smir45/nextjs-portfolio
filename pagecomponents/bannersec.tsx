import styles from '../styles/bodysec.module.scss';
const BannerSection = () => {
    return (
        <main className={styles.elementContainer}>
            <div className={styles.textSection}></div>
            <div className={styles.svgSection}>
                <div className={styles.svgbox}></div>
            </div>
        </main>
    )
}

export default BannerSection