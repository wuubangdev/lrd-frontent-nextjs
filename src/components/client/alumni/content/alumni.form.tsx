import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Divider, Grid, Link, Typography } from '@mui/material';
import { toSlugify } from '@/utils/global.hook';

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



interface IFroms {
    type: string;
    content: {
        title: string;
        link: string;
    }[]
}

const forms: IFroms[] = [
    {
        type: "Biểu mẫu đại học",
        content: [
            {
                title: "Biểu mẫu sinh viên",
                link: "#"
            },
        ]
    },
    {
        type: "Biểu mẫu cao học",
        content: [
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
            }
        ]
    },
    {
        type: "Biểu mẫu nghiên cứu sinh",
        content: [
            {
                title: "Biểu mẫu tiến sĩ",
                link: "#"
            },
        ]
    },
]

export function AlumniForm() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {forms && forms.map((form, i) => (
                    <Grid item xs={12} md={12} key={`${toSlugify(form.type)}-item-alumni-${i}`} >
                        <Typography variant='h5' mb={1}>{form.type}</Typography>
                        <Stack spacing={2} mb={2}>
                            {form && form.content.map((item) => (
                                <Item key={`${toSlugify(item.title)}-item-alumni-${i}`}>
                                    <Link href={`${item.link}`}>{item.title}</Link>
                                </Item>
                            ))}
                        </Stack>
                        <Divider />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}