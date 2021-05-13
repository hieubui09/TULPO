<script>
    import Header from "../../../components/Header.svelte";
    import Footer from "../../../components/Footer.svelte";
    import Banner from "../Banner/banner.svelte";
    window.scroll(0, 0);
    let active_eth = true,
        active_trx = false,
        active_bsc = false;
</script>

<div class="wrapper">
    <Header current_page={"service"} />
    <Banner />

    <div class="dapp_container">
        <div class="container">
            <div class="dapp_intro">
                <h1>Thiết kế ứng dụng phi tập trung (DApp)</h1>
                <p>
                    DApp hay còn gọi là Decentralized Application, được thiết kế
                    để phát triển và sáng tạo các dịch vụ chính sử dụng tiền kĩ
                    thuật số, các tác phẩm nghệ thuật, quyền sở hữu kĩ thuật số,
                    thế giới ảo, các bộ sưu tập có giá trị thực.
                </p>
            </div>

            <div class="dapp_body">
                <div class="dapp_body_left">
                    <img
                        class="dapp_body_img"
                        src="../assets/dapp1.svg"
                        alt=""
                    />
                </div>
                <div class="dapp_body_right dapp_body_text">
                    <h1 class="dapp_body_title">
                        DApp là gì và tầm quan trọng của nó trong nền kinh tế
                        phi tập trung
                    </h1>
                    <p class="dapp_body_detail">
                        Sự bùng nổ của công nghệ Blockchain đã mang đến một loạt
                        những giải pháp cho doanh nghiệp như quản lý chuỗi cung
                        ứng, chia sẻ dữ liệu tiết kiệm và tiện lợi, bảo vệ danh
                        tính người dùng,v.v. Trong số những ứng dụng trên, không
                        thể không kể đến sự phát triển vượt bậc của các ứng dụng
                        phi tập trung.
                    </p>
                </div>
                <div class="dapp_body_left dapp_body_text">
                    <h1 class="dapp_body_title">Dịch vụ Tulpo cung cấp</h1>
                    <div class="dapp_body_service">
                        <img src="../assets/tick.svg" alt="" />
                        <span class="dapp_body_detail">Thiết kế website.</span>
                    </div>
                    <div class="dapp_body_service">
                        <img src="../assets/tick.svg" alt="" />
                        <span class="dapp_body_detail"
                            >Viết hợp đồng thông minh (Smart contract).</span
                        >
                    </div>
                    <div class="dapp_body_service">
                        <img src="../assets/tick.svg" alt="" />
                        <span class="dapp_body_detail"
                            >Phát triển các tính năng khác: swap token,
                            liquidity pool.</span
                        >
                    </div>
                    <div class="dapp_body_service">
                        <img src="../assets/tick.svg" alt="" />
                        <span class="dapp_body_detail">Tạo ví điện tử.</span>
                    </div>
                    <div class="dapp_body_service">
                        <img src="../assets/tick.svg" alt="" />
                        <span class="dapp_body_detail"
                            >Marketing and Customer Care.</span
                        >
                    </div>
                </div>
                <div class="dapp_body_right">
                    <img
                        class="dapp_body_img"
                        src="../assets/dapp2.svg"
                        alt=""
                    />
                </div>
            </div>

            <div class="dapp_network">
                <h1 class="title">Ưu điểm của Dapp trên Etherum/ TRON/ BNB</h1>
                <div class="dapp_network_nav">
                    <button
                        class="dapp_network_btn"
                        class:dapp_network_btn-active={active_eth}
                        on:click={() => {
                            (active_eth = true),
                                (active_trx = false),
                                (active_bsc = false);
                        }}>ETH</button
                    >
                    <button
                        class="dapp_network_btn"
                        class:dapp_network_btn-active={active_trx}
                        on:click={() => {
                            (active_eth = false),
                                (active_trx = true),
                                (active_bsc = false);
                        }}>TRON</button
                    >
                    <button
                        class="dapp_network_btn"
                        class:dapp_network_btn-active={active_bsc}
                        on:click={() => {
                            (active_eth = false),
                                (active_trx = false),
                                (active_bsc = true);
                        }}>BSC</button
                    >
                </div>
                <div class="dapp_network_tab">
                    <div class="dapp_network_img">
                        <img src="../assets/dapp3.svg" alt="" />
                    </div>
                    <div class="dapp_network_text">
                        <div class="dapp_network_advantage">
                            <h1>Ưu điểm</h1>
                            {#if active_eth}
                                <p>
                                    Đảm bảo an ninh tuyệt đối và cho phép phân
                                    cấp thực sự, không bị kiểm soát bởi bất kì
                                    bên thứ ba nào.
                                </p>
                                <p>
                                    Hệ sinh thái cực kì phát triển với số lượng
                                    các DApp phong phú, nền tảng mạnh mẽ bền
                                    vững.
                                </p>
                            {:else if active_trx}
                                <p>
                                    TRON hoạt động trên thuật toán đồng thuận
                                    'Bằng chứng ủy quyền'. Nó giải quyết vấn đề
                                    về khả năng mở rộng không phải bằng cách cố
                                    gắng sidechain mà bằng cách nhân rộng chuỗi
                                    chính. Điều này cũng cho phép nó có một cấu
                                    trúc chi phí minh bạch hơn nhiều.
                                </p>
                            {:else if active_bsc}
                                <p>Phí giao dịch rất rẻ chỉ tới 1 xu.</p>
                                <p>
                                    Phát hành hợp đồng thông minh và tương thích
                                    EVM. Nhờ vậy, các ứng dụng phi tập trung
                                    (DApp) của Ethereum cũng có thể chạy trên
                                    BSC.
                                </p>
                                <p>
                                    Hệ thống Binance Smart Chain là một
                                    blockchain độc lập, cung cấp tính bảo mật và
                                    sự an toàn đến tất cả người dùng và nhà phát
                                    triển.
                                </p>
                                <p>
                                    Mạng lưới đem lại hiệu xuất cao có thể tạo
                                    ra một khối sau mỗi 3 giây.
                                </p>
                            {/if}
                        </div>
                        <div class="dapp_network_disadvantage">
                            <h1>Nhược điểm</h1>
                            {#if active_eth}
                                <p>
                                    Chi phí cao hơn rất nhiều các nền tảng khác
                                    (đặc biệt khi hệ thống quá tải)
                                </p>
                                <p>
                                    Hợp đồng thông minh có điều khoản không chặt
                                    chẽ, có thể bị lợi dụng
                                </p>
                            {:else if active_trx}
                                <p>
                                    Tuy nhiên, nó không hoàn toàn được bảo vệ
                                    như một nền tảng phi tập trung thực sự.
                                    Người dùng vẫn có thể bị khóa nếu trình xác
                                    nhận hợp tác.
                                </p>
                            {:else if active_bsc}
                                <p>
                                    BNB là tiền điện tử chống lạm phát. Vì vậy,
                                    các khối BNB mới không có phần thưởng khối.
                                </p>
                                <p>
                                    Mặt khác, nguồn cung của Binance sẽ bị giảm
                                    sau mỗi quý. Lý do là nhóm phát triển sẽ
                                    trích khoảng 20% lợi nhuận quý để tiến hành
                                    đốt BNB. Điều này cũng giải thích vì sao giá
                                    BNB có phong độ tăng “bền” hơn Altcoin khác.
                                </p>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>

            <div class="dapp_development">
                <h1 class="title">
                    Sự phát triển mạnh mẽ của mạng lưới Ethereum và tiềm năng
                    phát triển của DApp
                </h1>
                <p class="intro">
                    DApp được phát triển dựa trên nhiều nền tảng phi tập trung khác nhau như Ethereum, TRON, Binance Smart Chain,v.v. Tuy nhiên các DApp đều có những đặc điểm chung như sau:
                </p>
                <div class="dapp_development_list">
                    <ul>
                        <li>
                            <span>Phân quyền:</span> Người dùng toàn quyền sở hữu
                            và kiểm soát dữ liệu. Không có bất kì một máy chủ hay
                            bên thứ 3 nào tham gia vào việc xử lí và vận hành thông
                            tin.
                        </li>
                        <li>
                            <span>Minh bạch: </span>Toàn bộ thông tin giao dịch
                            được công khai trên các blockchain và hoàn toàn có
                            thể kiểm tra được.
                        </li>
                        <li>
                            <span>Bảo mật:</span> công nghệ blockchain bảo mật, an
                            toàn tuyệt đối và không thể bị thay đổi hay tác động
                            từ các hackers, xâm nhập trái phép hay kẻ lừa đảo nào.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Ẩn danh: </span>các Dapp thường khuyến khích
                            việc người dùng ẩn danh và không yêu cầu xác minh
                            danh tính để thực hiện các lệnh yêu cầu.
                        </li>
                        <li>
                            <span>Smart contract: </span>các điều khoản được
                            thỏa thuận giữa 2 bên sẽ được tự động thực hiện bởi
                            hợp đồng thông minh. Các giao dịch được thực hiện
                            bởi hợp đồng thông minh đều có thể truy nguyên, minh
                            bạch và không thể thay đổi.
                        </li>
                        <li>
                            <span>Chức năng đơn giản: </span>Giao dịch nhanh
                            gọn, đơn giản và hoàn toàn tự động.
                        </li>
                    </ul>
                </div>
                <div class="dapp_development_img">
                    <img src="../assets/dapp4.svg" alt="" />
                </div>
            </div>

            <div class="dapp_future">
                <h1 class="title">Tương lai của DApp</h1>
                <p>
                    Những vết nứt trong việc quản lý của các nền tảng tập trung đã khiến nhiều nhà phát triển tìm kiếm đến một giải pháp thay thế hiệu quả hơn, đó chính là DApp.
                </p>
                <div class="dapp_future_list">
                    <ul>
                        <li>
                            <span>Bảo mật: </span>giải quyết được vấn đề khó
                            khăn và nhức nhối nhất của công nghệ. Với đặc tính
                            phi tập trung, thông tin trở nên hoàn toàn minh
                            bạch, bảo mật và không chịu bất kì một sự tác động
                            bên ngoài nào.
                        </li>
                        <li>
                            <span>Thông minh: </span>giảm thiểu tối đa sự tác
                            động và sức lao động của con người vì các DApp sử
                            dụng hợp đồng thông minh để thực hiện các yêu cầu đã
                            xác định từ trước.
                        </li>
                        <li>
                            <span>Đơn giản:</span> Công nghệ lớn sẽ không còn là
                            tầm với xa vời với nhiều người, kể cả những người không
                            có nhiều hiểu biết về DApp và blockchain cũng có thể
                            dễ dàng sử dụng một cách chuyên nghiệp.
                        </li>
                    </ul>
                </div>
                <p>
                    Nhìn chung, DApp là một phát minh hứa hẹn và đầy tiềm năng
                    trong tương lai, dù chưa được phổ cập đến phần đông đại
                    chúng nhưng các ứng dụng phi tập trung đã chiếm lĩnh được
                    một vị trí nhất định trong lĩnh vực cung cấp dịch vụ tài
                    chính. Chắc chắn trong tương lai, nhu cầu đối với các Dapp
                    sẽ còn tăng mạnh hơn nữa.
                </p>
                <div class="dapp_future_img">
                    <img src="../assets/dapp5.svg" alt="" />
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>

<style lang="scss">
    @import "./dapp.scss";
</style>
