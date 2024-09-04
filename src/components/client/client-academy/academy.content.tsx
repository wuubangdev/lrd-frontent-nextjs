
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
export interface ProgramInfoData {
    title: string;
    accreditation: string;
    description: string;
    objectives: string;
    skills: string;
    opportunities: string;
    trainingInfo: string;
    programStructure: string;
    researchAreas: string;
    partnerships: string;
    jobPositions: string;
    workplaces: string;
}
interface IProps {
    programInfoData: ProgramInfoData;
}

const AcademyContent = (props: IProps) => {
    const {
        title,
        accreditation,
        description,
        objectives,
        skills,
        opportunities,
        trainingInfo,
        programStructure,
        researchAreas,
        partnerships,
        jobPositions,
        workplaces,
    } = props.programInfoData;
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                {accreditation}
            </Typography>
            <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h6">Description</Typography>
                    <Typography variant="body1" paragraph>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Mục tiêu đào tạo, kỹ năng nghề nghiệp</Typography>
                            <Typography variant="body1" paragraph>
                                {objectives}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {skills}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Cơ hội học tập nâng cao trình độ sau đại học</Typography>
                            <Typography variant="body1" paragraph>
                                {opportunities}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Card sx={{ marginY: 2 }}>
                <CardContent>
                    <Typography variant="h6">Thông tin đào tạo</Typography>
                    <Typography variant="body1" paragraph>
                        {trainingInfo}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginY: 2 }}>
                <CardContent>
                    <Typography variant="h6">Chương trình đào tạo</Typography>
                    <Typography variant="body1" paragraph>
                        {programStructure}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginY: 2 }}>
                <CardContent>
                    <Typography variant="h6">Công tác nghiên cứu khoa học</Typography>
                    <Typography variant="body1" paragraph>
                        {researchAreas}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginY: 2 }}>
                <CardContent>
                    <Typography variant="h6">Quan hệ hợp tác</Typography>
                    <Typography variant="body1" paragraph>
                        {partnerships}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginY: 2 }}>
                <CardContent>
                    <Typography variant="h6">Vị trí việc làm</Typography>
                    <Typography variant="body1" paragraph>
                        {jobPositions}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginY: 2 }}>
                <CardContent>
                    <Typography variant="h6">Nơi làm việc</Typography>
                    <Typography variant="body1" paragraph>
                        {workplaces}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AcademyContent;