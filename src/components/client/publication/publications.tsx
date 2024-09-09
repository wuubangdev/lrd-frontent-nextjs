'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Container, } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PublicationDetails, { IPublication } from './publication.item';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? "#fff" : '#1A2027',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface IProps {
    publications: IPublication[];
}

export default function Publications(props: IProps) {
    const { publications } = props
    return (
        <Box>
            <Container
                id="sub-staff"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 1 },

                }}
            >
                <Paper sx={{ width: '100%' }}>
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={2}
                            sx={{
                                backgroundColor: (theme) => theme.palette.mode === 'light' ? "#fff" : '#1A2027',
                            }}
                        >
                            {publications && publications.map((publication, i) => {
                                return (
                                    <Item
                                        key={`public-item-${i}`}
                                        sx={{
                                            cursor: "pointer",
                                            ":hover": {
                                                transition: "1s",
                                                transform: "translateX(15px)",
                                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                            }
                                        }}>
                                        <PublicationDetails publication={publication} />
                                    </Item>
                                )
                            })}
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}