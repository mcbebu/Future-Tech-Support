import Image from 'next/image'
import logoImage from '../public/images/ninjavan-logo-white.png'
import styles from '../styles/homepage.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <Image className={styles.logo} src={logoImage}></Image>
                </div>

                <div className={styles.bodypage}>
                    <div className={styles.backImage}>
                        <h1 className={styles.textHeader}>Ninja Detective</h1>
                        <p className={styles.textText}>Worried About your shipment? Say Goodbye to your problems with this one stop tracking service</p>
                        <img src='https://www.ninjavan.co/static/44271b1532932864d5386bc6904280d0/878dd/homepage-banner-desktop.png'></img>
                    </div>
                    <div className={styles.buttons}>
                        <input type="button" className={styles.buttonLogin} value="Log in"></input>
                        <input type="button" className={styles.buttonsignup} value="Sign Up"></input>
                    </div>

                </div>

                <div className={styles.footer}>
                    <h1>footer</h1>
                </div>
            </main>
        </div>

    )

}
