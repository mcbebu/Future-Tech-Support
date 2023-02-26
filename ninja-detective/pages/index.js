import Image from 'next/image';
import logoImage from '../public/images/ninjavan-logo-white.png';
import bgImage from '../public/images/background-image.jpg';
import styles from '../styles/homepage.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Any Issues?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Send us a ticket and we will look into it right away!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    All in One
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Your one stop shop for anything customers related issues.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    New features coming soon
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Translation and Chat with live agent are coming...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </main>
        </div>

    )

}
