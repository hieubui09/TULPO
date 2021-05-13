<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    window.scroll(0,0)
</script>

<div class="wrapper">
    <Header current_page={"home"}/>
    <div class="showmore">
        <div class="container">
            <div class="banner"> <img src="./assets/img-banner.png" alt="banner" /></div>
           
            <div class="heading">TULPO Software</div>
            <div class="content">
                <p>
                    Công ty TNHH TulPo Software được nghiên cứu và xây dựng từ
                    2016, chính thức thành lập và mở rộng quy mô vào 2019 với
                    mục tiêu trở thành doanh nghiệp dẫn đầu trong cung cấp các
                    giải pháp Blockchain tại Việt Nam và toàn thế giới. Hiện
                    tại, chúng tôi tập trung phát triển các sản phẩm tài chính
                    công nghệ (Fintech) như: sàn giao dịch phi tập trung, ví
                    điện tử, ứng dụng phi tập trung, thiết kế BOT marketing, hệ
                    thống multilevel marketing, và nhiều ứng dụng khác.
                </p>
                <br />
                <p>
                    Chúng tôi xây dựng một tầm nhìn chiến lược rõ ràng cho công
                    ty và tự hào rằng đã đem đến hàng trăm sản phẩm công nghệ
                    cao cho khách hàng trong và ngoài nước.
                </p>
                <br />
                <p>
                    Chúng tôi luôn tuân thủ nguyên tắc làm việc của mình đó là:
                    sáng tạo trong công việc và luôn luôn học hỏi, cập nhật, bắt
                    kịp với xu hướng công nghệ mới; kiên định và bền bỉ khi xây
                    dựng sản phẩm, không chấp nhận sai sót và bỏ cuộc; trách
                    nhiệm với công việc và đáp ứng mọi yêu cầu của khách hàng.
                    Với đội ngũ nhân viên tài năng, nhiệt huyết và đam mê, chúng
                    tôi luôn luôn cố gắng đem đến những giải pháp hoàn thiện
                    nhất đồng thời tiếp thu sự thay đổi nhanh chóng của công
                    nghệ để luôn luôn phát triển mình.
                </p>
                <br />
                <p>
                    Lựa chọn tintưởng vào chúng tôi, bạn sẽ không bao giờ phải
                    nghi ngờ về chất lượng sản phẩm và luôn luôn nhận được sự hỗ
                    trợ và tư vấn hết sức để đưa ra giải pháp hoàn hảo nhất cho
                    dự án của mình.
                </p>
            </div>
        </div>
    </div>
    <Footer />
</div>

<style lang="scss">
    @import "./showmore.scss";
</style>
