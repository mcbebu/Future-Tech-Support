import * as React from 'react';
import Image from 'next/image'
import logoImage from '../public/images/ninjavan-logo-white.png'
import homepage from '../styles/homepage.module.css'
import styles from '../styles/form.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";
import SnackBar from '@mui/material/SnackBar';
import MuiAlert from '@mui/material/Alert';
import Link from "next/link";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#c62828'
        }
    }
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function App() {
    const [values, setValues] = React.useState({
        issuetype: "",
        subject: "",
        desc: "",
        trackid: "",
        attach: "",

    });
    const [open, setOpen] = React.useState(false);

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

    const [submitted, setSubmitted] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() =>{
            setOpen(true);
            // <SnackBar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={6000} onClose={handleClose}>
            //     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            //         Your Ticket has been picked up by our team!!
            //     </Alert>
            // </SnackBar>
       }, 5000);
    }

    return (
        <div className={styles.container}>
            <div className={homepage.header}>
                <Image className={homepage.logo} src={logoImage}></Image>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.registerForm} onSubmit={sendMessage}>
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
                    <br/>
                    <div className={styles.button}>
                        <ThemeProvider theme={theme}>
                            <Link href='/dashboard'>
                                <Button variant="contained" color="secondary" size="medium">
                                    Cancel
                                </Button></Link>
                            <Button variant="contained" color="success" type="submit" size="medium" onClick={sendMessage}>
                                Submit
                            </Button>
                            <SnackBar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Your Ticket has been picked up by our team!!
                                </Alert>
                            </SnackBar>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </div>
    )
}