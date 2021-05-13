<script>
    import { link } from "svelte-spa-router";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    window.scroll(0, 0);
</script>

<div class="wrapper">
    <Header current_page={"careers"} />
    <div class="careers">
        <div class="banner">
            <div class="container">
                <div class="heading">
                    Nơi nhân tài <br /><span> được là chính mình</span>
                </div>
            </div>
        </div>
        <main>
            <div class="container">
                <div class="heading">Chúng tôi là Tulpo</div>
                <div class="description">
                    Con người là giá trị cốt lõi mà chúng tôi nuôi dưỡng và tin
                    tưởng.
                    <br /> Một đội ngũ mạnh sẽ tạo ra những sản phẩm chất lượng.
                </div>
                <div class="button">
                    <div>
                        <a href="/recruit" use:link>Thông tin tuyển dụng</a>
                    </div>
                </div>
                <picture>
                    <img src="./assets/img-careers.png" alt="careers" />
                </picture>
                <div class="content">
                    <div class="item">
                        <div class="item__heading">Tạo dựng dấu ấn</div>
                        <div class="item__details">
                            Chúng tôi tin rằng mỗi người đều có một sứ mệnh
                            riêng, đến với Tulpo nếu bạn muốn tạo ra những giá
                            trị thực sự và để lại dấu ấn trên bản đồ công nghệ
                            Việt Nam và thế giới
                        </div>
                        <div class="item__img">
                            <img
                                src="./assets/img-careers1.png"
                                alt="careers"
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__heading">
                            Xây dựng một môi trường làm việc đầy hứng khởi
                        </div>
                        <div class="item__details">
                            Tại Tulpo, chúng tôi cho nhân viên một môi trường tự
                            do và thoải mái để tùy ý sáng tạo theo cách riêng
                        </div>
                        <div class="item__img">
                            <img
                                src="./assets/img-careers2.png"
                                alt="careers"
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__heading">
                            Làm việc hết sức, <br />
                            vui chơi hết mình
                        </div>
                        <div class="item__details">
                            Không chỉ là những cá nhân đam mê và có năng lực,
                            chúng tôi còn nhiệt huyết và hết mình trong mọi cuộc
                            chơi. Mỗi ngày làm việc đều là những ngày khám phá
                            và thú vị.
                        </div>
                        <div class="item__img">
                            <img
                                src="./assets/img-careers3.png"
                                alt="careers"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <Footer />
</div>

<style lang="scss">
    @import "./careers.scss";
</style>
