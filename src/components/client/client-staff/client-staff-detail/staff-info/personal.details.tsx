import { Box, Grid, Typography } from "@mui/material";


const info = {
    fullName: "NGUYỄN KIỀU DIỄM",
    gender: "Nữ",
    dateOfBirth: "04/12/1997",
    placeOfBirth: "Sóc Trăng",
    hometown: "Kế Sách, Sóc Trăng",
    ethnicity: "Kinh",
    religion: "Không",
    highestDegree: "Thạc sĩ",
    yearOfDegree: "2021",
    highestAcademicTitle: "",
    yearOfTitle: "",
    position: "Nghiên cứu viên",
    workUnit: "Bộ môn Tài nguyên Đất đai, Khoa Môi trường & TNTN, ĐHCT",
    address: "Số 227, đường 30/4, phường Xuân Khánh, Q.NK, TPCT.",
    phone: "84-967890405",
    email: "nkdiem@ctu.edu.vn"
};

const PersonalDetail = () => {
    return (
        <Box p={3} border={1} borderColor="grey.300" borderRadius={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Họ và tên:</strong> {info.fullName}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Giới tính:</strong> {info.gender}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Ngày, tháng, năm sinh:</strong> {info.dateOfBirth}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Nơi sinh:</strong> {info.placeOfBirth}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Quê quán:</strong> {info.hometown}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Dân tộc:</strong> {info.ethnicity}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Tôn giáo:</strong> {info.religion}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Học vị cao nhất:</strong> {info.highestDegree}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Năm phong học vị:</strong> {info.yearOfDegree}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Chức danh khoa học cao nhất:</strong> {info.highestAcademicTitle}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Năm phong:</strong> {info.yearOfTitle}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Chức vụ:</strong> {info.position}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography><strong>Đơn vị công tác:</strong> {info.workUnit}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography><strong>Chỗ ở riêng hoặc địa chỉ liên lạc:</strong> {info.address}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>Điện thoại liên hệ:</strong> {info.phone}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography><strong>E-mail:</strong> {info.email}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PersonalDetail;