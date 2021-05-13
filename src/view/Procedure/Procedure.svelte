<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    window.scroll(0, 0);
</script>

<div class="wrapper">
    <Header current_page={"procedure"} />
    <div class="procedure">
        <div class="banner" />
        <main>
            <div class="container">
                <div class="heading">Quy trình làm việc</div>
                <div class="content">
                    <img src="./assets/img-procedure.png" alt="step-by-step" />

                    <div class="content__item">
                        <p>
                            Tiếp nhận yêu cầu từ khách hàng và tiến hành phân
                            tích, tư vấn cải thiện. 
                        </p>
                        <div class="order">01</div>
                    </div>
                    <div class="content__item">
                        <p>
                            Thống nhất các chức năng của sản phẩm và trao đổi cơ
                            chế hợp tác.
                        </p>
                        <div class="order">02</div>
                    </div>
                    <div class="content__item">
                        <p>
                            Báo giá chi phí từng hạng mục kèm thời gian hoàn
                            thành và thanh toán 70% tài chính.
                        </p>
                        <div class="order">03</div>
                    </div>
                    <div class="content__item">
                        <p>Tiến hành vẽ sản phẩm Demo.</p>
                        <div class="order">04</div>
                    </div>
                    <div class="content__item">
                        <p>Chốt thiết kế Demo và bắt đầu Code.</p>
                        <div class="order">05</div>
                    </div>
                    <div class="content__item">
                        <p>
                            Thanh toán 20% tài chính trước thời gian hoàn thiện
                            sản phẩm 3 ngày.
                        </p>
                        <div class="order">06</div>
                    </div>
                    <div class="content__item">
                        <p>
                            Kiểm tra, hoàn thiện sản phẩm, và thanh toán 10% tài
                            chính cuối cùng.
                        </p>
                        <div class="order">07</div>
                    </div>
                    <div class="content__item">
                        <p>
                            Trao đổi công việc vận hành, bảo trì và cơ chế hợp
                            tác.
                        </p>
                        <div class="order">08</div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <Footer />
</div>

<style lang="scss">
    @import "./procedure.scss";
</style>
