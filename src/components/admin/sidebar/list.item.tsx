import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BiotechIcon from '@mui/icons-material/Biotech';
import Link from 'next/link';

export const mainListItems = (
    <React.Fragment>
        <Link href={'/admin'} style={{ textDecoration: 'unset', color: "inherit" }}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link href={'/admin/staff'} style={{ textDecoration: 'unset', color: "inherit" }}>
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Staff" />
            </ListItemButton>
        </Link>
        <Link href={'/admin/lab'} style={{ textDecoration: 'unset', color: "inherit" }}>
            <ListItemButton>
                <ListItemIcon>
                    <BiotechIcon />
                </ListItemIcon>
                <ListItemText primary="Lab" />
            </ListItemButton>
        </Link>
        <Link href={'/admin/academy'} style={{ textDecoration: 'unset', color: "inherit" }}>
            <ListItemButton>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Academy" />
            </ListItemButton>
        </Link>
        <Link href={'/admin/conference'} style={{ textDecoration: 'unset', color: "inherit" }}>
            <ListItemButton>
                <ListItemIcon>
                    <Diversity3Icon />
                </ListItemIcon>
                <ListItemText primary="Conference" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);
