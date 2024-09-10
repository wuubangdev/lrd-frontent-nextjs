import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';


const BrandStack = () => {
    return (
        <>
            <Stack
                useFlexGap
                sx={{
                    width: { xs: '100%', sm: '70%' },
                    mt: { xs: 2, sm: 1 },
                    mb: { xs: 2, sm: 4 },
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 'clamp(2.5rem, 10vw, 1.5rem)',
                    }}
                >
                    <Typography
                        component="span"
                        variant="h6"
                        sx={{
                            display: { xs: 'none', sm: "block" },
                            fontSize: 'clamp(2.5rem, 10vw, 1.5rem)',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Tài Nguyên',
                                1500,
                                'Tài Nguyên Đất Đai',
                                1500,
                                'Tài Nguyên',
                                1500,
                                '',
                            ]}
                            wrapper="span"
                            speed={50}
                            // style={{ fontSize: '1.2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </Typography>
                </Typography>
                <Typography
                    textAlign="center"
                    variant='h5'
                    color="text.secondary"
                    sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                >
                    Khoa Môi trường và Tài nguyên thiên nhiên - Đại học Cần Thơ
                </Typography>
            </Stack>
        </>
    )

}

export default BrandStack;