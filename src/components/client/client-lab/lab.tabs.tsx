'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import LabContent, { LabInfoData } from './academy.content';

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


export default function LabTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    //Fake data

    const programs: LabInfoData[] = [

        {
            title: "Phòng Thí Nghiệm GIS - Viễn Thám",
            images: [""],
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
        },
        {
            title: "Quy hoạch vùng và đô thị",
            images: [""],
            accreditation: "",
            description: "Quy hoạch vùng và đô thị thuộc nhóm ngành Kiến trúc, Đào tạo người học năng lực chuyên môn trong lĩnh vực về quy hoạch cấp vùng, quy hoạch và thiết kế đô thị.",
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
                traningTitle: "Quy hoạch vùng và đô thị",
                traningCode: "7850105",
                traningDuring: "4,5 năm (9 học kỳ)",
                traningLevel: "Kỹ sư",
                traningAdmission: [
                    'Toán - Lý - Hóa (A00)',
                    'Toán - Lý - Tiếng Anh (A001)',
                    'Toán - Hóa - Sinh (B00)',
                    'Toán - Hóa - Tiếng Anh (D007)',
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
                "Xây dựng các đề án quy hoạch tổng thể, quy hoạch chuyên ngành, quy hoạch không gian đô thị: Công tác tại các cơ quan, doanh nghiệp của nhà nước (Sở xây dựng, Sở quy hoạch kiến trúc, phòng quản lý đô thị ở các cấp quận/huyện, các công ty về dịch vụ đô thị, Viện quy hoạch đô thị, trung tâm quy hoạch của quốc gia, tỉnh/thành phố…);",
                "Tư vấn, thiết kế kiến trúc không gian đô thị, kiến trúc công trình: công tác tại các cơ quan nhà nước, các công ty tư vấn thiết kế quy hoạch kiến trúc tư nhân (trong nước và quốc tế);",
                "Quản lý, giám sát dự án phát triển đô thị, dự án đầu tư xây dựng công tác tại cơ quan nhà nước và tư nhân có liên quan đến lĩnh vực quản lý, đầu tư phát triển đô thị và bất động sản (UBND, Sở xây dựng, Sở quy hoạch kiến trúc, phòng quản lý đô thị ở các cấp quận/ huyện, các công ty về dịch vụ đô thị,…);",
                "Nghiên cứu và giảng dạy trong lĩnh vực quy hoạch và thiết kế đô thị, thiết kế cảnh quan tại các viện, trường đại học trong nước và quốc tế, các tổ chức quốc tế."
            ],
        },
        {
            title: "Thạc sĩ Quản lý Đất đai",
            images: [""],
            accreditation: "",
            description: "Đào tạo thạc sĩ Quản lý đất đai nhằm nâng cao trình độ chuyên môn và năng lực trong công tác Quản lý đất đai; có kiến thức sâu rộng, có khả năng phụ trách các nhiệm vụ quản lý, nghiên cứu và ứng dụng các kiến thức vào thực tế một cách có hiệu quả trong điều kiện của ĐBSCL.",
            objectives: "Đào tạo nhằm nâng cao trình độ chuyên môn và năng lực trong công tác quản lý đất đai, có kiến thức chuyên sâu đảm nhiệm nhiệm vụ quản lý, giảng dạy và nghiên cứu khoa học, ứng dụng vào thực tế một cách có hiệu quả trong điều kiện tự nhiên và kinh tế xã hội của ĐBSCL. Hiểu rõ kiên thức chuyên môn, nghiệp vụ, kỹ thuật và có khả năng vận dụng thành thạo các tiến bộ khoa học kỹ thuật và công nghệ trong công tác quản lý đất đai.",
            skills: [
                "Làm chủ kiến thức chuyên ngành, có thể đảm nhiệm công việc của chuyên gia trong lĩnh vực được đào tạo; có tư duy phản biện;",
                "Có kiến thức lý thuyết chuyên sâu để có thể phát triển kiến thức mới và tiếp tục nghiên cứu ở trình độ tiến sĩ;",
                "có kiến thức tổng hợp về pháp luật, quản lý và bảo vệ môi trường liên quan đến lĩnh vực được đào tạo;",
                "Có kiến thức về các nguyên lý cơ bản của chủ nghĩa Mác - Lênin; đường lối cách mạng của Đảng Cộng sản Việt Nam; tư tưởng Hồ Chí Minh vào giải quyết những vấn đề lý luận, thực tiễn công việc.",
                "Có kiến thức cơ bản khoa học tự nhiên, đáp ứng việc tiếp thu các kiến thức giáo dục chuyên nghiệp và khả năng học tập.",
                "Có kiến thức cơ bản trong lĩnh vực khoa học xã hội và nhân văn phù hợp với chuyên ngành được đào tạo.",
                "Hiểu biết sâu và vận dụng tốt các kiến thức pháp luật đất đai ứng dụng, thanh tra đất đai, các thông tư, nghị định và quy định về lĩnh vực chuyên ngành quản lý đất đai.",
                "Nắm vững các kiến thức về quản lý, đánh giá và quy hoạch sử dụng đất đai ứng dụng, cũng như các kiến thức về trắc địa, kỹ thuật bản đồ địa chính, hệ thống thông tin địa lý (GIS).",
                "Có kiến thức sâu về quản lý đất đai và quản lý đô thị như: kiểm kê & chỉnh lý biến động đất đai, nông nghiệp đô thị, quản lý đô thị.",
                "Có kiến thức cơ bản về phương pháp nghiên cứu khoa học và tư duy hệ thống để hỗ trợ giải quyết công việc chuyên môn",
            ],
            opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
            trainingInfo: {
                traningAddress: "Đại học Cần Thơ",
                traningTitle: "Cao học Quản lý Đất đai",
                traningCode: "",
                traningDuring: "2,5 Năm",
                traningLevel: "Thạc sĩ",
                traningAdmission: ["Quản lý đất đai", "Luật", "Khoa học đất", "Hệ thống thông tin", "..."],
            },
            programStructure: "Triết học (3 hoặc 4 TC tuỳ theo ngành); Kiến thức cơ sở: 12-16 tín chỉ; Kiến thức chuyên ngành: 20-29 tín chỉ; Luận văn tốt nghiệp: 10 tín chỉ.",
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
                "Ngoài ra, sau khi tốt nghiệp sinh viên có khả năng tiếp tục học tập nâng cao trình độ sau đại học bật tiến sĩ chuyên ngành Quản lý đất đai.",
            ],

        },
        {
            title: "Tiến sĩ Quản lý Đất đai",
            images: [""],
            accreditation: "",
            description: "Đào tạo Tiến sĩ Quản lý đất đai nhằm nâng cao trình độ chuyên môn và năng lực trong công tác quản lý đất đai, có kiến thức chuyên sâu đảm nhiệm nhiệm vụ quản lý, giảng dạy và nghiên cứu khoa học, ứng dụng vào thực tế một cách có hiệu quả trong điều kiện tự nhiên và kinh tế xã hội của ĐBSCL.",
            objectives: "Đào tạo nhằm nâng cao trình độ chuyên môn và năng lực trong công tác quản lý đất đai, có kiến thức chuyên sâu đảm nhiệm nhiệm vụ quản lý, giảng dạy và nghiên cứu khoa học, ứng dụng vào thực tế một cách có hiệu quả trong điều kiện tự nhiên và kinh tế xã hội của ĐBSCL. Hiểu rõ kiên thức chuyên môn, nghiệp vụ, kỹ thuật và có khả năng vận dụng thành thạo các tiến bộ khoa học kỹ thuật và công nghệ trong công tác quản lý đất đai.",
            skills: [
                "Có kiến thức về các nguyên lý cơ bản của chủ nghĩa Mác - Lênin; đường lối cách mạng của Đảng Cộng sản Việt Nam; tư tưởng Hồ Chí Minh vào giải quyết những vấn đề lý luận, thực tiễn nghề nghiệp và cuộc sống.",
                "Có kiến thức cơ bản về toán học và khoa học tự nhiên, đáp ứng việc tiếp thu các kiến thức giáo dục chuyên nghiệp và khả năng học tập ở trình độ cao hơn.",
                "Có kiến thức cơ bản trong lĩnh vực khoa học xã hội và nhân văn phù hợp với chuyên ngành được đào tạo.",
                "Nắm vững các kiến thức về quản lý, đánh giá và quy hoạch sử dụng đất đai ứng dụng, cũng như các kiến thức về trắc địa, kỹ thuật bản đồ địa chính, hệ thống thông tin địa lý (GIS).",
                "Có kiến thức sâu về quản lý đất đai và quản lý đô thị như: kiểm kê & chỉnh lý biến động đất đai, nông nghiệp đô thị, quản lý đô thị.",
                "Có kiến thức cơ bản về phương pháp nghiên cứu khoa học và tư duy hệ thống để hỗ trợ giải quyết công việc chuyên môn",
                "Có kiến thức chuyên môn sâu về kỹ thuật, công nghệ như: đo đạc thành lập bản đồ địa chính, xử lý số liệu đo đạc, quản lý thông tin đất đai LIM/LIS, viễn thám ứng dụng trong quản lý, dự báo dịch hại - thiên tai - thảm họa, mô hình hóa, thống kê địa lý.",
                "Có kiến thức chuyên môn sâu về khối kiến thức quy hoạch, quản lý và bảo tồn tài nguyên đất đai như: quy hoạch phân bố sử dụng đất, quy hoạch và phát triển nông thôn, quy hoạch phát triển vùng và đô thị, phát triển bền vững tài nguyên đất, khai thác và bảo tồn tài nguyên đất, dự báo biến động tài nguyên đất đai.",
                "Có kiến thức thực tiễn chuyên ngành Quản lý đất đai thông qua thực tập chuyên ngành QLĐĐ và thực hiện luận văn tốt nghiệp.",
                "Có kỹ năng phát hiện, phân tích các vấn đề phức tạp và đưa ra được các giải pháp sáng tạo để giải quyết vấn đề; sáng tạo tri thức mới trong lĩnh vực chuyên môn; có khả năng thiết lập mạng lưới hợp tác quốc gia và quốc tế trong hoạt động chuyên môn; có năng lực tổng hợp trí tuệ tập thể, dẫn dắt chuyên môn để xử lý các vấn đề quy mô khu vực và quốc tế.",
            ],
            opportunities: "Cơ hội học tập nâng cao trình độ sau đại học: Cao học (thạc sỹ) quản lý đất đai, Tiến sĩ...",
            trainingInfo: {
                traningAddress: "Đại học Cần Thơ",
                traningTitle: "Tiến Sĩ Quản lý Đất đai",
                traningCode: "62850103",
                traningDuring: "4,5 Năm",
                traningLevel: "Tiến sĩ",
                traningAdmission: ["Quản lý đất đai", "Quản lý tài nguyên và Môi trường", "Khoa học đất"],
            },
            programStructure: "Chương trình theo quy chế tín chỉ. Phương pháp học tập theo cách đặt vấn đề, giải quyết tình huống...",
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
            ],

        },
    ]

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs value={value} onChange={handleChange} variant='scrollable'>
                        {programs && programs.map((program, i) => {
                            return (
                                <Tab
                                    key={`program-tab-${i}`}
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
                        <AcademyTabPanel key={`program-panel-${i}`} value={value} index={i}>
                            <LabContent programInfoData={program} />
                        </AcademyTabPanel>
                    )
                })}
            </Box>
        </Container>
    );
}