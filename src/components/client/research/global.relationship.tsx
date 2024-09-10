import { Box, Card, Grid, Typography } from "@mui/material";


export default function GlobalRelationShip() {

    return (
        <Grid container spacing={2} pb={2}>
            <Grid item xs={12} md={12}>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        textAlign: "justify"
                    }}
                >
                    Từ ngày thành lập, Bộ môn đã thiết lập và giữ mối quan hệ hợp tác với các viện nghiên cứu và trường đại học quốc tế như Wageningen University (Hà Lan), Asian Institute Technology -AIT (Thái Lan), Centre for Remote Sensing and Image Processing, National University - CRISP (Singapore), Centre for Space and Remote Sensing Research - CSRSR (Đài Loan), International Rice Research Institute-IRRI (Philippines), Viện nghiên cứu phát triển - IRD (Pháp), ACIAR (Australia).
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    variant="outlined"
                    sx={{
                        height: 800,
                        width: '100%',
                        pointerEvents: 'none',
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'cover',
                            backgroundImage: 'url("/images/project/quocte.jpg")'
                        }}
                    />
                </Card>
            </Grid>
        </Grid>
    )
}