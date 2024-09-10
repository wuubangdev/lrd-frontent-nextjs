'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import QualityContent, { QualityInfoData } from './quality.content';

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

export default function QualityTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    //Fake data
    const programs: QualityInfoData[] = [
        {
            title: "Giới thiệu về AUN-QA",
            banner: "/images/quality_aun/aun252_ctu.jpg",
            images:
                [
                    "/images/AUN/aun_8.jpg",
                    "/images/AUN/aun_10.jpg",
                    "/images/AUN/aun_12.png",
                ]
            ,
            content:
                <>
                    <p>
                        Trường Đại học Cần Thơ triển khai các hoạt động bảo đảm chất lượng bên trong theo khung đảm bảo chất lượng của AUN-QA cho 08 Chương trình đào tạo trong đó có ngành QUẢN LÝ ĐẤT ĐAI. Thực hiện tự đánh giá và đánh giá ngoài chương trình đào tạo ngành QUẢN LÝ ĐẤT ĐAI hướng đến mục tiêu đạt chứng nhận chất lượng giáo dục theo tiêu chuẩn của khu vực "Đây là một trong những hoạt động cốt lõi nhằm thực hiện phương châm mà Nhà trường đã đặt ra: Đồng Thuận - Tận Tâm - Chuẩn Mực - Sáng Tạo.
                    </p>
                    <p>
                        AUN-QA là mạng lưới chuyên trách về đảm bảo chất lượng giáo dục đại học của AUN, được thành lập với nhiệm vụ thúc đẩy hoạt động đảm bảo chất lượng tại các cơ sở giáo dục đại học, nâng cao chất lượng giáo dục đại học và hợp tác với các tổ chức trong và ngoài nước. AUN hiện có 30 thành viên, trong đó có các thành viên Việt Nam là ĐHQG Hà Nội, ĐHQG TP Hồ Chí Minh và ĐH Cần Thơ.
                    </p>
                    <p>
                        Năm 2020, nhằm đáp ứng chất lượng đào tạo theo tầm nhìn và sứ mệnh của Trường Đại Học Cần Thơ, Bộ môn Tài nguyên Đất đai đã được phép đăng ký và sẽ Kiểm định chất lượng Quốc tế vào năm 2021. Để chuẩn bị cho quá trình tự đánh giá theo chuẩn AUN-QA cho chương trình đầu tiên tham gia, Khoa Môi trường và Tài nguyên Thiên nhiên đã thành lập Tổ cán bộ chuyên trách AUN nhằm thực hiện các công việc có liên quan. Tổ tự đánh giá hoạt động dưới sự chỉ đạo của Ban Giám hiệu trường ĐHCT và nhận chỉ đạo trực tiếp từ trưỏng Khoa Môi trường và TNTN. Sự tư vấn, tập huấn và hỗ trợ từ Trung tâm quản lý chất lượng – Đại học Cần Thơ.
                    </p>
                    <p>
                        Việc tham gia kiểm định AUN-QA sẽ mang lại giá trị:
                    </p>
                    <ul>
                        <li>
                            Người hưởng lợi đầu tiên từ hoạt động kiểm định chất lượng chương trình này chính là sinh viên.
                        </li>
                        <li>
                            Sinh viên sẽ được hưởng một chương trình đào tạocó chất lượng được cải tiến liên tục, trên tất cả các khía cạnh như khung chương trình, các môn học, giảng viên và hoạt động giảng dạy, hoạt động hỗ trợ sinh viên.
                        </li>
                        <li>
                            Các bên liên quan khác như giảng viên, nhà tuyển dụng đều có lợi. Cụ thể là nhà tuyển dụng có cơ hội sử dụng nguồn nhân lực chất lượng cao hơn,
                        </li>
                        <li>
                            Giảng viên được giảng dạy cho đối tượng là các sinh viên giỏi, được nghiên cứu và giảng dạy trong môi trường mang tính quốc tế, đặc biệt là có thêm cơ hội giao lưu học hỏi với các đối tác quốc tế và cũng tự hoàn thiện mình để nâng cao trình độ chuyên môn, nghiệp vụ, trình độ ngoại ngữ (tiếng Anh) nhằm đáp ứng yêu cầu của chương trình.
                        </li>
                    </ul>
                    <p>
                        <b>
                            Bộ môn Tài Nguyên Đất Đai - Khoa Môi trường và TNTN xin thông báo đến tất cả quý Thầy Cô, quý Đồng nghiệp, quý Nhà Tuyển dụng, quý Lãnh đạo các đơn vị, Cựu sinh viên ngành, Nghiên cứu sinh, học viên cao học và Sinh viên ngành Quản lý Đất đai và các ngành trong và ngoài Trường được nắm thông tin, hỗ trợ, chia sẽ và đóng góp vào hoạt động Kiểm định để đạt được chất lượng hiệu quả nhất.
                        </b>
                    </p>
                </>
        },
        {
            title: "Khai mạc",
            banner: "",
            images:
                [
                    "/images/AUN/aun_8.jpg",
                    "/images/AUN/aun_10.jpg",
                    "/images/AUN/aun_12.png",
                ]
            ,
            content:
                <>
                    <p>
                        Nhằm thực hiện sứ mệnh về đào tạo, nghiên cứu khoa học và phục vụ cộng đồng, Trường Đại học Cần Thơ (ĐHCT) đã không ngừng nỗ lực nâng cao
                        và cải thiện chất lượng các hoạt động của Nhà trường nhằm đáp ứng các chuẩn mực giáo dục đại học trong khu vực và trên thế giới. Theo đó,
                        công tác bảo đảm chất lượng và kiểm định chất lượng được xác định là một trong những nhiệm vụ trọng tâm của Trường ĐHCT.
                    </p>
                    <p>
                        Trong năm 2021, Trường ĐHCT triển khai kế hoạch đánh giá 8 chương trình đào tạo trình độ đại học (CTĐT) theo tiêu chuẩn của Mạng lưới đảm bảo
                        chất lượng giáo dục đại học của AUN (ASEAN University Network - Quality Assessment), được chia thành hai đợt đánh giá.
                        Đợt 1 được thực hiện từ ngày 22 - 26/3/2021 đối với 4 CTĐT gồm: Kỹ thuật phần mềm, Mạng máy tính và Truyền thông dữ liệu
                        (Khoa Công nghệ Thông tin và Truyền thông), Kỹ thuật cơ điện tử (Khoa Công nghệ) và Sư phạm Toán học (Khoa Sư phạm).
                    </p>
                    <p>
                        Theo báo cáo kết quả đánh giá ngoài do Ban Thư ký AUN gửi đến Nhà trường vào ngày 17/5/2021,
                        tất cả 4 CTĐT đánh giá trong Đợt 1 đều được nhận xét “Đáp ứng như mong đợi”, đáng chú ý,
                        có nhiều lĩnh vực hoạt động được nhận xét là “Đáp ứng trên cả mong đợi” theo yêu cầu chất lượng của AUN.
                    </p>
                    <p>
                        Tiếp nối thành công của đợt đánh giá ngoài từ xa lần 1 trong năm nay, Đợt 2 được tổ chức từ ngày 13 đến 17/12/2021
                        với 4 CTĐT gồm: Công nghệ thực phẩm và Khoa học cây trồng (Khoa Nông nghiệp), Hóa học (Khoa Khoa học Tự nhiên),
                        Quản lý đất đai (Khoa Môi trường và Tài nguyên thiên nhiên).
                    </p>
                    <p>
                        Sáng ngày 13/12/2021, chương trình khai mạc đợt đánh giá ngoài từ xa chương trình đào tạo theo tiêu chuẩn AUN-QA lần thứ 252 đã diễn ra bằng hình thức trực tuyến với sự tham gia của GS.TS. Suzeini Binti Abd Halim,
                        Thành viên Hội đồng AUN-QA, Đánh giá viên cao cấp; các đánh giá viên chính gồm: TS. Maria Elissa J. Lao, Ông Johnson Ong Chee Bin và Ông Prem Anand;
                        các đánh giá viên gồm: GS.TS. Juanito O. Cabanias, TS. Attachai Ueranantasun, PGS.TS. Roberto Bruno Gozzoli và GS.TS. Isabel Pefianco Martin;
                        hai đánh giá viên trong nước hỗ trợ công tác xác minh gồm: PGS.TS. Phạm Văn Tuấn và TS. Nguyễn Huy Phúc; Ban thư ký gồm: Cô Monsiri Chintanavisit
                        và Cô Soranee Chuyingsakultip.
                    </p>
                </>
        },
        {
            title: "Bế mạc",
            banner: "",
            images:
                [
                    "/images/AUN/aun_5.jpg",
                    "/images/AUN/aun_6.jpg",
                    "/images/AUN/aun_7.jpg",
                    "/images/AUN/aun_11.jpg",
                    "/images/AUN/aun_12.png",
                ]
            ,
            content:
                <>
                    <p>
                        Nhằm thực hiện sứ mệnh về đào tạo, nghiên cứu khoa học và phục vụ cộng đồng, Trường Đại học Cần Thơ (ĐHCT) đã không ngừng nỗ lực nâng cao và cải thiện chất lượng các hoạt động của Nhà trường nhằm đáp ứng các chuẩn mực giáo dục đại học trong khu vực và trên thế giới. Theo đó, công tác bảo đảm chất lượng và kiểm định chất lượng được xác định là một trong những nhiệm vụ trọng tâm của Trường ĐHCT.
                    </p>
                    <p>
                        Sau 5 ngày làm việc, sáng ngày 17/12/2021, phiên bế mạc đợt đánh giá ngoài từ xa CTĐT theo tiêu chuẩn AUN-QA lần thứ 252 cho các chương trình đào tạo Công nghệ Thực phẩm và Khoa học Cây trồng (Khoa Nông nghiệp), Hóa học (Khoa Khoa học Tự nhiên), Quản lý Đất đai (Khoa Môi trường và Tài nguyên Thiên nhiên) đã diễn ra với hình thức trực tuyến.
                    </p>
                    <p>
                        Tại Phiên bế mạc, đại diện Đoàn đánh giá, các đánh giá viên - chuyên gia AUN-QA đã trình bày kết quả đánh giá sơ bộ, phân tích những điểm mạnh của 4 chương trình đào tạo, đồng thời, chỉ ra những điểm cần bổ sung, điều chỉnh. Kết quả từ hoạt động đánh giá này sẽ giúp lãnh đạo nhà trường và các khoa xác định mức độ đáp ứng tiêu chuẩn chất lượng của các chương trình đào tạo, từ đó, có những giải pháp giúp cải tiến, nâng cao hơn nữa chất lượng chương trình đào tạo đạt chuẩn mực khu vực và thế giới, đáp ứng nhu cầu của các bên liên quan và xã hội.
                    </p>
                </>
        },
        {
            title: "Lời cảm ơn",
            banner: "",
            images:
                [
                    "/images/AUN/aun_2.jpg",
                    "/images/AUN/aun_3.jpg",
                    "/images/AUN/aun_4.jpg",
                    "/images/AUN/aun_5.jpg",
                    "/images/AUN/aun_6.jpg",
                    "/images/AUN/aun_7.jpg",
                    "/images/AUN/aun_8.jpg",
                    "/images/AUN/aun_9.jpg",
                    "/images/AUN/aun_10.jpg",
                    "/images/AUN/aun_11.jpg",
                    "/images/AUN/aun_12.png",
                ]
            ,
            content:
                <>

                    <p>Bộ môn Tài nguyên Đất đai, Khoa Môi trường & TNTN đã hoàn thành nhiệm vụ đánh giá theo tiêu chuẩn AUN-QA cho ngành Quản lý Đất đai vào ngày 16 tháng 12 năm 2021. Bộ môn xin chân thành gởi lời cám ơn đến quý Thầy/Cô, Quý lãnh đạo các Cơ quan/Doanh nghiệp, Anh/Chị cựu sinh viên, các em sinh viên đã hỗ trợ và đồng hành cùng bộ môn trong công tác chuẩn bị và tham gia đợt đánh giá lần này. Đồng thời, Bộ môn luôn mong muốn tiếp tục duy trì và phát triển mạng lưới các bên liên quan trong công tác nâng cao chất lượng đào tạo nhân lực ngành Quản lý Đất đai nhằm đáp ứng nhu cầu của xã hội trong tương lai.</p>
                    <p>Hy vọng sự cố gắng nổ lực của tập thể sẽ gặt hái những kết quả tốt trong đợt đánh giá này.</p>
                    <p>Chúc tất cả chúng ta luôn bình an và vui khỏe!</p>
                    <p>Xin trân trọng cám ơn!</p>
                </>
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
                            <QualityContent programInfoData={program} />
                        </AcademyTabPanel>
                    )
                })}
            </Box>
        </Container>
    );
}