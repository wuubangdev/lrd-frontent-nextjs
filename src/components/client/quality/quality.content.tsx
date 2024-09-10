import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import ClientSlider from '../slider/client.slider';
import Image from 'next/image';
export interface QualityInfoData {
    title: string;
    banner: string;
    images: string[];
    content: any;
}
interface IProps {
    programInfoData: QualityInfoData;
}
const QualityContent = (props: IProps) => {
    const {
        title,
        banner,
        images,
        content,
    } = props.programInfoData;
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {banner !== ''
                    ?
                    <>
                        <img alt='banner-quality' src={banner} width="100%" style={{ borderRadius: "10px" }} />
                    </>
                    : ""
                }
                <Grid item xs={12} md={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent sx={{ textAlign: "justify", pb: 0 }}>
                            <Box sx={{ textIndent: '20px', m: 0, fontWeight: 500 }}>
                                {content}
                            </Box>
                        </CardContent>
                    </Card>
                    <Box sx={{ mb: { xs: 2, sm: 3 }, }}>
                        <ClientSlider
                            images={images}
                        />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }} textAlign="center">{`Một số hình ảnh của hoạt động`}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
export default QualityContent;