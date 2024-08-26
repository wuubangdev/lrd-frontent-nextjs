import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';


const BrandStack = () => {
    return (
        <>
            <Stack
                spacing={2}
                useFlexGap
                sx={{
                    width: { xs: '100%', sm: '70%' },
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 'clamp(3rem, 10vw, 2rem)',
                    }}
                >
                    <Typography
                        component="span"
                        variant="h5"
                        sx={{
                            fontSize: 'clamp(3rem, 10vw, 2rem)',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Land',
                                1500,
                                'Land Resource',
                                1500,
                                'Land Resource Department',
                                1500,
                                'Land Resource Department',
                                1500,
                                'Land Resource',
                                1500,
                                'Land',
                                1500,
                                '',
                                1500,


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
                    variant='h6'
                    color="text.secondary"
                    sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                >
                    Faculty of Environment & Natural Resources - Can Tho University
                </Typography>
            </Stack>
        </>
    )

}

export default BrandStack;