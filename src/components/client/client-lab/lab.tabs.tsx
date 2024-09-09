'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import LabContent, { IDevice, LabInfoData } from './lab.content';
import { title } from 'process';
import { IPublication } from '../publication/publication.item';

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

const images = [
    '/images/hero/hero-1.png',
    '/images/hero/hero-2.png',
    '/images/hero/tuyensinh_qldd_2024.jpg',
];

const devices: IDevice[] = [
    {
        id: "1",
        image: "",
        name: "Bộ máy toàn đạc điện tử: GTS-229",
        quality: 1
    },
    {
        id: "2",
        image: "",
        name: "Bộ máy toàn đạc điện tử: GPT-3100N",
        quality: 1
    },
    {
        id: "3",
        image: "",
        name: "Bộ máy toàn đạc điện tử: GPT-7500",
        quality: 1
    },
    {
        id: "4",
        image: "",
        name: "Máy định vị GPS",
        quality: 13
    },
    {
        id: "5",
        image: "",
        name: "Máy thủy bình điện tử Orion+ 2LS",
        quality: 2
    },
    {
        id: "6",
        image: "",
        name: "Máy tính để bàn (HP Prodesk 400G2-G3250)",
        quality: 30
    },
]
const devices2: IDevice[] = [
    {
        id: "1",
        image: "",
        name: "Khoan phẫu diện đất",
        quality: 10
    },
    {
        id: "2",
        image: "",
        name: "Ring lấy mẫu đất",
        quality: 30
    },
    {
        id: "3",
        image: "",
        name: "Máy đo pH, EC ngoài đồng",
        quality: 4
    },
    {
        id: "4",
        image: "",
        name: "Máy đo pH, EC trong phòng TN",
        quality: 2
    },
    {
        id: "5",
        image: "",
        name: "Cân phân tích 4 số lẻ",
        quality: 1
    },
    {
        id: "6",
        image: "",
        name: "Cân phân tích 3 số lẻ",
        quality: 1
    },
    {
        id: "7",
        image: "",
        name: "Cân phân tích 2 số lẻ",
        quality: 1
    },
    {
        id: "8",
        image: "",
        name: "	Tủ sây",
        quality: 2
    },
    {
        id: "9",
        image: "",
        name: "Quyển so màu Mulsell",
        quality: 10
    },
    {
        id: "10",
        image: "",
        name: "Thiết bị đo độ ẩm",
        quality: 4
    },
    {
        id: "11",
        image: "",
        name: "Kệ phơi mẫu",
        quality: 5
    },
    {
        id: "12",
        image: "",
        name: "Tủ hút ẩm trữ mẫu",
        quality: 2
    },
]

const subjectUniversity: string[] = [
    "Hệ thống thông tin địa lý và định vị toàn cầu (GIS-GPS)",
    "Quản lý thông tin đất LIS-LIM",
    "Hệ quản trị cơ sở dữ liệu địa chính",
    "Đồ họa và thiết kế cảnh quan đô thị",
    "Mô hình hóa trong quản lý đất đai",
    "Kiểm kê và chỉnh lý biến động",
    "Viễn thám đại cương",
    "Viễn thám ứng dụng",
    "Viễn thám ứng dụng Lâm nghiệp",
    "Phân tích và Thiết kế HTTT địa chính",
    "Thống kê địa lý",
    "Kỹ thuật và ứng dụng UAV",
    "Trắc địa đại cương",
    "Đo đạc địa chính",
    "Đo đạc lâm nghiệp",
    "Kỹ thuật bản đồ địa chính",
]
const subjectUniversity2: string[] = [
    "Thỗ nhưỡng A (NN230).",
    "Đánh giá đất (NN508).",
    "Quản lý khai thác tài nguyên đất đai (NN176)",
    "Nguồn gốc và phân loại đất (NN276)",
    "Khảo sát lập bản đồ đất (NN540).",
    "Thực tập giáo trình (NN261)",
]

const subjectGraduate: string[] = [
    "Tin học chuyên ngành Quản lý đất đai",
    "Trắc địa ứng dụng",
    "Hệ thống định vị toàn cầu GPS trong quản lý đất đai",
    "Mô hình dự báo trong quy hoạch sử dụng đất",
    "Thống kê phép thí nghiệm ứng dụng",
    "Thống kê địa lý trong quản lý đất đai",
    "GIS và viễn thám ứng dụng",
]
const subjectGraduate2: string[] = [
    "Đánh giá đất đai nâng cao (MT659)",
    "Xây dựng bản đồ tài nguyên đất đai (MTD617)",
    "Thực tập giáo trình (MT661)",
]

const objective: string[] = [
    "Ứng dụng GIS-Viễn thám trong theo dõi tài nguyên và môi trường",
    "Mô hình hóa và dự báo",
    "Xây dựng cơ sở dữ liệu địa lý, webgis về nông nghiệp, tài nguyên và môi trường",
    "Phát triển các phương pháp xử lý ảnh sử dụng Google Earth Engine",
    "Phát triển ứng dụng UAV",
]

const globalRelation: string[] = [
    "Trung tâm GIS và Remote sensing-NCU,",
    "ĐH Wageningen",
    "Viện ITC (Hà Lan),",
    "ĐH Bonn của Đức,",
    "Viện Viễn Thám của Đức,",
    "Viện công nghệ Châu Á - AIT",
]

const localRelation: string[] = [
    "Viện công nghệ vũ trụ",
    "Trung tâm ứng dụng công nghệ vệ tinh miền Nam",
    "Các sở Tài nguyên và môi trường các tỉnh",
    "Các sở Khoa học công nghệ các tỉnh",
    "Các viện nghiên cứu và trường đại học trong nước",
]

const publication: IPublication[] = [
    {
        authors: "Trần Thanh Tài, Phan Kiều Diễm, Nguyễn Kiều Diễm",
        year: "2019",
        title: "Xây dựng bản đồ phân loại rừng sử dụng chuỗi ảnh khác biệt thực vật. Tạp chí khoa học đất/ Hiệp hội khoa học đất Việt Nam",
        journal: "Tạp chí khoa học đất/ Hiệp hội khoa học đất Việt Nam",
        code: "ISSN: 2525-2216"
    },
    {
        authors: "Nguyễn Kiều Diễm, Nguyễn Thị Hồng Ngân, Võ Quốc Tuấn",
        year: "2019",
        title: "Đánh giá sự thay đổi hiện trạng sử dụng đất khu vực vườn quốc gia Tràm Chim giai đoạn 2008 – 2018.",
        journal: "Kỷ yếu hội thảo ứng dụng GIS toàn quốc năm 2019. Nhà xuất bản nông nghiệp",
        code: "ISBN: 978-604-60-3104-8"
    },
    {
        authors: "Nguyễn Kiều Diễm, Trần Thị Kim Sa, Võ Quốc Tuấn",
        year: "2019",
        title: "Đánh giá sự thay đổi diện tích rừng phòng hộ tỉnh Bạc Liêu từ năm 2016 đến năm 2018",
        journal: "Tạp chí khoa học đất/ Hiệp hội khoa học đất Việt Nam",
        code: "ISSN: 2225-2516"
    },
]


const laboratories: LabInfoData[] = [
    {
        title: "Phòng thí nghiệm GIS - Viễn Thám",
        images: images,
        description: "Phòng thí nghiệm GIS – Viễn thám có chức năng phục vụ giảng dạy đại học và sau đại học các môn học thuộc chuyên ngành Quản lý đất đai, Lâm sinh, Quản lý tài nguyên môi trường, Biến đổi khí hậu và quản lý đồng bằng. Ngoài ra, Phòng thí nghiệp GIS – Viễn thám còn là nơi triển khai các nghiên cứu khoa học, các đề tài trong nước và quốc tế thuộc lĩnh vực GIS, viễn thám, UAVs, bản đồ và các lĩnh vực có liên quan tới đo đạc.",
        task: "Phòng thí nghiệm “GIS & Viễn thám” được thành lập với nhiệm vụ giảng dạy và nghiên cứu chuyên sâu các lĩnh vực liên quan tới việc ứng dụng ảnh viễn thám và phân tích không gian, đo đạc, bản đồ trong quản lý tài nguyên môi trường. Đồng thời, cũng là nơi phục vụ cho việc phát triển các ý tưởng của cán bộ và sinh viên trong lĩnh vực viễn thám-phân tích không gian, đo đạc bản đồ phục vụ công tác quản lý đất đai, khai thác và quản lý tài nguyên đất đai, môi trường.",
        devices: devices,
        subjectUniversity: subjectUniversity,
        subjectGraduate: subjectGraduate,
        researchArea: {
            description: "PTN là nơi nghiên cứu ứng dụng công nghệ GIS và viễn thám trong các lĩnh vực, thực hiện xử lý các dữ liệu của các dự án hợp tác trong và ngoài nước. Bên cạnh đó phòng thí nghiệm là nơi cho các sinh viên, học viên nghiên cứu thực hiện các đề tài luận án tốt nghiệp liên quan đến lãnh vực GIS và Viễn thám, phục vụ cho việc giảng dạy, đào tạo của Khoa và trường.",
            objective: objective,
            globalRelation: globalRelation,
            localRelation: localRelation,
        },
        publications: publication,

    },
    {
        title: "Phòng thí nghiệm TNĐĐ",
        images: images,
        description: "Phòng thí nghiệm Tài nguyên Đất đai có chức năng phục vụ giảng dạy đại học và sau đại học các môn học thuộc chuyên ngành Quản lý đất đai, Lâm sinh, Khoa học đất, Trồng trọt, Nông học, Phát triển nông thôn… phục vụ phân tích, đánh giá các chỉ tiêu về lý, hóa học đất, nước, phân bón và cây trồng cho sinh viên và học viên thực hiện luận văn tốt nghiệp. Ngoài ra, phòng thí nghiệp Tài nguyên Đất đai còn là nơi triển khai các nghiên cứu khoa học, phục vụ cho các nghiên cứu khoa học cấp trường, địa phương và hợp tác quốc tế của Bộ Môn Tài nguyên Đất đai và Khoa Môi trường & TNTN. Cùng với hoạt động nghiên cứu khoa học, phòng thí nghiệm cũng là nơi tổ chức các lớp tập huấn chuyên ngành, các diễn đàn thảo luận chuyên sâu về lĩnh vực quản lý đất đai, khoa học đất, môi trường đất và nước ở ĐBSCL",
        task: "Giảng dạy thực tập cho sinh viên trong các môn học liên quan đến khảo sát phân loại đât, đánh giá chất lượng đất, độ phì đất và thoái hóa đất nông nghiệp các môn học thuộc chuyên ngành Quản lý đất đai, Lâm sinh, Khoa học đất, Trồng trọt, Nông học, Phát triển nông thôn. Hỗ trợ sinh viên, học viên trong việc thực hiện phân tích các chỉ tiêu hóa học, vật lý phục vụ đề tài tốt nghiệp cho sinh viên, học viên cao học và nghiên cứu sinh Thực hiện phân tích các chỉ tiêu về vật lý, hóa học đất, nước, thực vật và phân bón.",
        devices: devices2,
        subjectUniversity: subjectUniversity2,
        subjectGraduate: subjectGraduate2,
        researchArea: {
            description: "Hoat động nghiên cứu khoa học trong lĩnh vực phân tích, đánh giá và quản lý tài nguyên môi trường đất và nước. Những nội dung hoạt động nghiên cứu khoa học của Phòng thí nghiệm sẽ tập trung chủ yếu vào: Nghiên cứu phân tích các đặc tính lý hóa của tài nguyên đất phục vụ cho các dự án chương trình của công tác đánh giá, phân vùng, quy hoạch và thiết kế nông nghiệp; Nghiên cứu phân tích các chỉ tiêu về môi trường của tài nguyên đất, nước và không khí; Nghiên cứu và áp dụng các phương pháp tiên tiến, tiêu chuẩn mới trong phân tích đất và môi trường; Hợp tác với các cơ quan, cá nhân trong và ngoài nước về nghiên cứu khoa học, về nhu cầu phân tích trong công tác phân tích đất và môi trường.",
            objective: objective,
            globalRelation: globalRelation,
            localRelation: localRelation,
        },
        publications: publication,

    },
];

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function LabTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs value={value} onChange={handleChange} variant='scrollable'>
                        {laboratories && laboratories.map((laboratoriy, i) => {
                            return (
                                <Tab
                                    key={`program-tab-${i}`}
                                    label={laboratoriy.title}
                                    {...a11yProps(i)}
                                    sx={{ fontWeight: 600 }}
                                />
                            )
                        })}
                    </Tabs>
                </Box>
                {laboratories && laboratories.map((laboratoriy, i) => {
                    return (
                        <AcademyTabPanel key={`program-panel-${i}`} value={value} index={i}>
                            <LabContent programInfoData={laboratoriy} />
                        </AcademyTabPanel>
                    )
                })}
            </Box>
        </Container>
    );
}