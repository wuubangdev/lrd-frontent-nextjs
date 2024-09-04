'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AcademyContent, { ProgramInfoData } from './academy.content';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function AcademyTabPanel(props: TabPanelProps) {
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

interface IProgram {
    title: string;
    images: string[];
    programData: ProgramInfoData;
}

export default function AcademyTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    //Fake data
    const programs: IProgram[] = [
        {
            title: "Đại học Quản lý Đất đai",
            images: [""],
            programData: {
                title: "Đại học Quản lý đất đai - Đạt chuẩn quốc tế AUN-QA",
                accreditation: "Ngành được công nhận đạt chuẩn quốc tế AUN-QA năm 2022",
                description: "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành...",
                objectives: "Chuyên ngành đào tạo kỹ sư ngành Quản lý Đất đai nhằm đào tạo nguồn nhân lực có chất lượng...",
                skills: "Sinh viên được học kiến thức chuyên ngành dành cho kỹ sư quản lý đất đai...",
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: "Địa chỉ đào tạo: Đại học Cần Thơ...",
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                researchAreas: "Để phục vụ cho công tác giảng dạy và phục vụ sản xuất, bộ môn chú trọng nghiên cứu trên các lĩnh vực...",
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: "Kỹ sư phụ trách đo đạc, xây dựng bản đồ, thiết kế mô hình và nhập cơ sở dữ liệu, giải đoán ảnh viễn thám...",
                workplaces: "Có khả năng đảm nhiệm công tác quản lý và điều hành: cán bộ nghiên cứu, cán bộ quản lý, cán bộ kỹ thuật...",
            }
        },
        {
            title: "Quy hoạch vùng và đô thị",
            images: [""],
            programData: {
                title: "Quy hoạch vùng và đô thị",
                accreditation: "Ngành được công nhận đạt chuẩn quốc tế AUN-QA năm 2022",
                description: "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành...",
                objectives: "Chuyên ngành đào tạo kỹ sư ngành Quản lý Đất đai nhằm đào tạo nguồn nhân lực có chất lượng...",
                skills: "Sinh viên được học kiến thức chuyên ngành dành cho kỹ sư quản lý đất đai...",
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: "Địa chỉ đào tạo: Đại học Cần Thơ...",
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                researchAreas: "Để phục vụ cho công tác giảng dạy và phục vụ sản xuất, bộ môn chú trọng nghiên cứu trên các lĩnh vực...",
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: "Kỹ sư phụ trách đo đạc, xây dựng bản đồ, thiết kế mô hình và nhập cơ sở dữ liệu, giải đoán ảnh viễn thám...",
                workplaces: "Có khả năng đảm nhiệm công tác quản lý và điều hành: cán bộ nghiên cứu, cán bộ quản lý, cán bộ kỹ thuật...",
            }
        },
        {
            title: "Thạc sĩ Quản lý Đất đai",
            images: [""],
            programData: {
                title: "Thạc sĩ Quản lý Đất đai",
                accreditation: "Ngành được công nhận đạt chuẩn quốc tế AUN-QA năm 2022",
                description: "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành...",
                objectives: "Chuyên ngành đào tạo kỹ sư ngành Quản lý Đất đai nhằm đào tạo nguồn nhân lực có chất lượng...",
                skills: "Sinh viên được học kiến thức chuyên ngành dành cho kỹ sư quản lý đất đai...",
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: "Địa chỉ đào tạo: Đại học Cần Thơ...",
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                researchAreas: "Để phục vụ cho công tác giảng dạy và phục vụ sản xuất, bộ môn chú trọng nghiên cứu trên các lĩnh vực...",
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: "Kỹ sư phụ trách đo đạc, xây dựng bản đồ, thiết kế mô hình và nhập cơ sở dữ liệu, giải đoán ảnh viễn thám...",
                workplaces: "Có khả năng đảm nhiệm công tác quản lý và điều hành: cán bộ nghiên cứu, cán bộ quản lý, cán bộ kỹ thuật...",
            }
        },
        {
            title: "Tiến sĩ Quản lý Đất đai",
            images: [""],
            programData: {
                title: "Tiến sĩ Quản lý Đất đai",
                accreditation: "Ngành được công nhận đạt chuẩn quốc tế AUN-QA năm 2022",
                description: "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành...",
                objectives: "Chuyên ngành đào tạo kỹ sư ngành Quản lý Đất đai nhằm đào tạo nguồn nhân lực có chất lượng...",
                skills: "Sinh viên được học kiến thức chuyên ngành dành cho kỹ sư quản lý đất đai...",
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: "Địa chỉ đào tạo: Đại học Cần Thơ...",
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                researchAreas: "Để phục vụ cho công tác giảng dạy và phục vụ sản xuất, bộ môn chú trọng nghiên cứu trên các lĩnh vực...",
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: "Kỹ sư phụ trách đo đạc, xây dựng bản đồ, thiết kế mô hình và nhập cơ sở dữ liệu, giải đoán ảnh viễn thám...",
                workplaces: "Có khả năng đảm nhiệm công tác quản lý và điều hành: cán bộ nghiên cứu, cán bộ quản lý, cán bộ kỹ thuật...",
            }
        },
    ]

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {programs && programs.map((program, i) => {
                            return (
                                <Tab key={'program-tab-' + { i }} label={program.title} {...a11yProps(i)} />
                            )
                        })}
                    </Tabs>
                </Box>
                {programs && programs.map((program, i) => {
                    return (
                        <AcademyTabPanel key={"program-panel-" + { i }} value={value} index={i}>
                            <AcademyContent programInfoData={program.programData} />
                        </AcademyTabPanel>
                    )
                })}


            </Box>
        </Container>
    );
}