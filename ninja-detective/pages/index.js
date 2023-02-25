import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../public/images/ninjavan-logo-white.png';
import bgImage from '../public/images/background-image.jpg';
import styles from '../styles/homepage.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <Image className={styles.logo} src={logoImage}></Image>
                </div>

                <div className={styles.bodyPage}>
                    <div className={styles.backImage}>
                        <h1 className={styles.textHeader}>Ninja Detective</h1>
                        <p className={styles.textDescription}>Worried About your shipment? Say Goodbye to your problems with this one stop tracking service</p>
                    </div>
                    <Image className={styles.bgImage} src={bgImage}></Image>

                    <a href='/login'><input type="button" className={styles.buttonLogin} value="Existing User"></input></a>
                    <input type="button" className={styles.buttonsignup} value="Create an Account"></input>
                </div>

                <div className={styles.footer}>
                    <h1>footer</h1>
                </div>
            </main>
        </div>

    )

}
