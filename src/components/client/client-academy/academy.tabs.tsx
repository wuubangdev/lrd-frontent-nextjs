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
                description: "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành, các kỹ năng và sự phát triển của công nghệ thông tin, phân tích, nghiên cứu địa chính, quản lý và khai thác tài nguyên, quy hoạch và sử dụng đất một cách có hiệu quả nhất.",
                objectives: "Chuyên ngành đào tạo kỹ sư ngành Quản lý Đất đai nhằm đào tạo nguồn nhân lực có chất lượng trong lĩnh vực quản lý đất đai theo định hướng chuyên nghiệp. Sau khi sinh viên ra trường có khả năng đo đạc, thiết kế bản đồ, xây dựng cơ sở dữ liệu địa chính. Vận dụng được luật đất đai vào công tác quản lý, thanh tra và giải quyết tranh chấp về đất đai. Xây dựng được các tiêu chí đánh giá, quy hoạch phân bố sử dụng đất đô thị và nông nghiệp. Định giá đất và bất động sản. Quản lý và khai thác nguồn tài nguyên về đất đai. Ứng dụng công nghệ thông tin vào công tác quản lý tài nguyên đất và quản lý nhà nước về đất đai. Sinh viên được học kiến thức chuyên ngành dành cho kỹ sư quản lý đất đai: kiến thức ứng dụng công nghệ, đo đạc và xây dựng bản đồ (kỹ thuật bản đồ, trắc địa, đo đạc địa chính, hệ thống thông tin địa lý & định vị-GIS+GPS, đồ họa thiết kế cảnh quan đô thị, viễn thám-RS, Quản lý thông tin đất đai LIS-LIM, hệ quản trị CSDL, mô hình hóa…); kiến thức pháp luật đất đai, thanh tra và giải quyết tranh chấp, quản lý nhà nước về đất đai, lưu trữ-kiểm kê chỉnh lý biến động đất…; kiến thức tài nguyên đất đai (địa chất, thổ nhưỡng, đánh giá đất, quy hoạch phát triển vùng đô thị, quy hoạch và phát triển nông thôn, quản lý khai thác tài nguyên đất đai…; kiến thức định giá giá đất, thị trường bất động sản...Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ quản lý đất đai tại Đại học Cần thơ hoặc các ngành gần khoa học đất; môi trường đất và nước; phát triển nông thôn...",
                skills: [
                    "Kiến thức ứng dụng công nghệ, đo đạc và xây dựng bản đồ (kỹ thuật bản đồ, trắc địa, đo đạc địa chính, hệ thống thông tin địa lý & định vị-GIS+GPS, đồ họa thiết kế cảnh quan đô thị, viễn thám-RS, Quản lý thông tin đất đai LIS-LIM, hệ quản trị CSDL, mô hình hóa...);",
                    "Kiến thức pháp luật đất đai, thanh tra và giải quyết tranh chấp, quản lý nhà nước về đất đai, lưu trữ-kiểm kê chỉnh lý biến động đất…;",
                    "Kiến thức tài nguyên đất đai (địa chất, thổ nhưỡng, đánh giá đất, quy hoạch phát triển vùng đô thị, quy hoạch và phát triển nông thôn, quản lý khai thác tài nguyên đất đai…;",
                    "Kiến thức định giá giá đất, thị trường bất động sản...",
                    "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ quản lý đất đai tại Đại học Cần thơ hoặc các ngành gần khoa học đất; môi trường đất và nước; phát triển nông thôn...",
                ],
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: {
                    traningAddress: "Đại học Cần Thơ",
                    traningTitle: "Quản lý đất đai",
                    traningCode: "7850103",
                    traningDuring: "4,5 năm (9 học kỳ)",
                    traningLevel: "Kỹ sư",
                    traningAdmission: [
                        'Toán - Lý - Hóa (A00)',
                        'Toán - Lý - Tiếng Anh (A01)',
                        'Toán - Hóa - Sinh (B00)',
                        'Toán - Hóa - Tiếng Anh (D07)',
                    ],
                },
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống, thực hành và thực tế.",
                researchAreas: [
                    "Quản lý và khai thác quỹ đất, các nguồn tài nguyên đất đai",
                    "Đánh giá, quy hoạch sử dụng đất đai, đô thị, nông thôn.",
                    "Phân tích thẩm định giá, thị trường bất động sản.",
                    "Bảo tồn hệ sinh thái đất ngập nước, rừng ngập mặn.",
                    "Quản lý tổng hợp tài nguyên đất đai",
                    "Hình thái, vi hình thái, phân loại đất và độ phì đất.",
                    "Các ứng dụng công nghệ thông tin, GIS, GPS, ảnh viễn thám, trong các lĩnh vực quản lý, đánh giá tài nguyên đất đai, môi trường, địa chính, đô thị, nông thôn, quy họach sử dụng đất đai, và các ngành nông lâm nghiệp, công nghiệp, du lịch,  nông nghiệp đô thị."
                ],
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường, Sở Nông nghiệp PTNT, Sở Khoa học &  công nghệ, Sở Xây dựng thuộc các tỉnh ở ĐBSCL, cũng như các phòng chuyên ngành có liên quan ở các quận huyện và các Viện, Trường trong nước. Đối với các đơn vị ngoài nước: Trường đại học Wageningen (Hà lan); Viện Kỹ thuật Châu Á-AIT (Thái lan), Trung tâm viễn thám và xử lý ảnh-CRISP (Singapore), Trung tâm Viễn thám và  nghiên cứu không gian-CSRSR (Đài loan); Viện nghiên cứu lúa quốc tế-IRRI (Philippines).",
                jobPositions: [
                    "Kỹ sư phụ trách đo đạc, xây dựng bản đồ, thiết kế mô hình và nhập cơ sở dữ liệu, giải đoán ảnh viễn thám",
                    "Kỹ sư phụ trách đánh giá, quy hoạch đất đô thị và nông nghiệp-phát triển nông thôn",
                    "Kỹ sư phụ trách về lĩnh vực hậu cần các đơn vị Quân đội và Công an",
                    "Chuyên viên phụ trách chuyên ngành tài nguyên và môi trường cho UBND cấp tỉnh/tp và cấp quận/huyện",
                    "Chuyên viên phụ trách đăng ký-cấp giấy chứng nhận QSD đất, lưu trữ hồ sơ địa chính, kiểm kê chỉnh lý biến động đất",
                    "Chuyên viên phụ trách thanh tra-giải quyết tranh chấp về đất đai",
                    "Chuyên viên phụ trách thẩm định giá đất, thị trường bất động sản",
                    "Chủ các công ty đo đạc, kinh doanh bất động sản",
                ],
                workplaces: [
                    "Có khả năng đảm nhiệm công tác quản lý và điều hành: cán bộ nghiên cứu, cán bộ quản lý, cán bộ kỹ thuật.",
                    "Làm cán bộ công chức, viên chức hay cán bộ kỹ thuật tại các cơ quan hành chính nhà nước từ Trung ương đến cấp huyện, cấp xã về lĩnh vực Quản lý đất đai như: Bộ Tài nguyên - Môi trường, Sở Tài nguyên - Môi trường các tỉnh/Tp, Các Trung tâm kỹ thuật tài nguyên, Trung tâm phát triển quỹ đất các cấp tỉnh/Tp và Quận/huyện, văn phòng đăng ký quyền sử dụng đất các cấp, Phòng Tài nguyên - Môi trường, Cán bộ Địa chính xã/phường.",
                    "Chuyên viên văn phòng UBND các cấp Tỉnh/Thành Phố, Quận/huyện; các Viện nghiên cứu như: Viện nghiên cứu Địa chính, Viện Tài nguyên - Môi trường, Viện Quy hoạch - Thiết kế, Cục đo đạc bản đồ, Cục Quản lý đất đai, Chi cục Quản lý đất đai các tỉnh, Sở Tài chính, Sở Kế hoạch và đầu tư, Sở Khoa học Công nghệ, Sở Nội vụ, Sở Nông nghiệp và PTNT.",
                    "Làm cán bộ công chức, viên chức hay cán bộ kỹ thuật tại các Chi cục, Trung tâm hoặc Văn phòng như: Chi cục quản lý đất đai, Chi cục môi trường, Trung tâm Kỹ thuật Tài nguyên đất và Môi trường; Trung tâm khai thác và kinh doanh bất động sản; các Khu Công nghiệp; Khu Kinh tế...",
                    "Làm tư vấn, thẩm định cho các công ty như: Công ty đo đạc, Công ty môi giới và định giá bất động sản; các dự án liên quan đến đất đai và bất động sản, các đơn vị thẩm định giá (ngân hàng, công ty thẩm định giá…).",
                    "Làm giảng viên, giáo viên hay nghiên cứu viên tại các Viện nghiên cứu thuộc lĩnh vực Quản lý đất đai, Các trường đại học, cao đẳng, trung học chuyên nghiệp, các Cơ sở giáo dục đào tạo có các ngành nghề về nông nghiệp, Hiệp hội, trung tâm dạy nghề.",
                    "Giảng viên các trường đại học, cao đăng, trung cấp đại chính hay quản lý đất đai",
                    "Ngoài ra, sau khi tốt nghiệp sinh viên có khả năng tiếp tục học tập nâng cao trình độ sau đại học (bậc thạc sĩ, tiến sĩ) chuyên ngành Quản lý đất đai.",
                ],
            }
        },
        {
            title: "Quy hoạch vùng và đô thị",
            images: [""],
            programData: {
                title: "Quy hoạch vùng và đô thị",
                accreditation: "",
                description: "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành...",
                objectives: "Chuyên ngành đào tạo kỹ sư ngành Quản lý Đất đai nhằm đào tạo nguồn nhân lực có chất lượng...",
                skills: [
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: {
                    traningAddress: "",
                    traningTitle: "",
                    traningCode: "",
                    traningDuring: "",
                    traningLevel: "",
                    traningAdmission: [""],
                },
                researchAreas: [""],
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: [""],
                workplaces: [""],
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
                skills: [
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: {
                    traningAddress: "",
                    traningTitle: "",
                    traningCode: "",
                    traningDuring: "",
                    traningLevel: "",
                    traningAdmission: [""],
                },
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                researchAreas: [""],
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: [""],
                workplaces: [""],
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
                skills: [
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
                opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
                trainingInfo: {
                    traningAddress: "",
                    traningTitle: "",
                    traningCode: "",
                    traningDuring: "",
                    traningLevel: "",
                    traningAdmission: [""],
                },
                programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
                researchAreas: [""],
                partnerships: "Có mối quan hệ truyền thống với các đơn vị Sở Tài nguyên Môi trường...",
                jobPositions: [""],
                workplaces: [""],
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
                                <Tab
                                    key={'program-tab-' + { i }}
                                    label={program.title}
                                    {...a11yProps(i)}
                                    sx={{ fontWeight: 600 }}
                                />
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