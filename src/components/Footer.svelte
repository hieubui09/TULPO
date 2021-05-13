<script>
    import { link } from "svelte-spa-router";
</script>

<footer>
    <div class="container">
        <div class="logo">
            <img src="./assets/logo-dark.png" alt="logo Tulpo" />
            <p>
                Tulpo Software Bắt đầu xây dựng và phát triển từ 2016 với tầm
                nhìn chiến lược rõ ràng trong lĩnh vực Fintech, Tulpo đảm bảo có
                thể đáp ứng những yêu cầu khắt khe nhất của khách hàng và đem
                đến các sản phẩm tốt nhất.
            </p>
        </div>
        <nav>
            <div class="nav__item"><a href="/" use:link>Trang chủ</a></div>
            <div class="nav__item">
                <a href="/product" use:link>Sản phẩm</a>
            </div>
            <div class="nav__item">
                <a href="/procedure" use:link>Quy trình</a>
            </div>
            <div class="nav__item"><a href="/careers" use:link>Careers</a></div>
            <div class="nav__item">
                <a href="/recruit" use:link>Tuyển dụng</a>
            </div>
        </nav>
        <div class="services">
            <div class="services__item">
                <a href="/service/dapp" use:link
                    >Ứng dụng phi tập trung (DAPP)</a
                >
            </div>
            <div class="services__item">
                <a href="/service/botmarketing" use:link>BOT Marketing</a>
            </div>
            <div class="services__item">
                <a href="/service/multilevelmarketing" use:link
                    >Hệ thống Multilevel Marketing</a
                >
            </div>
            <div class="services__item">
                <a href="/service/binary-option" use:link
                    >Sàn giao dịch Binary Option</a
                >
            </div>
            <div class="services__item">
                <a href="/service/e-wallet" use:link>Ví tiền kỹ thuật số</a>
            </div>
        </div>
        <div class="contact">
            <div class="contact__heading">Liên hệ</div>
            <div class="contact__content">
                Công ty TNHH TulPo Software <br />
                <br />
                Tầng 4 - Tòa C Golden Land Building, <br />
                275 Nguyễn Trãi, Thanh Xuân, Hà Nội.
            </div>
        </div>
        <div class="social">
            <div class="social__item">
                <div class="icon">
                    <img src="./assets/icon-facebook.png" alt="facebook" />
                </div>
                <div class="content">
                    <a
                        href="https://www.facebook.com/tulpovietnam"
                        target="blank">https://www.facebook.com/tulpovietnam</a
                    >
                </div>
            </div>
            <div class="social__item">
                <div class="icon">
                    <img src="./assets/icon-email.png" alt="email" />
                </div>
                <div class="content"><a href="mailto:contact@tulpo.vn">contact@tulpo.vn</a></div>
                
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    @import "./footer.scss";
</style>
