import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Link } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

interface IReport {
    title: string;
    link: string;
}

const reports: IReport[] = [
    {
        title: "Bảo vệ luận án tiến sĩ cấp trường, NCS Nguyễn Minh Thông",
        link: "#"
    },
    {
        title: "Phát bằng tiến sĩ, thạc sĩ Quản lý Đất đai 2020",
        link: "#"
    },
    {
        title: "Kế hoạch khung thực hiện luận văn tốt nghiệp học kỳ 2, 2021-2022",
        link: "#"
    },
    {
        title: "Kế hoạch khung thực hiện luận văn tốt nghiệp học kỳ 2, 2021-2022",
        link: "#"
    },
    {
        title: "Thông báo đăng ký LVTN học kỳ 2, 2021-2022.",
        link: "#"
    },
    {
        title: "Kiểm định chất lượng AUN-QA ngành QLĐĐ.",
        link: "#"
    },
    {
        title: "Bảo vệ luận án tiến sĩ cấp trường, NCS Nguyễn Minh Thông",
        link: "#"
    },
    {
        title: "Phát bằng tiến sĩ, thạc sĩ Quản lý Đất đai 2020",
        link: "#"
    },
    {
        title: "Kế hoạch khung thực hiện luận văn tốt nghiệp học kỳ 2, 2021-2022",
        link: "#"
    },
    {
        title: "Kế hoạch khung thực hiện luận văn tốt nghiệp học kỳ 1, 2021-2022",
        link: "#"
    },
    {
        title: "Thông báo đăng ký LVTN học kỳ 2, 2021-2022.",
        link: "#"
    },
    {
        title: "Kiểm định chất lượng AUN-QA ngành QLĐĐ.",
        link: "#"
    },
]

export function AlumniReport() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack>
                <Grid container spacing={2}>
                    {reports && reports.map((report, i) => (
                        <Grid item xs={12} md={6} key={`report-alumni-${i}`}>
                            <Item >
                                <Link href={`${report.link}`}>{report.title}</Link>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    )
}