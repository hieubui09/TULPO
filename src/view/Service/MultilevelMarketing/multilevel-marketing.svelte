<script>
    import Footer from "../../../components/Footer.svelte";
    import Header from "../../../components/Header.svelte";
    import Banner from "../Banner/banner.svelte";
    let activeTab1 = true,
        activeTab2 = false,
        activeTab3 = false;
    window.scroll(0, 0);
</script>

<div class="wrapper">
    <Header current_page={"service"} />
    <Banner />

    <div class="multilevel-marketing_container">
        <div class="container">
            <h1 class="title">Hệ thống multilevel marketing</h1>

            <div class="multilevel-marketing">
                <div class="multilevel-marketing_nav">
                    <button
                        class="multilevel-marketing_btn"
                        class:multilevel-marketing_btn-active={activeTab1}
                        on:click={() => {
                            activeTab1 = true;
                            activeTab2 = false;
                            activeTab3 = false;
                        }}>THÔNG TIN</button
                    >
                    <button
                        class="multilevel-marketing_btn"
                        class:multilevel-marketing_btn-active={activeTab2}
                        on:click={() => {
                            activeTab1 = false;
                            activeTab2 = true;
                            activeTab3 = false;
                        }}>LỢI ÍCH</button
                    >
                    <button
                        class="multilevel-marketing_btn"
                        class:multilevel-marketing_btn-active={activeTab3}
                        on:click={() => {
                            activeTab1 = false;
                            activeTab2 = false;
                            activeTab3 = true;
                        }}>TỐC ĐỘ PHÁT TRIỂN</button
                    >
                </div>
                <div class="multilevel-marketing_tab">
                    <div class="multilevel-marketing_text">
                        {#if activeTab1}
                            <div class="multilevel-marketing_information">
                                <h1>Thông tin</h1>
                                <p>
                                    Hệ thống kinh doanh Multi-level Marketing
                                    (kinh doanh đa cấp) chắc hẳn không còn lạ
                                    lẫm với nhiều người. Mô hình Multi-level
                                    Marketing có thể đem lại nhiều lợi ích vượt
                                    trội so với mô hình kinh doanh truyền thống,
                                    Với trai trò và vị thế là một nhà thiết kế,
                                    triển khai nhiều dự án Multi-level Marketing
                                    khác nhau, chúng tôi hiểu được những khó
                                    khăn doanh nghiệp có thể phải đối mặt và tự
                                    tin có thể mang đến những giải pháp an toàn,
                                    hiệu quả và đáng tin nhất.
                                </p>
                                <p>
                                    Không chỉ tư vấn, lên kế hoạch, lập trình dự
                                    án, chúng tôi có thể đảm bảo sẽ cung cấp các
                                    giải pháp hoàn thiện từ ý tưởng đến hành
                                    động, từ xây dựng website đến hỗ trợ chăm
                                    sóc khách hàng.
                                </p>
                            </div>
                        {:else if activeTab2}
                            <div class="multilevel-marketing_benefits">
                                <h1>Lợi ích</h1>
                                <p>
                                    Mô hình kinh doanh Multi-level Marketing là
                                    mô hình kinh doanh chiến lược, luôn khuyến
                                    khích tạo ra các nhà phân phối mới bằng cách
                                    trả tỷ lệ phần trăm doanh số. MLM khuyến
                                    khích các nhà phân phối luôn luôn tìm kiếm
                                    và mở rộng mạng lưới của mình, để từ đó nâng
                                    cao lợi nhuận. MLM đem lại nhiều lợi ích
                                    như:
                                </p>
                                <p>
                                    <img src="../assets/tick.svg" alt="" />Bắt đầu với vốn đầu tư thấp.
                                </p>
                                <p>
                                    <img src="../assets/tick.svg" alt="" />Không chịu nhiều áp lực từ việc đầu tư hay cấp trên.
                                </p>
                                <p>
                                    <img src="../assets/tick.svg" alt="" /> Phát triển mạng lưới độc lập, toàn quyền với hệ thống của mình.
                                </p>
                                <p>
                                    <img src="../assets/tick.svg" alt="" />Bảo mật cao với quy trình xác thực hai bước và các kỹ thuật mã hóa của mật mã. Do đó, nó loại bỏ rủi ro của bất kỳ hoạt động gian lận nào trong các giao dịch.
                                </p>
                                <p>
                                    <img src="../assets/tick.svg" alt="" />Phí xử lý thấp và giao dịch tốc độ cao vì không có bên thứ ba tham gia nên hầu như không có bất kỳ khoản phí xử lý nào.
                                </p>
                                <p>
                                    <img src="../assets/tick.svg" alt="" />Kinh doanh MLM Bitcoin đưa mọi thứ lên một sổ cái phân tán cung cấp quyềnt ruy cập cho tất cả mọi người, do đó thúc đẩy tính minh bạch.
                                </p>
                            </div>
                        {:else if activeTab3}
                            <div class="multilevel-marketing_development">
                                <h1>Tốc độ phát triển</h1>
                                <p>
                                    Mô hình kinh doanh Multi-level Marketing đã
                                    có mầm mống phát triển từ rất sớm, đầu những
                                    năm 1900. Bùng nổ từ khoảng năm 1979-1990,
                                    hàng trăm công ty được thành lập mỗi ngày
                                    với hàng ngàn loại sản phẩm phong phú.
                                </p>
                                <p>
                                    Đầu thế kỉ 21, kinh doanh đa cấp bắt đầu
                                    bước chân vào thị trường Việt Nam, không chỉ
                                    chiếm lĩnh ở thị trường hàng hóa tiêu dùng,
                                    mô hình này còn có một vị trí nhất định
                                    trong thị trường tiền điện tử.
                                </p>
                                <p>
                                    Kinh doanh MLM giúp cho quy trình phát triển
                                    tiền điện tử trở nên dễ dàng hơn và nhanh
                                    chóng đến với các nhà đầu tư. Mạng lưới
                                    marketing rộng lớn và phát triển theo cấp số
                                    nhân chính là công cụ hiệu quả để giúp đồng
                                    tiện điện tử bạn phát hành được mọi người
                                    biết đến.
                                </p>
                                <p>
                                    Có thể nói, MLM là giải pháp vô cùng cần
                                    thiết và hữu hiệu để xây dựng cũng như phát
                                    triển tiền điện tử. Với những lợi ích vượt
                                    trội như không có phí giao dịch, thương mại
                                    quốc tế dễ dàng hơn, giao dịch bí mật, khả
                                    năng truy cập dễ dàng, MLM sẽ còn phát triển
                                    bùng nổ hơn nữa trong tương lai.
                                </p>
                            </div>
                        {/if}
                    </div>
                    <div class="multilevel-marketing_img">
                        {#if activeTab1}
                            <img
                                src="../assets/multilevel-marketing1.svg"
                                alt=""
                            />
                        {:else if activeTab2}
                            <img
                                src="../assets/multilevel-marketing3.svg"
                                alt=""
                            />
                        {:else if activeTab3}
                            <img
                                src="../assets/multilevel-marketing2.svg"
                                alt=""
                            />
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>

<style lang="scss">
    @import "./multilevel-marketing.scss";
</style>
