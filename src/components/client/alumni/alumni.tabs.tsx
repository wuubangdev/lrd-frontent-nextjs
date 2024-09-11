'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AlumniContent from './alumni.content';
import StudentActivity from './content/alumini.student.activity';
import { AlumniReport } from './content/alumni.report';
import { AlumniForm } from './content/alumni.form';
import AlumniList from './content/alumni.list';
import AlumniSocialNetWork from './content/alumni.social';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function AlumniTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AlumniTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    //Fake data

    const alumnis = [

        {
            title: "Hoạt động sinh viên",
        },
        {
            title: "Thông báo",
        },
        {
            title: "Biểu mẫu",
        },
        {
            title: "Cựu sinh viên",
        },
        {
            title: "Mạng xã hội",
        },
    ]

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs value={value} onChange={handleChange} variant='scrollable'>
                        {alumnis && alumnis.map((alumni, i) => {
                            return (
                                <Tab
                                    key={`alumni-tab-${i}`}
                                    label={alumni.title}
                                    {...a11yProps(i)}
                                    sx={{ fontWeight: 600 }}
                                />
                            )
                        })}
                    </Tabs>
                </Box>
                <AlumniTabPanel key={`alumni-panel-activity-0`} value={value} index={0}>
                    <AlumniContent>
                        <StudentActivity />
                    </AlumniContent>
                </AlumniTabPanel>
                <AlumniTabPanel key={`alumni-panel-activity-1`} value={value} index={1}>
                    <AlumniContent>
                        <AlumniReport />
                    </AlumniContent>
                </AlumniTabPanel>
                <AlumniTabPanel key={`alumni-panel-activity-2`} value={value} index={2}>
                    <AlumniContent>
                        <AlumniForm />
                    </AlumniContent>
                </AlumniTabPanel>
                <AlumniTabPanel key={`alumni-panel-activity-3`} value={value} index={3}>
                    <AlumniContent>
                        <AlumniList />
                    </AlumniContent>
                </AlumniTabPanel>
                <AlumniTabPanel key={`alumni-panel-activity-4`} value={value} index={4}>
                    <AlumniContent>
                        <AlumniSocialNetWork />
                    </AlumniContent>
                </AlumniTabPanel>
            </Box>
        </Container>
    );
}