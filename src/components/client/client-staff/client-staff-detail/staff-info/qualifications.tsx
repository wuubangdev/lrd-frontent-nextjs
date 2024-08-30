import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

interface IQualification {
    year: number;
    institution: string;
    major: string;
}

interface ILanguage {
    title: string;
    level: number;
}

const Qualifications = () => {
    const qualifications: IQualification[] = [
        { year: 2019, institution: "Can Tho University, VN", major: "Land Management/BSc" },
        { year: 2021, institution: "Can Tho University, VN", major: "Land Management/MSc" },
        { year: 2022, institution: "BangKok University, Thai", major: "Land Management/Dr" },
    ];

    const languages: ILanguage[] = [
        { title: "English", level: 2 },
        { title: "Japan", level: 3 },
    ]
    return (
        <>
            <Box sx={{ py: 2 }}>
                <Typography sx={{ fontWeight: 600, color: "#0263B6", pb: 1 }} textAlign="center">Academic institutions</Typography>
                {/* PC */}
                <Box sx={{ width: '100%', display: { xs: "none", sm: "block" }, }}>
                    <Stepper activeStep={3} alternativeLabel orientation="horizontal">
                        {qualifications.map((qualification) => (
                            <Step key={qualification.year}>
                                <StepLabel>
                                    <Typography variant='body2'>{qualification.major}</Typography>
                                    <Typography variant='body2'>{qualification.institution}</Typography>
                                    <Typography variant='body2'>{qualification.year}</Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                {/* Mobile */}
                <Box sx={{ width: '100%', display: { xs: "flex", sm: "none" }, justifyContent: "center" }}>
                    <Stepper activeStep={3} orientation="vertical">
                        {qualifications.map((qualification) => (
                            <Step key={qualification.year}>
                                <StepLabel>
                                    <Typography variant='body2' textAlign="center">{qualification.year}</Typography>
                                    <Typography variant='body2' textAlign="center">{qualification.major}</Typography>
                                    <Typography variant='body2' textAlign="center">{qualification.institution}</Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>
            <Box>
                <Typography variant='body1' sx={{ fontWeight: 600, color: "#0263B6" }} mb={1} textAlign="center">Language</Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: "center" }} >
                    {languages.map(language => (
                        <Box key={language.title} sx={{ display: 'flex' }}>
                            <Typography component="legend">{language.title}:</Typography>
                            <Rating name="read-only" value={language.level} readOnly max={4} />
                        </Box>
                    ))}
                </Box>
            </Box >
        </>
    )
}

export default Qualifications;