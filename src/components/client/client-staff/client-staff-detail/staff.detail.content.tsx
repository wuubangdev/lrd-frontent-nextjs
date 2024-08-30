'use client'
import { Box, Container, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import PersonalDetail from "./staff-info/personal.details";
import Qualifications from "./staff-info/qualifications";
import Professional from "./staff-info/professional";
import Publications from "./staff-info/publications";

const StaffDetailContent = () => {
    return (
        <Container
            id="staff-head"
            sx={{
                pb: { xs: 4, sm: 6 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 2, sm: 3 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '100%' },
                    textAlign: "center",
                }}
            >
                <Typography component="h4" variant="h4" color="text.primary"
                    sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: (theme) => theme.palette.mode === "light" ? "#0263B6" : ""
                    }}
                >
                    INFORMATION
                </Typography>
            </Box>
            <Accordion defaultExpanded sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    sx={{ fontWeight: 600 }}
                >
                    I. Personal details
                </AccordionSummary>
                <AccordionDetails>
                    <PersonalDetail />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    sx={{ fontWeight: 600 }}
                >
                    II. Qualifications (training)
                </AccordionSummary>
                <AccordionDetails>
                    <Qualifications />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    sx={{ fontWeight: 600 }}
                >
                    III. Professional working experience
                </AccordionSummary>
                <AccordionDetails>
                    <Professional />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    sx={{ fontWeight: 600 }}
                >
                    IV. List of publications (listed as reference format)
                </AccordionSummary>
                <AccordionDetails>
                    <Publications />
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default StaffDetailContent;