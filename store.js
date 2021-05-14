import { writable } from "svelte/store";    
let job= [
    {
        id: 1,
        title: "Front-end Developer",
        quantity: "2",
        field:"IT phần mềm",
        deadline: "01/05 - 01/06",
        salary: `8.000.000 - 15.000.000`,
        description: `- Phối hợp với team Design để đưa ra sản phẩm đạt yêu cầu nhanh nhất. <br> - Tối ưu hóa hệ thống để đạt tốc độ nhanh nhất với các sản phẩm liên quan đến Fintech.<br> - Bảo trì và phát triển các site đã có, tham gia thiết kế giao diện sàn giao dịch, cổng thanh toán, ví điện tử,…và các ứng dụng phi tập trung.`,
        requirement: `- Có tinh thần trách nhiệm, sẵn sàng học hỏi công nghệ mới để giải quyết vấn đề.<br>
        - Từ 1 năm kinh nghiệm về Front-end:<br>
        + Hiểu biết và sử dụng thành thạo về HTML, CSS, SCSS, JavaScript.<br>
        + Biết sử dụng TypeScript, JQuery, ReactJS. <br>
        + Đã từng làm với Bootstrap or Tailwind.<br>
        + Có kinh nghiệm về RESTful API.<br>
        + Biết sử dụng SvelteJS là một lợi thế.`,
        benefit: `Mức lương: Từ 8.000.000 - 15.000.000 + Thưởng dự án (Upto 20.000.000).<br>
        Hỗ trợ ăn trưa và trợ cấp xăng xe, gửi xe.<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo. Có cơ hội thăng tiến.<br>
        Hỗ trợ cơm trưa, trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật.<br>
        Thời gian thử việc: 1 tháng.<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm.`,
    },
    {
        id: 2,
        title: "SEO MARKETING",
        quantity: "2",
        field:"Marketing",
        deadline: "01/05 - 01/06",
        salary: `10.000.000-20.000.000`,
        description: `- Hợp tác với bộ phận Kĩ thuật để xây dựng Website hỗ trợ chuẩn SEO (hoặc Đưa ra các đề xuất thay đổi nhằm cải thiện SEO cho Website).<br>
        - Nghiên cứu và xây dựng bộ từ khóa cho SEO, nâng top và giữ hạng từ khóa<br>
        - Nghiên cứu, phân tính, đánh giá từ khóa, đối thủ, thị trường, website, xây dựng, thực hiện, đề xuất các chiến lược SEO nhằm tăng traffic cho website công ty<br>
        - Liên tục theo dõi, phân tích và tối ưu hiệu quả SEO.<br>
        - Xây dựng Content cho dự án<br>
        - Cập nhật thuật toán và các phương pháp SEO thường xuyên<br>
        - Báo cáo kết quả SEO từ khóa theo tuần/tháng.`,
        requirement: `- Biết SEO các trang web quốc tế ( đa phần các dự án triển khai đều là quốc tế)<br>
        - Có kỹ năng đọc tài liệu theo dự án và xây dựng nội dung trang web một dự án mới.<br>
        - Ít nhất 2 năm kinh nghiệm làm chuyên viên SEO.<br>
        - Hiểu biết sâu các công cụ SEO.<br>
        - Có kiến thức về HTML và CSS.<br>
        - Có kiến thức về Google Adwords.<br>
        - Liên tục cập nhật các kiến thức mới nhất về SEO.<br>
        - Kỹ năng phân tích, xử lí tình huống.<br>
        - Nhanh nhẹn, nhiệt tình trong công việc.<br>
        - Ham học hỏi, chịu được áp lực công việc.<br>
        - Có laptop cá nhân`,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 10.000.000-20.000.000). <br>
        (Lương thử việc full 100%)<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Hỗ trợ cơm trưa, trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm`,
    },
    {
        id: 3,
        title: "Content Marketing",
        field:"Marketing",
        quantity: "2",
        deadline: "01/05 - 01/06",
        salary: `8.000.000 - 15.000.000`,
        description: `Quản lý các trang mạng xã hội của công ty. <br>
        Xây dựng, quản lý nội dung (bao gồm viết nội dung, trình bày nội dung, ý tưởng về hình ảnh) trên Fanpage, Website. <br>
        Phối hợp với MKT team để lên kế hoạch content chi tiết cho Fanpages của công ty <br>
        Xây dựng nội dung – viết bài chăm sóc Fanpage, website… <br>
        Chịu trách nhiệm sản xuất nội dung truyền thông (Digital/Offline,…) như bài biết, idea video / hình ảnh,… Viết bài PR theo nội dung cấp trên yêu cầu.. <br>
        Tham gia cùng team xây dựng và quản lý các chiến dịch Marketing, đóng góp các ý tưởng nội dung sáng tạo cho chiến dịch Digital Marketing. <br>
        Biên tập nội dung truyền thông trên các kênh truyền thông của Công ty (Tin tức nội dung trên website, Nội dung trên mạng xã hội, Email, nội dung PR bên ngoài, Nội dung seeding,`,
        requirement: `- Có kiến thức marketing căn bản và phân tích thị trường; <br>
        - Có kinh nghiệm phát triển cộng đồng trên các trang mạng xã hội, forum,…. <br>
        - Sử dụng tốt các phần mềm chỉnh sửa ảnh như Photoshop hoặc các phần mềm thiết kế khác là một lợi thế <br>
        - Am hiểu về các mạng xã hội &  thương mại điện tử <br>
        - Có khả năng hợp tác phối hợp làm việc theo nhóm <br>
        - Có khả năng viết tốt, đam mê trong lĩnh vực công nghệ thông tin. `,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 8.000.000-15.000.000)<br>
        Lương tháng 13 + Thưởng lễ, Tết và các dịp đặc biệt<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Hỗ trợ cơm trưa 40k/ngày, xăng xe đi lại.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật.<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm`,
    },
    {
        id: 4,
        title: "Senior Back-end Developer",
        field:"IT phần mềm",
        quantity: "2",
        deadline: "01/05 - 01/06",
        salary: `25.000.000 – 35.000.000`,
        description: `     - Thiết kế, xây dựng, phân tích và sửa chữa các hệ thống quy mô lớn trên toàn cầu.<br>
        - Phân tích yêu cầu, thiết kế chi tiết, lập kế hoạch phát triển dự án.<br>
        - Tham gia thiết kế và đánh giá sources code, đảm bảo tiêu chuẩn của sản phẩm mà công ty đề ra.<br>
        - Quản lý đội nhóm, hỗ trợ các thành viên trong nhóm phát triển kỹ năng.<br>
        - Làm việc với người quản lý sản phẩm, đảm bảo bám sát thông số, tính năng sản phẩm.<br>
        - Chủ động phản hồi và đóng góp ý kiến để nâng cao chất lượng sản phẩm.<br>
        - Ability to write well-documented, clean code.`,
        requirement: `  - Có hơn 3 năm kinh ngiệm về lập trình Back-end với các ngôn ngữ: NodeJS, Golang, Rust.<br>
        - Có kinh nghiệm làm việc với MySQL, MongoDB, Redis (Kafka hoặc RabbitMQ)<br>
        - Có kinh nghiệm xây dựng và quản lý kiến trúc microservices.<br>
        - Có hiểu biết Amazon Web Services (AWS), CI / CD là một lợi thế.<br>
        - Có khả năng làm việc dưới áp lực trước yêu cầu về thời gian và chất lượng sản phẩm.<br>
        - Sử dụng thành thạo Docker, Nginx<br>
        - Sử dụng thành thạo Git để quản lí sources code.<br>
        - Có khả năng về làm việc nhóm cũng như làm việc độc lập.<br>
        - Có tư duy logic tốt, có khả năng đánh giá, cập nhật và tiếp cận công nghệ mới một cách nhanh chóng.<br>
        - Khả năng đọc hiểu tiếng anh tốt.`,
        benefit: ` Mức lương: Từ 20.000.000 – 30.000.000 + Thưởng dự án (Upto 40.000.000)<br>
        Hỗ trợ bữa trưa 40k/ngày, xăng xe đi lại.<br>
        Lương tháng 13 + Thưởng lễ, Tết và các dịp đặc biệt.<br>
        Môi trường làm việc trẻ trung, năng động, sáng tạo.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật.<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm...`,
    },
    {
        id: 5,
        title: "Junior/Middle Back-end Developer",
        field:"IT phần mềm",
        quantity: "3",
        deadline: "01/05 - 01/06",
        salary: `15.000.000-20.000.000`,
        description: `- Tham gia xây dựng phần mềm và các giải pháp phần mềm cho các dự án của công ty trên toàn cầu, đặc biệt là tại Việt Nam.<br>
        - Phát triển hệ thống realtime lớn, có khả năng scale.<br>
        - Bảo trì và phát triển hệ thống đã có.<br>
        - Tham gia thiết kế, xây dựng sàn giao dịch, cổng thanh toán, ví điện tử,… với các đối tác nước ngoài.`,
        requirement: `- Có tinh thần trách nhiệm, sẵn sàng học hỏi công nghệ mới<br>
        - Trên 1 năm kinh nghiệm về Backend:<br>
        •        Thành thạo RESTful/GraphQL và Websocket<br>
        •        Có kỹ năng sử dụng Message Brokers (Kafka/RabbitMQ), Redis/Memcached<br>
        •        Có kiến thức nền tảng về hệ điều hành<br>
        •        Có kinh nghiệm xây dựng, triển khai hệ thống microservices<br>
        •        Thành thạo cơ sở dữ liệu: MongoDB, Arango(ORM/ODM)<br>
        - Có kinh nghiệm về Front-end là một lợi thế (VueJS/ ReactJS)<br>
        - Có kinh nghiệm về ngôn ngữ lập trình: Nodejs/Go<br>
        - Ưu tiên: Có hiểu biết về blockchain, đọc hiểu tiếng anh tốt là một lợi thế`,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 15.000.000-20.000.000) + Thưởng dự án <br>
        Hỗ trợ bữa trưa 40k/ngày, xăng xe đi lại.<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm...`,
    },
    {
        id: 6,
        title: "Fresher Back-end Developer",
        field:"IT phần mềm",
        quantity: "2",
        deadline: "01/05 - 01/06",
        salary: `7.000.000-10.000.000`,
        description: `- Tham gia xây dựng phần mềm và các giải pháp phần mềm cho các dự án của công ty trên toàn cầu, đặc biệt là tại Việt Nam.<br>
        - Tham gia vào các dự án thực tế với sự hướng dẫn của mentor.<br>`,
        requirement: `- Có tư duy lập trình tốt, tinh thần trách nhiệm, sẵn sàng học hỏi công nghệ mới.<br>
        - Có kiến thức nền tảng về hệ điều hành. <br>
        - Kinh nghiệm thực tế Nodejs > 6 tháng hoặc Golang > 6 tháng <br>
        - Có hiểu biết, từng áp dụng vào công việc:<br>
        •        Git, Github, Gitlab<br>
        •        Cơ sở dữ liệu phi quan hệ: Mongodb<br>
        •        RESTFul API hoặc GraphQL/Websocket.<br>
        - Có lợi thế hơn nếu biết:<br>
        •        Kiến thức Frontend (ReactJS)<br>
        •        Process manager: PM2<br>
        •        Kiểm thử: Unit Testing, Functional Testing<br>
        •        Blockchain và AI<br>
        •        Đọc hiểu tiếng anh tốt<br>`,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 7.000.000-10.000.000) + Thưởng dự án <br>
        Hỗ trợ bữa trưa 40k/ngày, xăng xe đi lại.<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm...`,
    },
    {
        id: 7,
        title: "Automation Tester",
        field:"IT phần mềm",
        quantity: "2",
        deadline: "01/05 - 01/06",
        salary: `15.000.000-25.000.000`,
        description: `-  Tham gia vào các giai đoạn phát triển phần mềm, phân tích thiết kế, kiểm thử.<br>
        - Đọc hiểu các tài liệu giải pháp, tài liệu thiết kế; phối hợp với các nhóm để hiểu rõ yêu cầu sản phẩm<br>
        - Lập kế hoạch, viết tài liệu kiểm thử, thực hiện test, báo cáo test bao gồm: Test plan, test scenario, test case, phát triển, maintain testscripts và báo cáo status, issues, risks của dự án<br>
        -  Phối hợp với Development team để thực hiện và reuse automated Unit Test Cases, và Development test objects.<br>
        - Nghiên cứu và cập nhật các công cụ test, các kiến thức mới hỗ trợ cho công việc<br>
        - Đề xuất cải tiến sản phẩm hoặc quy trình test`,
        requirement: `- Tốt nghiệp cao đẳng, đại học; ưu tiên tốt nghiệp chuyên ngành CNTT, hoặc chuyên ngành liên quan.<br>
        - Có kiến thức về phương thức API và sử dụng các công cụ để giao tiếp như Postman, Jmeter, SoapUI, …<br>
        - Sử dụng thành thạo được 1 Automation testing tool (Selenum Webdriver, RobotFramework, ...).<br>
        - Nắm được các tool quản lý source code: GitHub, GitLab, Launchpad.<br>
        - Có kinh nghiệm về HTML, CSS, Xpath, Python, Javascript,...<br>
        - Có kiến thức về web server và web services<br>
        - Có kinh nghiệm về automation testing từ 1 năm trở lên<br>
        - Sẵn sàng nghiên cứu học hỏi kiến thức, công nghệ mới phục vụ cho dự án.<br>
        - Khả năng tư duy logic tốt, nhiệt tình, cẩn thận, tỉ mỉ, có trách nhiệm với chất lượng của sản phẩm.<br>
        - Có khả năng làm việc nhóm, luôn sẵn sàng hỗ trợ các thành viên khác trong dự án.`,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 15.000.000-25.000.000) + Thưởng dự án <br>
        Hỗ trợ bữa trưa 40k/ngày, xăng xe đi lại.<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm...`,
    },
    {
        id: 8,
        title: "Mobile Developer",
        field:"IT phần mềm",
        quantity: "2",
        deadline: "01/05 - 01/06",
        salary: `10.000.000-30.000.000`,
        description: `- Phát triển ứng dụng Mobile tối ưu cho điện thoại sử dụng Flutter, ngôn ngữ lập trình Dart.<br>
        - Xây dựng các thư viện Widgets có thể sử dụng lại<br>
        - Chuyển đổi các thiết kế bằng wireframes/figma sang mã nguồn chất lượng cao<br>
        - Chủ động phản hồi và đóng góp ý kiến để nâng cao chất lượng sản phẩm.<br>
        - Tham gia thiết kế và đánh giá sources code, đảm bảo tiêu chuẩn của sản phẩm mà công ty đề ra`,
        
        requirement: `- Có 1+ Năm kinh nghiệm làm việc với Flutter<br>
        - Có kinh nghiệm dựng kiến trúc dự án từ đầu (kiến trúc code)<br>
        - Có kinh nghiệm làm việc với các dự án có các module xử lý dữ liệu thời gian thực (realtime)<br>
        - Có kinh nghiệm làm việc với Web Services, RESTful, Websocket, Push Notification<br>
        - Có sản phẩm chạy thực tế trên Apple Store và Google Play<br>
        - Có kinh nghiệm làm việc với Caching, hệ thống off-line<br>
        - Sử dụng thành thạo công cụ quản lý code: Git<br>
        - Khả năng đọc hiểu tài liệu tiếng Anh chuyên ngành<br>
        - Kỹ năng làm việc theo nhóm cũng như làm việc độc lập.<br>
        - Tinh thần tự giác trong công việc, tự học hỏi và cập nhập kiến thức mới.<br>
        Ưu tiên:
        - Có kinh nghiệm làm việc với Backend Restful API.
        - Có kiến thức về OOP và Design pattern.`,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 10.000.000-30.000.000) + Thưởng dự án <br>
        Hỗ trợ bữa trưa 40k/ngày, xăng xe đi lại.<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm...`,
    },
    {
        id: 9,
        title: "Kế Toán",
        field:"Hành chính/Văn phòng",
        quantity: "2",
        deadline: "01/05 - 01/06",
        salary: `10.000.000-15.000.000`,
        description: `- Kiểm soát độ chính xác và đối chiếu các chứng từ Thanh toán, các sổ quỹ, ngân hàng, kế toán. <br>
        - Kiểm soát việc xuất hóa đơn và nhập các hóa đơn đầu vào lên phần mềm hóa đơn<br>
        - Nộp tờ khai thuế và tờ khai bảo hiểm theo chữ ký số (Token key)<br>
        - Làm bảng lương thuế, làm bảng tính thuế TNCN<br>
        - Làm báo cáo tài chính nội bộ hàng tháng<br>
        - Theo dõi Phân bổ công cụ dụng cụ - Tài sản cố định (Nếu có)<br>
        - Lưu giữ chứng từ kế toán.<br>
        - Làm tờ khai thuế GTGT, Báo cáo tình hình sử dụng hoá đơn, tờ khai thuế TNCN theo quý gửi các tờ khai quý cho quản lý trước khi gửi lên cơ quan thuế.<br>
        - Tra soát các cước phí phải đóng để tính vào lương nhân viên khi vượt mức.<br>
        - Làm báo cáo tài chính nộp cơ quan thuế
        `,
        
        requirement: `- Kinh nghiệm từ 2 năm trở lên. Đã có kinh nghiệm làm báo cáo tài chính/ kế toán thuế, xử lý chứng từ.<br>
        - Ưu tiên đã từng làm quyết toán thuế.
        <br>
       `,
        benefit: `Mức lương: Thỏa thuận theo năng lực (Từ 10.000.000-15.000.000) + Thưởng dự án <br>
        Hỗ trợ bữa trưa 40k/ngày, xăng xe đi lại.<br>
        Lương tháng 13 + Thưởng lễ, Tết,…<br>
        Môi trường làm việc trẻ trung , năng động, sáng tạo.<br>
        Trà, Coffee luôn sẵn sàng cho ngày làm việc.<br>
        Được đóng bảo hiểm theo quy định của pháp luật<br>
        Thời gian thử việc: 1 tháng<br>
        Tham gia các hoạt động teambuilding, nghỉ mát hàng năm...`,
    },
];
export let jobList=writable(job);
export let currentJob=writable({});