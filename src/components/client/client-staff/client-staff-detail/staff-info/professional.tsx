import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Divider, StepContent, Typography } from '@mui/material';

interface IExpertise {
    year: string;
    title: string;
    institution: string;
}
interface IWorkshop {
    year: string;
    title: string;
    organization: string;
}
interface IProject {
    duration: string;
    title: string;
    category: string;
    position: string;
}

const Professional = () => {
    const expertise: IExpertise[] = [
        { year: "2015 to 2019", institution: "Can Tho University, VN", title: "Student" },
        { year: "2019 to present", institution: "Can Tho University, VN", title: "Research" },
    ];

    const workshops: IWorkshop[] = [
        {
            title: `The Advanced GIS and Remote Sensing for Natural Resources Monitoring and Management`,
            year: 'January, 2019',
            organization: "Can Tho University and Hokkaido University",
        },
        {
            title: 'An International Regional Science Training On "Remote Sensing of Land-Use/Cover Change and Climate Impacts In Coastal Zone',
            organization: "Prince of Songkla University, Phuket, Thailand.",
            year: 'December, 2019.',
        },
    ];
    const projects: IProject[] = [
        {
            title: `Methodology development to assess the gross primary production in different land use types in the Mekong Delta`,
            duration: '2020 - 2022',
            category: "Institutional collaborative",
            position: "Member",
        },
        {
            title: 'Assessment of land resource for sustainable development of agriculture, forestry and fisheries and socio-economic in An Bien district, Kien Giang province',
            duration: '2021 - 2023',
            category: "Institutional collaborative",
            position: "Member",

        }
    ];
    return (
        <>
            <Box sx={{ pb: 2 }}>
                <Typography sx={{ fontWeight: 600, color: "#0263B6" }}>Expertise and research interests:</Typography>
                <Box sx={{ maxWidth: "100%" }}>
                    <Stepper orientation="vertical" activeStep={3}>
                        {expertise.map((job) => (
                            <Step key={job.title} expanded>
                                <StepLabel><Typography variant='body1'>{job.year}</Typography></StepLabel>
                                <StepContent>
                                    <Typography variant='body2' textAlign="justify">{job.title}</Typography>
                                    <Typography variant='body2' textAlign="justify">{job.institution}</Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ py: 2 }}>
                <Typography variant='body1' sx={{ fontWeight: 600, color: "#0263B6" }}>Research projects/programs participating or leading relevant to the field of study: </Typography>
                <Box sx={{ maxWidth: "100%" }}>
                    <Stepper orientation="vertical" activeStep={3}>
                        {projects.map((project) => (
                            <Step key={project.title} expanded>
                                <StepLabel> <Typography variant='body1'>{project.duration}</Typography></StepLabel>
                                <StepContent>
                                    <Typography variant='body2' textAlign="justify">{project.title}</Typography>
                                    <Typography variant='body2' textAlign="justify">{project.category}</Typography>
                                    <Typography variant='body2' textAlign="justify">{project.position}</Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box >
            <Divider />
            <Box sx={{ py: 2 }}>
                <Typography variant='body1' sx={{ fontWeight: 600, color: "#0263B6" }}>Training Workshop/Certificate: </Typography>
                <Box sx={{ maxWidth: "100%" }}>
                    <Stepper orientation="vertical" activeStep={3}>
                        {workshops.map((workshop) => (
                            <Step key={workshop.title} expanded>
                                <StepLabel> <Typography variant='body1'>{workshop.year}</Typography></StepLabel>
                                <StepContent>
                                    <Typography variant='body2' textAlign="justify">{workshop.title}</Typography>
                                    <Typography variant='body2' textAlign="justify">{workshop.organization}</Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box >
        </>
    )
}

export default Professional;