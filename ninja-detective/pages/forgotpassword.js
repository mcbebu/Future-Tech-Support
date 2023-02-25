import Image from "next/image";
import Link from "next/link";
import styles from '../styles/login.module.css';
import logo from '../public/images/logo.png';
import loginImage from '../public/images/sideImage.png';

function ForgetPasswordPage() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.sideImage}>
                    <Image src={loginImage} className={styles.imageSize} alt="logo"></Image>
                </div>
                <div className={styles.login}>
                    <div className={styles.imageWrapper}>
                        <Image src={logo} alt="Logo" width={300} height={100} className={styles.logoImage}></Image>
                    </div>
                    <p className={styles.forgotPasswordText}>Please enter your email address to request a password reset</p>
                    <label className={styles.loginLabel} htmlFor="email">Email Address:</label>
                    <input className={styles.loginInput} type="text" id="email" name="email" /><br />
                    <input className={styles.forgotPasswordButton} type="submit" value="RESET PASSWORD" />
                    <div className={styles.backtoLoginButton} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.016" height="29.016" viewBox="0 0 29.016 29.016">
                            <g id="Group_5" data-name="Group 5" transform="translate(0)">
                                <g id="Group_4" data-name="Group 4">
                                    <path id="Path_10" data-name="Path 10" d="M173.084,0h14.508a2.42,2.42,0,0,1,2.418,2.418V6.649a.6.6,0,1,1-1.209,0V2.418a1.211,1.211,0,0,0-1.209-1.209H173.084a1.211,1.211,0,0,0-1.209,1.209V26.6a1.211,1.211,0,0,0,1.209,1.209h14.508A1.211,1.211,0,0,0,188.8,26.6V22.366a.6.6,0,1,1,1.209,0V26.6a2.42,2.42,0,0,1-2.418,2.418H173.084a2.42,2.42,0,0,1-2.418-2.418V2.418A2.42,2.42,0,0,1,173.084,0Z" transform="translate(-170.666)" fill="#ff5a87" />
                                    <path id="Path_11" data-name="Path 11" d="M8.267,141.46a.6.6,0,0,1-.817.891L.2,135.7a.6.6,0,0,1,0-.891l7.254-6.649a.6.6,0,1,1,.817.891l-6.109,5.6h19a.6.6,0,1,1,0,1.209h-19Z" transform="translate(7.254 -120.749)" fill="#ff5a87" />
                                </g>
                            </g>
                        </svg>
                        <Link href="/login" className={styles.backButtonText}>BACK TO LOGIN</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ForgetPasswordPage;