<script>
    import Footer from "../../../components/Footer.svelte";
    import Header from "../../../components/Header.svelte";
    import Banner from "../Banner/banner.svelte";
    let activeTab = [true, false];
    window.scroll(0,0)
</script>

<div class="wrapper">
    <Header current_page={"service"} />
    <Banner />
    <div class="binary">
        <div class="container">
            <main>
                <div class="heading">Sàn giao dịch Binary Option</div>
                <div class="sub-heading">BO tại thị trường Crypto và Forex</div>
                <div class="content">
                    <p>
                        Trade BO hay còn được gọi là giao dịch Quyền chọn nhị
                        phân (Binary Options) – giao dịch Mua (Call) hoặc Bán
                        (Sell) dựa trên sự ước tính về biến động (tăng/ giảm)
                        của một loại tài sản trong giới hạn thời gian xác định ở
                        “thì tương lai”. Quyền chọn nhị phân cho phép chung ta
                        trao đổi nhiều loại tài sản như: ngoại hối, hàng hóa, cổ
                        phiếu, trái phiếu và cả tiền điện tử.
                    </p>
                    <p>
                        Sàn giao dịch nhị phân hoạt động có ổn định hay không
                        quyết định đến 50% sự thành công của nhà đầu tư. Vì vậy,
                        xây dựng một sản giao dịch đáng tin, chuyên nghiệp, thân
                        thiện với người dùng là điều tối quan trọng trong lĩnh
                        vực phân quyền chọn hệ nhị phân.
                    </p>
                    <p>
                        Hiểu được tầm quan trọng đó, Tulpo luôn đem đến cho
                        khách hàng những sản phẩm tối ưu nhất về công nghệ, tốc
                        độ cũng như thiết kế. Đầu tư vào thị trường quyền chọn
                        nhị phân tuy còn non trẻ, nhưng lại sở hữu những đặc
                        điểm ưu việt hơn so với các thị trường đầu tư tuyền
                        thống như sau:
                    </p>
                    <ul class="main-list">
                        <li>
                            Thị trường chưa cạnh tranh gay gắt, có nhiều cơ hội
                            hơn cho các nhà đầu tư trẻ
                        </li>
                        <li>
                            Các nhà đầu tư có thể nhận được nhiều lợi nhuận hơn
                            do các sàn đa số còn mới nên sẽ xuất hiện nhiều lợi
                            ích, phần thưởng để thu hút người dùng
                        </li>
                        <li>
                            Nhiều phần mềm miễn phí hỗ trợ cho các nhà đầu tư
                            chọn hệ nhị phân
                        </li>
                        <li>Biết được chính xác số lợi nhận sau khi đầu tư</li>
                        <li>
                            Có thể chọn trước thời gian kết thúc giao dịch đối
                            với quyền chọn hệ nhị phân
                        </li>
                        <li>
                            Nhà đầu tư không cần trả thêm bất cứ phí giao dịch
                            nào"
                        </li>
                    </ul>
                    <div class="img">
                        <img src="./assets/img-binary.png" alt="BO" />
                    </div>

                    <div class="tab">
                        <div class="option">
                            <div
                                class="option__item"
                                class:option__item--active={activeTab[0]}
                                on:click={() => {
                                    activeTab = [false, false];
                                    activeTab[0] = true;
                                }}
                            >
                                Thị trường Forex
                            </div>
                            <div
                                class="option__item"
                                class:option__item--active={activeTab[1]}
                                on:click={() => {
                                    activeTab = [false, false];
                                    activeTab[1] = true;
                                }}
                            >
                                Thị trường Crypto
                            </div>
                        </div>
                        {#if activeTab[0]}
                            <div class="details">
                                <div class="description">
                                    <span
                                        >Binary Option tại thị trường Forex</span
                                    >
                                    <p>
                                        Mô hình sàn giao dịch nhị phân vốn không
                                        con xa lạ trong thế giới tài chính, đặc
                                        biệt là thị trường ngoại hối (Forex
                                        market). Thị trường ngoại hối được biết
                                        đến là thị trường năng động và phổ biến
                                        nhất trên hành tinh, các tài sản được
                                        giao dịch trên đây cũng mang tính thanh
                                        khoản và giá trị vô cùng cao.
                                    </p>
                                    <p>
                                        Quyền chọn nhị phân trên thị trường
                                        ngoại hối thường sẽ kết hợp các cặp tiền
                                        tệ quan trọng nhất với nhau như: USD,
                                        EURO, JPY, CNY, CAD,v.v.
                                    </p>
                                </div>
                                <img src="./assets/img-forex.png" alt="forex" />
                            </div>
                        {:else}
                            <div class="details">
                                <div class="description">
                                    <p>
                                        Không chỉ phát triển đối với các tài sản
                                        ngoại hối, cổ phiếu, trái phiếu và hàng
                                        hóa, sàn giao dịch quyền chọn nhị phân
                                        đang ngày càng nở rộ
                                    </p>
                                    <ul>
                                        <li>
                                            Tích hợp cổng thanh toán: Người dùng
                                            có thể rút và nạp tiền điện tử thông
                                            qua cổng thanh toán bằng nhiều
                                            phương thức khác nhau.
                                        </li>
                                        <li>
                                            Bảo mật 2FA: Bảo mật 2 bước là một
                                            phương thức bảo mật để xác minh danh
                                            tính người sử dụng bằng Google
                                            Authenticator.
                                        </li>
                                        <li>
                                            Ví lưu trữ: Sàn giao dịch do Vakaxa
                                            phát triển tích hợp ví tiền điện tử
                                            cho phép lưu trữ đa dạng các loại
                                            tiền tệ và các loại tiền điện tử
                                            khác nhau.
                                        </li>
                                        <li>
                                            Phiên bản điện thoại: Người dùng
                                            tiến hành giao dịch thông qua điện
                                            thoại trên cả hệ điều hành Android
                                            và IOS.
                                        </li>
                                        <li>
                                            Hợp đồng thông minh: Tiền điện tử
                                            được trao đổi giữa người mua và
                                            người bán thông qua hợp đồng thông
                                            minh an toàn và bảo mật.
                                        </li>
                                    </ul>
                                </div>
                                <img
                                    src="./assets/img-crypto.png"
                                    alt="crypto"
                                />
                            </div>
                        {/if}
                    </div>
                </div>
            </main>
        </div>
    </div>

    <Footer />
</div>

<style lang="scss">
    @import "./binary-option.scss";
</style>
