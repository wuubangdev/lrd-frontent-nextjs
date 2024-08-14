'use client'
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '@/components/admin/sidebar/list.item';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useState } from 'react';
import AdminHeader from '@/components/admin/header/admin.header';
import Link from 'next/link';

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const AdminSideBar = () => {
    const [open, setOpen] = useState<boolean>(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AdminHeader
                    open={open}
                    toggleDrawer={toggleDrawer}
                />
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Link href={'/admin'} style={{ textDecoration: 'unset', color: "inherit" }}>
                                <Image
                                    alt='lrd-logo'
                                    src={'/images/logo_png.png'}
                                    width={50}
                                    height={50}
                                />
                            </Link>

                        </Box>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
            </Box>
        </>
    )
}

export default AdminSideBar;