import { Card, CardContent, Typography, Grid, Box, Container, Stack, Chip, alpha } from '@mui/material';
import ClientSlider from '../slider/client.slider';
import LabDeviceTable from './lab.table.divece';
import { IPublication } from '../publication/publication.item';
import Publications from '../publication/publications';

const images = [
    '/images/hero/hero-1.png',
    '/images/hero/hero-2.png',
    '/images/hero/tuyensinh_qldd_2024.jpg',
];

export interface IDevice {
    id: string;
    name: string;
    quality: number;
    image: string;
}

export interface LabInfoData {
    title: string;
    images: string[];
    description: string;
    task: string;
    devices: IDevice[];
    subjectUniversity: string[];
    subjectGraduate: string[];
    researchArea: {
        description: string;
        objective: string[];
        globalRelation: string[];
        localRelation: string[];
    };
    publications: IPublication[];

}
interface IProps {
    programInfoData: LabInfoData;
}

const LabContent = (props: IProps) => {
    const {
        title,
        images,
        description,
        task,
        devices,
        subjectUniversity,
        subjectGraduate,
        researchArea,
        publications,
    } = props.programInfoData;
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent sx={{ textAlign: "justify", pb: 0 }}>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px', m: 0, fontWeight: 500 }}>
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{ mb: { xs: 2, sm: 3 }, }}>
                        <ClientSlider
                            images={images}
                        />
                    </Box>
                    <Card>
                        <CardContent sx={{ textAlign: "justify" }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Nhiệm vụ</Typography>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px' }}>
                                {task}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Thiết bị:</Typography>
                            <LabDeviceTable listDevices={devices} />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Học phần phụ trách giảng dạy, Lĩnh vực nghiên cứu:</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} p={2}>
                                    <Card>
                                        <Typography variant="body1" fontStyle="italic" fontWeight={600} px={2} pt={2}>Học phần phụ trách giảng dạy Đại học:</Typography>
                                        <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" p={2}>
                                            {subjectUniversity && subjectUniversity.map((item, i) => {
                                                return (
                                                    <Chip key={`subject-university-${i}`} label={item} />
                                                )
                                            })}
                                        </Stack>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Card>
                                        <Typography variant="body1" fontStyle="italic" fontWeight={600} px={2} pt={2}>Học phần phụ trách giảng dạy sau Đại học:</Typography>
                                        <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" p={2}>
                                            {subjectGraduate && subjectGraduate.map((item, i) => {
                                                return (
                                                    <Chip key={`subject-graduate-${i}`} label={item} />
                                                )
                                            })}
                                        </Stack>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Typography variant="body1" fontStyle="italic" fontWeight={600} pt={1}>Lĩnh vực nghiên cứu:</Typography>
                            <Typography variant="body1" fontStyle="italic">{researchArea.description}</Typography>
                            <Typography variant="body1" fontStyle="italic" fontWeight={600} pt={1} >Định hướng nghiên cứu chính:</Typography>
                            {researchArea?.objective.map((iteam, i) => (
                                <Typography variant="body1">{`* ${iteam}`}</Typography>
                            ))}
                            <Grid container spacing={2} p={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body1" fontStyle="italic" fontWeight={600} pt={1}>Hợp tác quốc tế:</Typography>
                                    {researchArea?.globalRelation.map((iteam, i) => (
                                        <Typography variant="body1">{`* ${iteam}`}</Typography>
                                    ))}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body1" fontStyle="italic" fontWeight={600} pt={1}>Hợp tác trong nước:</Typography>
                                    {researchArea?.localRelation.map((iteam, i) => (
                                        <Typography variant="body1">{`* ${iteam}`}</Typography>
                                    ))}
                                </Grid>
                            </Grid>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Các công trình nghiên cứu:</Typography>
                            <Box py={2}>
                                <Publications publications={publications} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LabContent;