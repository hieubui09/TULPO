<script>
    import Footer from "../../../components/Footer.svelte";
    import Header from "../../../components/Header.svelte";
    import Banner from "../Banner/banner.svelte";
    let showDetail1 = false,
        showDetail2 = false;
    window.scroll(0, 0);
</script>

<div class="wrapper">
    <Header current_page={"service"} />
    <Banner />

    <div class="bot-marketing_container">
        <div class="container">
            <div class="bot-marketing_intro">
                <h1>Thiết kế BOT Marketing</h1>
                <p>
                    Tulpo Software cung cấp dịch vụ xây dựng các BOT marketing<br
                    /> trên nhiều nền tảng công nghệ cho khách hàng.
                </p>
            </div>

            <div class="bot-marketing_body">
                <div class="bot-marketing_body_left">
                    <img
                        class="bot-marketing_body_img"
                        src="../assets/bot-marketing1.png"
                        alt=""
                    />
                </div>
                <div class="bot-marketing_body_right bot-marketing_body_text">
                    <h1 class="bot-marketing_body_title">
                        BOT marketing được xây dựng trên các nền tảng: Telegram,
                        Messenger, Twitter và Reddit
                    </h1>
                    <p class="bot-marketing_body_detail">
                        Bot tự động đóng vai trò quan trọng trong việc hỗ trợ
                        doanh nghiệp phát triển sản phẩm và nâng cao sự hài lòng
                        cũng như trung thành của khách hàng. Bot chính là công
                        cụ giúp doanh nghiệp thành công trong việc lấy được niềm
                        tin của khách hàng một cách thông minh và nhanh gọn hơn.
                    </p>
                    <p
                        class="bot-marketing_body_detail"
                        class:hide_detail={!showDetail1}
                    >
                        Một trong những lợi thế lớn của bot là, không giống như
                        các ứng dụng, chúng không cần phải tải xuống, không cần
                        cập nhật chúng và chúng không chiếm dung lượng trong bộ
                        nhớ của điện thoại. Nắm bắt được những ưu việt này,
                        Tulpo luôn khuyến khích khách hàng của mình phát triển
                        các bot marketing trên nền tảng Telegram (tối ưu và phổ
                        biến nhất) và một số các nền tảng khác như: Messenger,
                        Twitter, Reddit,v.v.
                    </p>
                    <button
                        class="readmore_btn"
                        on:click={() => (showDetail1 = true)}>Xem thêm</button
                    >
                </div>
                <div class="bot-marketing_body_left bot-marketing_body_text">
                    <h1 class="bot-marketing_body_title">
                        Tính năng của Bot marketing
                    </h1>
                    <ul>
                        <li>
                            <span>Tùy chỉnh thông báo và tin tức: </span> một bot
                            có thể hoạt động như một tờ báo điện tử thông minh gửi
                            thông tin cho từng khách hàng ngay lập tức.
                        </li>
                        <li>
                            <span>Tích hợp với các dịch vụ khác:</span>không chỉ
                            giới hạn trong 1 ứng dụng, bot còn có thể kết nối
                            với các tiện ích khác như Gmail Bot, GIF bot, IMDB
                            bot, Wiki bot, Music bot, Youtube bot, GitHubBot.
                        </li>
                        <li>
                            <span> Lưu trữ máy chủ không người dùng: </span> Telegram
                            cung cấp không gian lưu trữ không giới hạn để lưu trữ
                            tất cả các tin nhắn văn bản, hình ảnh tập tin và tài
                            liệu của bạn.
                        </li>
                        <li>
                            <span> Cung cấp nhiều chức năng tùy chỉnh: </span> không
                            chỉ gửi thông báo, một bot còn có thể cung cấp cho bạn
                            các cảnh báo, dự báo thời tiết, bản dịch hoặc các dịch
                            vụ khác.
                        </li>
                        <li>
                            <span>Đơn giản:</span> Một bot có thể kết nối những người
                            đang tìm kiếm đối tác trò chuyện dựa trên sở thích chung
                            hoặc sự gần gũi.
                        </li>
                    </ul>
                </div>
                <div class="bot-marketing_body_right">
                    <img
                        class="bot-marketing_body_img"
                        src="../assets/bot-marketing2.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>

<style lang="scss">
    @import "./bot-marketing.scss";
</style>
