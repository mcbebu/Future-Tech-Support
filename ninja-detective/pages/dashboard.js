import * as React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { Tab, Tabs, Box, Button, Fab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoImage from '../public/images/ninjavan-logo-white.png';
import styles from '../styles/dashboard.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#c62828'
        }
    }
});

const StyledFab = styled(Fab)({
    position: 'relative',
    zIndex: 1,
    marginRight: '3em',
    float: 'right',
    // top: '15em'
});

function Dashboard() {
    const [value, setValue] = React.useState('1');
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image className={styles.logo} src={logoImage}></Image>
            </div>

            <div className={styles.tabs}>
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '100%' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    centered
                                    variant="fullWidth">
                                    <Tab label="Tickets" value="1" />
                                    <Tab label="Completed Tickets" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Accordion sx={{ marginBottom: '1em' }} expanded={expanded === 'panel1'} onChange={handleAccordion('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            CaseID: #0123456789
                                            <br />
                                            Issue Type: Late-delivery
                                            <br />
                                            Subject: My parcel did not arrive on time
                                        </Typography>
                                        <Chip label="Pending" color="warning" />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Description: My parcel has not yet arrived yet
                                            <br />
                                            Agent ID: #12345
                                            <br />
                                            Agent Name: Ben Dover
                                            <br />
                                            Agent Email: bendoverheheheh@gmail.com
                                            <br />
                                            Tracking ID: #1234355
                                            <br />
                                            Estimated Time Arrival: 3 days
                                            <Button sx={{ float: 'right', marginBottom: '10px' }} variant="outlined">Chat with Live Agent</Button>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ marginBottom: '1em' }} expanded={expanded === 'panel2'} onChange={handleAccordion('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            CaseID: #9876543210
                                            <br />
                                            Issue Type: Pick-up
                                            <br />
                                            Subject: Deliver driver did not come to pick up our package
                                        </Typography>
                                        <Chip label="Pending" color="warning" />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Description: Deliver driver did not come to pick up my package and it is still in our warehouse
                                            <br />
                                            Agent ID: #12345
                                            <br />
                                            Agent Name: Ben Dover
                                            <br />
                                            Agent Email: bendoverheheheh@gmail.com
                                            <br />
                                            Tracking ID: #1980944
                                            <br />
                                            Estimated Time Arrival: 2 days
                                            <Button sx={{ float: 'right', marginBottom: '10px' }} variant="outlined">Chat with Live Agent</Button>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ marginBottom: '1em' }} expanded={expanded === 'panel3'} onChange={handleAccordion('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            #24568135790
                                            <br />
                                            Issue Type: Damaged Packaging
                                            <br />
                                            Subject: Package was damaged upon arrival
                                        </Typography>
                                        <Chip label="Pending" color="warning" />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Description: I found my package damanged upon receiving it
                                            <br />
                                            Agent ID: #134567
                                            <br />
                                            Agent Name: Ash Craig
                                            <br />
                                            Agent Email: myashcraig@gmail.com
                                            <br />
                                            Tracking ID: #1980944
                                            <br />
                                            Estimated Time Arrival: 2 days
                                            <Button sx={{ float: 'right', marginBottom: '10px' }} variant="outlined">Chat with Live Agent</Button>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </TabPanel>

                            <TabPanel value="2">
                                <Accordion sx={{ marginBottom: '1em' }} expanded={expanded === 'panel1'} onChange={handleAccordion('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            CaseID: #0123456789
                                            <br />
                                            Issue Type: Late-delivery
                                            <br />
                                            Subject: My parcel did not arrive on time
                                        </Typography>
                                        <Chip label="Completed" color="success" />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Description: My parcel has not yet arrived yet
                                            <br />
                                            Agent ID: #12345
                                            <br />
                                            Agent Name: Ben Dover
                                            <br />
                                            Agent Email: bendoverheheheh@gmail.com
                                            <br />
                                            Tracking ID: #1234355
                                            <br />
                                            Estimated Time Arrival: 3 days
                                            <Button sx={{ float: 'right', marginBottom: '10px' }} variant="outlined">Chat with Live Agent</Button>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ marginBottom: '1em' }} expanded={expanded === 'panel2'} onChange={handleAccordion('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            CaseID: #9876543210
                                            <br />
                                            Issue Type: Pick-up
                                            <br />
                                            Subject: Deliver driver did not come to pick up our package
                                        </Typography>
                                        <Chip label="Completed" color="success" />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Description: Deliver driver did not come to pick up my package and it is still in our warehouse
                                            <br />
                                            Agent ID: #12345
                                            <br />
                                            Agent Name: Ben Dover
                                            <br />
                                            Agent Email: bendoverheheheh@gmail.com
                                            <br />
                                            Tracking ID: #1980944
                                            <br />
                                            Estimated Time Arrival: 2 days
                                            <Button sx={{ float: 'right', marginBottom: '10px' }} variant="outlined">Chat with Live Agent</Button>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ marginBottom: '1em' }} expanded={expanded === 'panel3'} onChange={handleAccordion('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            #24568135790
                                            <br />
                                            Issue Type: Damaged Packaging
                                            <br />
                                            Subject: Package was damaged upon arrival
                                        </Typography>
                                        <Chip label="Completed" color="success" />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Description: I found my package damanged upon receiving it
                                            <br />
                                            Agent ID: #134567
                                            <br />
                                            Agent Name: Ash Craig
                                            <br />
                                            Agent Email: myashcraig@gmail.com
                                            <br />
                                            Tracking ID: #1980944
                                            <br />
                                            Estimated Time Arrival: 2 days
                                            <Button sx={{ float: 'right', marginBottom: '10px' }} variant="outlined">Chat with Live Agent</Button>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </ThemeProvider>
            </div>

            <StyledFab color="default" aria-label="add">
                <Link href='/form'><AddIcon /></Link>
            </StyledFab>
        </div>
    )
}

export default Dashboard;