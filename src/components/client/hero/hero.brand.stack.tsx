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
                            fontSize: 'clamp(2.5rem, 10vw, 1.5rem)',
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
                    variant='h5'
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