import react, { use, useState } from "react";
import Image from 'next/image'
import logoImage from '../public/images/ninjavan-logo-white.png'
import homepage from '../styles/homepage.module.css'
import styles from '../styles/form.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";
import Link from "next/link";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#c62828'
        }
    }
});

export default function App() {
    const [values, setValues] = useState({
        issuetype: "",
        subject: "",
        desc: "",
        trackid: "",
        attach: "",

    });

    const handleIssueTypeInputChange = (event) => {
        setValues({ ...values, issuetype: event.target.value })
    }

    const handleSubjectInputChange = (event) => {
        setValues({ ...values, subject: event.target.value })
    }

    const handleDescInputChange = (event) => {
        setValues({ ...values, desc: event.target.value })
    }

    const handleTrackInputChange = (event) => {
        setValues({ ...values, trackid: event.target.value })
    }

    const handleAttachInputChange = (event) => {
        setValues({ ...values, attach: event.target.value })
    }

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className={styles.container}>
            <div className={homepage.header}>
                <Image className={homepage.logo} src={logoImage}></Image>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.registerForm} onSubmit={handleSubmit}>
                    {submitted ? <div className={styles.successMessage}>Ticket created</div> : null}
                    <br></br>
                    <h1>Create a ticket</h1><br></br>

                    <label htmlFor="issuetype">Issue Type:</label>
                    <input
                        onChange={handleIssueTypeInputChange}
                        value={values.issuetype}
                        className={styles.formField}
                        name="issuetype" />
                    <br></br>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        onChange={handleSubjectInputChange}
                        value={values.subject}
                        className={styles.formField}
                        name="subject" />
                    <br></br>
                    <label htmlFor="desc">Description:</label>
                    <input
                        onChange={handleDescInputChange}
                        value={values.desc}
                        className={styles.formField}
                        name="desc" />
                    <br></br>
                    <label htmlFor="trackid">Tracking ID:</label>
                    <input
                        onChange={handleTrackInputChange}
                        value={values.trackid}
                        className={styles.formField}
                        name="trackid" />
                    <br></br>
                    <label htmlFor="attach">Attachment (Optional):</label>
                    <input
                        onChange={handleAttachInputChange}
                        value={values.attach}
                        className={styles.formField}
                        name="attach" />

                    <div className={styles.button}>
                        <ThemeProvider theme={theme}>
                            <Link href='/dashboard'>
                                <Button variant="contained" color="secondary" size="medium">
                                    Cancel
                                </Button></Link>
                            <Button variant="contained" color="success" type="submit" size="medium">
                                Submit
                            </Button>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </div>
    )
}