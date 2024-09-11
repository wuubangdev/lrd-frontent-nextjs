import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";




export default function StudentActivity() {
    return (
        <Card>
            <CardContent>
                <Box
                    key={`std-activity-1`}
                    sx={{
                        position: "relative",
                        height: { xs: 400, sm: 1400 },
                        my: 2
                    }}
                >
                    <Image
                        alt="std-research-acti"
                        src={`/images/alumni/nckh_sv.jpg`}
                        sizes='100%'
                        fill
                    // style={{
                    //   objectFit: 'contain',
                    // }}
                    />
                </Box>
                <Box
                    key={`std-activity-2`}
                    sx={{
                        position: "relative",
                        height: { xs: 400, sm: 1400 },
                        my: 2
                    }}
                >
                    <Image
                        alt="std-research-acti"
                        src={`/images/alumni/ngoaikhoa.jpg`}
                        sizes='100%'
                        fill
                    // style={{
                    //   objectFit: 'contain',
                    // }}
                    />
                </Box>
            </CardContent>
        </Card>

    )
} 