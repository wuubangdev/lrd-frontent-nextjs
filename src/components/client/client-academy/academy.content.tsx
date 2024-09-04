import { Card, CardContent, Typography, Grid, Box, Container, Stack, Chip } from '@mui/material';
export interface ProgramInfoData {
    title: string;
    accreditation: string;
    description: string;
    objectives: string;
    skills: string[];
    opportunities: string;
    trainingInfo: {
        traningAddress: string;
        traningTitle: string;
        traningCode: string;
        traningDuring: string;
        traningLevel: string;
        traningAdmission: string[];
    };
    programStructure: string;
    researchAreas: string[];
    partnerships: string;
    jobPositions: string[];
    workplaces: string[];
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent sx={{ textAlign: "justify" }}>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px' }}>
                                {description} {accreditation && accreditation !== "" &&
                                    <span style={{ color: "blue" }}>
                                        {accreditation}
                                    </span>
                                }
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Mục tiêu đào tạo</Typography>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px' }}>
                                {objectives}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Kỹ năng nghề nghiệp:</Typography>
                            <Typography variant="body1" paragraph>
                                {skills && skills.map((skill, i) => {
                                    return (
                                        <Typography key={"skill-job-" + { i }} variant="body1" paragraph>
                                            {skill}
                                        </Typography>
                                    )
                                })}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Cơ hội học tập nâng cao trình độ sau đại học</Typography>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px' }}   >
                                {opportunities}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Thông tin đào tạo</Typography>
                            <Grid container spacing={2} p={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">Địa chỉ đào tạo: <b>{trainingInfo.traningAddress}</b></Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">Tên ngành học: <b>{trainingInfo.traningTitle}</b></Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">Mã ngành: <b>{trainingInfo.traningCode}</b></Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">Thời gian đào tạo: <b>{trainingInfo.traningDuring}</b></Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">Danh hiệu khoa học: <b>{trainingInfo.traningLevel}</b></Typography>
                                </Grid>
                                <Grid item xs={12} md={12} sx={{ display: "flex", gap: 1 }}>
                                    <Typography variant="h6">Tổ hợp xét tuyển:</Typography>
                                    <Stack direction="row" spacing={1}>
                                        {trainingInfo && trainingInfo.traningAdmission
                                            && trainingInfo.traningAdmission.map((item, i) => {
                                                return (
                                                    <Chip key={"training-admission-" + { i }} label={item} />
                                                )
                                            })}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="h6">Đơn vị quản lý: Bộ môn Tài Nguyên Đất Đai, Khoa MT & TNTN, ĐHCT</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Chương trình đào tạo</Typography>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px' }}>
                                {programStructure}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Công tác nghiên cứu khoa học</Typography>
                            <Typography variant='body1' paragraph sx={{ textIndent: '20px' }}>Để phục vụ cho công tác giảng dạy và phục vụ sản xuất, bộ môn chú trọng nghiên cứu trên các lĩnh vực:</Typography>
                            <Container>
                                {researchAreas && researchAreas.map((researchArea, i) => {
                                    return (
                                        <Typography key={"research-area-" + { i }} variant="body1" paragraph>
                                            - {researchArea}
                                        </Typography>
                                    )
                                })}
                            </Container>
                            <Typography variant='body1' paragraph sx={{ textIndent: '20px' }}>Trong quá trình học tập sinh viên có cơ hội nhận học bổng từ cựu sinh viên và các tổ chức liên quan đến chuyên ngành hỗ trợ sinh viên vượt khó học tập, sinh viên có hoàn cảnh khó khăn.</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Quan hệ hợp tác</Typography>
                            <Typography variant="body1" paragraph sx={{ textIndent: '20px' }}>
                                {partnerships}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Vị trí việc làm</Typography>
                            {jobPositions && jobPositions.map((jobPosition, i) => {
                                return (
                                    <Typography key={"job-position-" + { i }} variant="body1" paragraph>
                                        {jobPosition}
                                    </Typography>
                                )
                            })}
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Nơi làm việc</Typography>
                            {workplaces && workplaces.map((workplace, i) => {
                                return (
                                    <Typography key={"work-place-" + { i }} variant="body1" paragraph>
                                        {workplace}
                                    </Typography>
                                )
                            })}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AcademyContent;