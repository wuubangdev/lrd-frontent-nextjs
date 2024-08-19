import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from 'next/image';
import { sendRequest } from '@/utils/api';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface ShowStaffProps {
    staffId: number | string;
}
const ShowStaff = (props: ShowStaffProps) => {
    const { staffId } = props;
    const [staffInfo, setStaffInfo] = React.useState<IStaff>()

    React.useEffect(() => {
        fetchStaffData();
    }, [])

    const fetchStaffData = async () => {
        const res = await sendRequest<IBackendRes<IStaff>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/staffs/${staffId}`,
            method: "GET",
        })
        if (res?.statusCode === 200) {
            setStaffInfo(res.data);
        }
    }

    return (
        <Card sx={{ width: "100%" }}>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    alt='staff-avatar'
                    src={`/images/logo_png.png`}
                    width={150}
                    height={150}
                />
            </Box>
            <CardContent>
                <Stack
                    direction="column"
                    divider={<Divider orientation="horizontal" flexItem />}
                    spacing={0.5}
                >
                    <Item><b style={{ color: "#0A6946", textTransform: "uppercase" }}>{staffInfo?.name}</b> </Item>
                    <Item><b>Email: </b> {staffInfo?.email}</Item>
                    <Item><b>Gender: </b> {staffInfo?.gender}</Item>
                    <Item><b>Birth day: </b> {staffInfo?.birthDay}</Item>
                    <Item><b>Born: </b> {staffInfo?.born}</Item>
                    <Item><b>Address: </b> {staffInfo?.address}</Item>
                    <Item><b>Position: </b> {staffInfo?.position}</Item>
                    <Item><b>Office: </b> {staffInfo?.office}</Item>
                    <Item><b>Civil Servants: </b> {staffInfo?.civilServants}</Item>
                    <Item><b>Year Exp: </b> {staffInfo?.yearExp}</Item>
                    <Item><b>Level: </b> {staffInfo?.level}</Item>
                    <Item><b>Training Process: </b> {staffInfo?.trainingProcess}</Item>
                    <Item><b>Working Process: </b> {staffInfo?.workingProcess}</Item>
                    <Item><b>Created At: </b> {staffInfo?.createdAt}</Item>
                    <Item><b>Updated At: </b> {staffInfo?.updatedAt}</Item>
                    <Item><b>Created By: </b> {staffInfo?.createdBy}</Item>
                    <Item><b>Updated By: </b> {staffInfo?.updatedBy}</Item>
                </Stack>

            </CardContent>
        </Card >
    )
}

export default ShowStaff;