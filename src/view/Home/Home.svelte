<script>
    import { link } from "svelte-spa-router";
    import Footer from "../../components/Footer.svelte";
    import Header from "../../components/Header.svelte";
    let start = Date.now();
    let currentPos = 0;
    let arr = [true, false, false, false, false];
    let windowWidth = window.innerWidth;
    window.scroll(0, 0);
    function scrollDown(from, to) {
        arr = [false, false, false, false, false];
        arr[to - 1] = true;

        document.querySelector(".main-container").style.top =
            -from * 100 + "vh";
        if (document.querySelector("#page" + to + " .main-img")) {
            document.querySelector(
                "#page" + to + " .main-img"
            ).style.animationDelay = (Date.now() - start) / 1000 + 0.5 + "s";
        }
        let animation = window.getComputedStyle(
            document.querySelector(".circle")
        ).animationName;
        if (document.querySelector(".circle")) {
            document.querySelector(".circle").style.animationDelay =
                "0s";
            document.querySelector(".circle").style.animationName =
                animation.slice(0, animation.length - 1) + from;
            document.querySelector(".circle").style.animationDirection =
                "normal";
        }
        document.querySelector(
            "#page" + to + " .heading"
        ).style.animationDelay = (Date.now() - start) / 1000 + 0.75 + "s";
        document.querySelector(
            "#page" + to + " .content"
        ).style.animationDelay = (Date.now() - start) / 1000 + 1.25 + "s";
        if (document.querySelector("#page" + to + " .button")) {
            document.querySelector(
                "#page" + to + " .button"
            ).style.animationDelay = (Date.now() - start) / 1000 + 1.25 + "s";
        }
    }
    function scrollUp(from, to) {
        document.querySelector(".main-container").style.top =
            -(to - 1) * 100 + "vh";
        arr = [false, false, false, false, false];
        arr[to - 1] = true;
        let animation = window.getComputedStyle(
            document.querySelector(".circle")
        ).animationName;
        if (document.querySelector(".circle")) {
            document.querySelector(".circle").style.animationDelay =
                "0s";
            document.querySelector(".circle").style.animationName =
                animation.slice(0, animation.length - 1) + to;
            document.querySelector(".circle").style.animationDirection =
                "reverse";
        }
    }
</script>

<div class="wrapper">
    <Header current_page={"home"} />
    {#if windowWidth >= 1024}
        <div class="home">
            <div class="nav">
                <div class="nav__item" class:nav__item--active={arr[0]} />
                <div class="nav__item" class:nav__item--active={arr[1]} />
                <div class="nav__item" class:nav__item--active={arr[2]} />
                <div class="nav__item" class:nav__item--active={arr[3]} />
                <div class="nav__item" class:nav__item--active={arr[4]} />
            </div>
            <div class="main-container">
                <div class="circle" />
                <div
                    class="first-page"
                    id="page1"
                    on:mousewheel={(value) => {
                        if (value.deltaY > 0) {
                            scrollDown(1, 2);
                           
                        }
                    }}
                >
                    <div class="container">
                        <main>
                            <div class="heading">TulPo Software</div>
                            <div class="content">
                                Công ty TNHH TulPo Software được nghiên cứu và
                                xây dựng từ 2016, chính thức thành lập và mở
                                rộng quy mô vào 2019 với mục tiêu trở thành
                                doanh nghiệp dẫn đầu trong cung cấp các giải
                                pháp Blockchain tại Việt Nam và toàn thế giới.
                            </div>
                            <div class="button">
                                <a href="/show-more" use:link> Xem thêm</a>
                            </div>
                        </main>
                        <img src="./assets/img-home.png" alt="" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif1" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif2" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif3" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif4" />
                    </div>
                </div>
                <div
                    class="second-page"
                    id="page2"
                    on:mousewheel={(value) => {
                        if (value.deltaY > 0) {
                            scrollDown(2, 3);
                        } else {
                            scrollUp(2, 1);
                        }
                    }}
                >
                    <div class="container">
                        <main>
                            <div class="heading">Giá trị</div>
                            <div class="content">
                                <div class="content__item">
                                    <img
                                        src="./assets/img-innovation.png"
                                        alt="knowledge"
                                    />
                                    <p>
                                        Tri thức: Kiến thức là vô hạn vì vậy
                                        chúng tôi luôn không ngừng sáng tạo,
                                        khám phá chính mình và phá bỏ những giới
                                        hạn về khả năng. Luôn luôn học hỏi, tìm
                                        tòi và nỗ lực để không bị tụt lại phía
                                        sau và bắt kịp với nền công nghệ 5.0 của
                                        thế giới.
                                    </p>
                                </div>
                                <div class="content__item">
                                    <img
                                        src="./assets/img-sketch.png"
                                        alt="harkworking"
                                    />
                                    <p>
                                        Bền bỉ: Chúng tôi kiên định với công
                                        việc của mình và không từ bỏ hay chấp
                                        nhận thất bại. Mỗi sản phẩm đều được xây
                                        dựng từ sự nghiên cứu và cố gắng hết
                                        mình của chúng tôi.
                                    </p>
                                </div>
                                <div class="content__item">
                                    <img
                                        src="./assets/img-warranty.png"
                                        alt="responsible"
                                    />
                                    <p>
                                        Trách nhiệm: Chúng tôi cam kết và đảm
                                        bảo những giá trị mà mình tạo ra, cam
                                        kết gắn bó và hỗ trợ khách hàng mà mình
                                        kết nối, cam kết và duy trì các mối quan
                                        hệ mà mình gây dựng với đối tác. Quan
                                        trọng hơn cả, chúng tôi cam kết mọi
                                        trách nhiệm và cố gắng đem lại sản phẩm
                                        tốt nhất mà mình có thể xây dựng được.
                                    </p>
                                </div>
                            </div>
                        </main>
                        <img
                            src="./assets/img-home2.png"
                            class="main-img"
                            alt=""
                        />
                        <img src="./assets/cube.gif" alt="bounce" id="gif1" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif2" />
                    </div>
                </div>
                <div
                    class="third-page"
                    id="page3"
                    on:mousewheel={(value) => {
                        if (value.deltaY > 0) {
                            scrollDown(3, 4);
                        } else {
                            scrollUp(3, 2);
                        }
                    }}
                >
                    <div class="container">
                        <main>
                            <div class="heading">
                                Nơi nhân tài được là chính mình
                            </div>
                            <div class="content">
                                Chúng tôi trân trọng sự khác biệt và tài năng
                                của mỗi cá nhân, từ đó xây dựng một môi trường
                                lí tưởng để mỗi người đều tìm thấy hướng đi cho
                                riêng mình trong một tập thể gắn kết để cùng
                                phát triển mục tiêu chung. Mỗi cá nhân là một
                                mảnh ghép quan trọng với màu sắc riêng được nuôi
                                dưỡng để trở thành phiên bản tốt nhất của chính
                                mình, khám phá tiềm năng của bản thân và tạo ra
                                giá trị thực sự.
                            </div>
                            <div class="button">
                                <a href="/recruit" use:link>
                                    Xem thêm tin tuyển dụng</a
                                >
                            </div>
                        </main>
                        <div class="main-img">
                            <img src="./assets/img-home3.png" alt="" />
                            <div class="light light--left">
                                <div class="light__item" />
                            </div>
                            <div class="light light--right">
                                <div class="light__item" />
                            </div>
                            <div class="light light--bottom">
                                <div class="light__item" />
                            </div>
                            <div class="light light--top">
                                <div class="light__item" />
                            </div>
                        </div>

                        <img src="./assets/cube.gif" alt="bounce" id="gif1" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif2" />
                    </div>
                </div>
                <div
                    class="forth-page"
                    id="page4"
                    on:mousewheel={(value) => {
                        if (value.deltaY > 0) {
                            scrollDown(4, 5);
                        } else {
                            scrollUp(4, 3);
                        }
                    }}
                >
                    <div class="container">
                        <main>
                            <div class="heading">Dịch vụ</div>
                            <div class="content">
                                <div class="content__item">
                                    <img
                                        src="./assets/img-robot.png"
                                        alt="knowledge"
                                    />
                                    <p>
                                        Thiết kế BOT Marketing ( Telegram,
                                        Twitter,v.v. )
                                    </p>
                                </div>
                                <div class="content__item">
                                    <img
                                        src="./assets/img-service2.png"
                                        alt="harkworking"
                                    />
                                    <p>
                                        Thiết kế ứng dụng Phi tập trung (DAPP)
                                    </p>
                                </div>
                                <div class="content__item">
                                    <img
                                        src="./assets/img-service3.png"
                                        alt="responsible"
                                    />
                                    <p>
                                        Xây dựng hệ thống Multilevel Marketing
                                    </p>
                                </div>
                                <div class="content__item">
                                    <img
                                        src="./assets/img-service4.png"
                                        alt="responsible"
                                    />
                                    <p>Xây dựng sàn giao dịch Binary Option</p>
                                </div>
                                <div class="content__item">
                                    <img
                                        src="./assets/img-service5.png"
                                        alt="responsible"
                                    />
                                    <p>Thiết kế Ví tiền kỹ thuật số</p>
                                </div>
                            </div>
                        </main>
                        <img src="./assets/roll.gif" alt="" />
                    </div>
                </div>
                <div
                    class="fifth-page"
                    id="page5"
                    on:mousewheel={(value) => {
                        if (value.deltaY < 0) {
                            scrollUp(5, 4);
                        }
                    }}
                >
                    <div class="container">
                        <main>
                            <div class="heading">
                                Con đường đến với lập trình Fintech
                            </div>
                            <div class="content">
                                Chào bạn, bạn có phải là một tín đồ của Bitcoin
                                và theo dõi nó trên từng bước biến chuyển? Có
                                bao giờ bạn cảm thấy Bitcoin thật giàu tiềm năng
                                và bí ẩn nhưng cũng đầy những rủi ro đáng lo?...
                            </div>
                            <div class="button">
                                <a href="/about-us" use:link>Về chúng tôi</a>
                            </div>
                        </main>
                        <div class="main-img">
                            <img src="./assets/img-home3.png" alt="" />
                            <div class="light light--left">
                                <div class="light__item" />
                            </div>
                            <div class="light light--right">
                                <div class="light__item" />
                            </div>
                            <div class="light light--bottom">
                                <div class="light__item" />
                            </div>
                            <div class="light light--top">
                                <div class="light__item" />
                            </div>
                        </div>
                        <img src="./assets/cube.gif" alt="bounce" id="gif1" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif2" />
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div class="home-mobile">
            <div class="first-page">
                <div class="container">
                    <main>
                        <div class="heading">TulPo Software</div>
                        <div class="content">
                            Công ty TNHH TulPo Software được nghiên cứu và xây
                            dựng từ 2016, chính thức thành lập và mở rộng quy mô
                            vào 2019 với mục tiêu trở thành doanh nghiệp dẫn đầu
                            trong cung cấp các giải pháp Blockchain tại Việt Nam
                            và toàn thế giới.
                        </div>
                        <div class="button">
                            <a href="/show-more" use:link> Xem thêm</a>
                        </div>
                    </main>
                    <div class="main-img">
                        <img src="./assets/img-home.png" alt="" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif1" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif2" />
                        <img src="./assets/cube.gif" alt="bounce" id="gif3" />
                    </div>
               
                </div>
            </div>
            <div class="second-page">
                <div class="container">
                    <main>
                        <div class="heading">Giá trị</div>
                        <div class="content">
                            <div class="content__item">
                                <img
                                    src="./assets/img-innovation.png"
                                    alt="knowledge"
                                />
                                <p>
                                    Tri thức: Kiến thức là vô hạn vì vậy chúng
                                    tôi luôn không ngừng sáng tạo, khám phá
                                    chính mình và phá bỏ những giới hạn về khả
                                    năng. Luôn luôn học hỏi, tìm tòi và nỗ lực
                                    để không bị tụt lại phía sau và bắt kịp với
                                    nền công nghệ 5.0 của thế giới.
                                </p>
                            </div>
                            <div class="content__item">
                                <img
                                    src="./assets/img-sketch.png"
                                    alt="harkworking"
                                />
                                <p>
                                    Bền bỉ: Chúng tôi kiên định với công việc
                                    của mình và không từ bỏ hay chấp nhận thất
                                    bại. Mỗi sản phẩm đều được xây dựng từ sự
                                    nghiên cứu và cố gắng hết mình của chúng
                                    tôi.
                                </p>
                            </div>
                            <div class="content__item">
                                <img
                                    src="./assets/img-warranty.png"
                                    alt="responsible"
                                />
                                <p>
                                    Trách nhiệm: Chúng tôi cam kết và đảm bảo
                                    những giá trị mà mình tạo ra, cam kết gắn bó
                                    và hỗ trợ khách hàng mà mình kết nối, cam
                                    kết và duy trì các mối quan hệ mà mình gây
                                    dựng với đối tác. Quan trọng hơn cả, chúng
                                    tôi cam kết mọi trách nhiệm và cố gắng đem
                                    lại sản phẩm tốt nhất mà mình có thể xây
                                    dựng được.
                                </p>
                            </div>
                        </div>
                    </main>

                    <img src="./assets/img-home2.png" class="main-img" alt="" />
                </div>
            </div>
            <div class="third-page">
                <div class="container">
                    <main>
                        <div class="heading">
                            Nơi nhân tài được là chính mình
                        </div>
                        <div class="content">
                            Chúng tôi trân trọng sự khác biệt và tài năng của
                            mỗi cá nhân, từ đó xây dựng một môi trường lí tưởng
                            để mỗi người đều tìm thấy hướng đi cho riêng mình
                            trong một tập thể gắn kết để cùng phát triển mục
                            tiêu chung. Mỗi cá nhân là một mảnh ghép quan trọng
                            với màu sắc riêng được nuôi dưỡng để trở thành phiên
                            bản tốt nhất của chính mình, khám phá tiềm năng của
                            bản thân và tạo ra giá trị thực sự.
                        </div>
                        <div class="button">
                            <a href="/recruit" use:link>
                                Xem thêm tin tuyển dụng</a
                            >
                        </div>
                    </main>

                    <div class="main-img">
                        <img src="./assets/img-home3.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="forth-page">
                <div class="container">
                    <main>
                        <div class="heading">Dịch vụ</div>
                        <div class="content">
                            <div class="content__item">
                                <img
                                    src="./assets/img-robot.png"
                                    alt="knowledge"
                                />
                                <p>
                                    Thiết kế BOT Marketing ( Telegram,
                                    Twitter,v.v. )
                                </p>
                            </div>
                            <div class="content__item">
                                <img
                                    src="./assets/img-service2.png"
                                    alt="harkworking"
                                />
                                <p>Thiết kế ứng dụng Phi tập trung (DAPP)</p>
                            </div>
                            <div class="content__item">
                                <img
                                    src="./assets/img-service3.png"
                                    alt="responsible"
                                />
                                <p>Xây dựng hệ thống Multilevel Marketing</p>
                            </div>
                            <div class="content__item">
                                <img
                                    src="./assets/img-service4.png"
                                    alt="responsible"
                                />
                                <p>Xây dựng sàn giao dịch Binary Option</p>
                            </div>
                            <div class="content__item">
                                <img
                                    src="./assets/img-service5.png"
                                    alt="responsible"
                                />
                                <p>Thiết kế Ví tiền kỹ thuật số</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="fifth-page">
                <div class="container">
                    <main>
                        <div class="heading">
                            Con đường đến với lập trình Fintech
                        </div>
                        <div class="content">
                            Chào bạn, bạn có phải là một tín đồ của Bitcoin và
                            theo dõi nó trên từng bước biến chuyển? Có bao giờ
                            bạn cảm thấy Bitcoin thật giàu tiềm năng và bí ẩn
                            nhưng cũng đầy những rủi ro đáng lo?...
                        </div>
                        <div class="button">
                            <a href="/about-us" use:link>Về chúng tôi</a>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        <Footer />
    {/if}
</div>

<style lang="scss">
    @import "./home.scss";
</style>
