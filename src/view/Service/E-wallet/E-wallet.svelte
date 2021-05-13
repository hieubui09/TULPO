<script>
    import Footer from "../../../components/Footer.svelte";
    import Header from "../../../components/Header.svelte";
    import Banner from "../Banner/banner.svelte";
    import { Swipe, SwipeItem } from "svelte-swipe";
    window.scroll(0,0)
    let activeSlide = 1;
    let SwipeComp;

    function nextSlide() {
        SwipeComp.nextItem();
        if (activeSlide < 3) {
            activeSlide++;
        }
    }

    function prevSlide() {
        SwipeComp.prevItem();
        if (activeSlide > 1) {
            activeSlide--;
        }
    }
    const swipeConfig = {
        autoplay: false,
        delay: 2000,
        transitionDuration: 500,
        defaultIndex: 0,
    };
</script>

<div class="wrapper">
    <Header current_page={"service"} />
    <Banner />

    <div class="e-wallet">
        <main>
            <div class="container">
                <div class="heading">Thiết kế ví tiền kĩ thuật số</div>
                <div class="content">
                    <div class="title">
                        Phát triển và củng cố thị trường ví điện từ tại Việt Nam
                    </div>

                    <div class="img">
                        <img src="./assets/img-ewallet.png" alt="ewallet" />
                    </div>
                    <div class="details">
                        Ví điện tử là nơi bảo vệ an toàn khóa riêng và công khai
                        của bạn, giúp bạn lưu trữ, giao dịch và theo dõi các tài
                        sản kỹ thuật của mình. Tulpo Software cung cấp đa dạng
                        các hình thức ví điện tử phù hợp với yêu cầu và mong
                        muốn của khách hàng.
                    </div>
                </div>
            </div>
        </main>
        <div class="slider">
            <div class="container">
                <div class="swipe">
                    <div class="disable"></div>
                    <Swipe {...swipeConfig} bind:this={SwipeComp}>
                        <SwipeItem>
                            <div class="item">
                                <ul>
                                    <li>Tiện lợi và dễ dàng truy cập</li>
                                    <li>
                                        Dễ dàng sử dụng và hoàn thành các giao
                                        dịch
                                    </li>
                                    <li>
                                        Tích hợp với ví của các sàn giao dịch
                                    </li>
                                </ul>
                            </div>
                        </SwipeItem>
                        <SwipeItem>
                            <div class="item">
                                <ul>
                                    <li>
                                        Tiện lợi, nhanh gọn phù hợp với thanh
                                        toán hàng ngày
                                    </li>
                                    <li>
                                        Hỗ trợ trên hệ điều hành Android và IOS
                                    </li>
                                </ul>
                            </div>
                        </SwipeItem>
                        <SwipeItem>
                            <div class="item">
                                <ul>
                                    <li>Tiện lợi và dễ dàng truy cập</li>
                                    <li>
                                        Dễ dàng sử dụng và hoàn thành các giao
                                        dịch
                                    </li>
                                    <li>
                                        Tích hợp với ví của các sàn giao dịch
                                    </li>
                                </ul>
                            </div>
                        </SwipeItem>
                    </Swipe>
                    <div class="buttons-holder">
                        <div class="button-prev"on:click={prevSlide}>
                            <img src="./assets/icon-left.png" alt="prev">
                        </div>
                        <div class="button-next"on:click={nextSlide}>
                            <img src="./assets/icon-right.png" alt="next">
                        </div>
                    </div>
                </div>

                <div class="details">
                    <div class="heading">
                        Các loại ví điện tử Tulpo cung cấp
                    </div>
                    <div class="description">
                        {#if activeSlide == 1}
                            <span>Web wallet: </span> Bạn có thể truy cập vào blockchain
                            thông qua bất kì trình duyệt nào, chỉ cần có kết nối
                            Internet. Ví trên web có những ưu việt như sau
                        {:else if activeSlide == 2}
                            <span>Desktop wallet: </span>Ví được thiết lập trên
                            máy tính của bạn qua các phần mềm tải xuống và cung
                            cấp cho bạn toàn quyền kiểm soát các khóa và tài
                            sản.
                        {:else if activeSlide == 3}
                            <span>Mobile wallet: </span>Ví được thiết kế dưới
                            dạng các ứng dụng di động thông minh, cho phép gửi
                            và nhận tiền bằng cách sử dụng mã QR.
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>

<style lang="scss">
    @import "./e-wallet.scss";
</style>
