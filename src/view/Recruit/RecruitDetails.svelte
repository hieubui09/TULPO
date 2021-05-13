<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import { currentJob } from "../../../store.js";
    import { app } from "../../base";
    import { replace } from "svelte-spa-router";
    if (Object.keys($currentJob).length == 0) {
        replace("/recruit");
    }
    let isSuccess = false;
    let selectActive = false;
    window.scroll(0, 0);
    document.addEventListener(
        "click",
        function (event) {
            if (!event.target.closest(".select")) {
                selectActive = false;
            }
        },
        false
    );
    document.addEventListener(
        "mousedown",
        function (event) {
            if (event.detail > 1) {
                event.preventDefault();
            }
        },
        false
    );
    let selected = [];
    function getSelected() {
        selected = [];
        for (let i in document.querySelectorAll(".select__sub>input")) {
            if (document.querySelectorAll(".select__sub>input")[i].checked) {
                selected.push(
                    document.querySelectorAll(".select__sub>input")[i].value
                );
            }
        }
    }
    const db = app.firestore();
    let isUploaded = false;
    let fileURL;
    function onFileChange(e) {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef
            .put(file)
            .then(() => {
                isUploaded = true;
            })
            .catch((error) => {
                console.log(error);
            });
        fileRef
            .getDownloadURL()
            .then((result) => {
                fileURL = result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function onSubmit(e) {
        e.preventDefault();
        const cvName = e.target.name.value;
        const cvTel = e.target.tel.value;
        const cvMail = e.target.email.value;
        const cvBday = e.target.birthday.value;
        const cvCL = e.target.letter.value;
        db.collection("cv")
            .doc(cvName)
            .set({
                name: cvName,
                cv: fileURL,
                tel: cvTel,
                mail: cvMail,
                bday: cvBday,
                cletter: cvCL,
            })
            .then((isSuccess = true))
            .catch((error) => {
                console.log(error);
            });
    }
</script>

<div class="wrapper">
    <Header current_page={"recruit"} />
    <div class="recruitdetails">
        <div class="banner" />
        <main>
            <div class="container">
                <div class="filter">
                    <div class="input">
                        <input type="text" placeholder="Nhập từ khóa" />
                    </div>

                    <div class="select">
                        <p
                            on:click={() => {
                                selectActive = !selectActive;
                            }}
                        >
                            Tìm theo ngành nghề
                        </p>

                        {#if selectActive}
                            <div class="select__sub">
                                <input
                                    type="checkbox"
                                    id="field1"
                                    name="field1"
                                    value="IT phần mềm"
                                />
                                <label for="field1">IT phần mềm</label><br />
                                <input
                                    type="checkbox"
                                    id="field2"
                                    name="field2"
                                    value="Hành chính/Văn phòng"
                                />
                                <label for="field2">Hành chính/Văn phòng</label
                                ><br />
                                <input
                                    type="checkbox"
                                    id="field3"
                                    name="field3"
                                    value="Thiết kế"
                                />
                                <label for="field3"> Thiết kế</label><br />
                            </div>
                        {/if}
                    </div>
                    <div class="button" on:click={getSelected}>
                        <img src="./assets/icon-search.png" alt="search" />
                    </div>
                </div>
                <div class="content">
                    <div class="heading">
                        Tuyển dụng vị trí: <span>{$currentJob.title}</span> (Số lượng:
                        2)
                    </div>
                    <div class="details">
                        <p>
                            <span>Hạn nộp hồ sơ:</span>
                            {$currentJob.deadline}
                        </p>
                        <p>
                            <span>1. Mô tả công việc: </span><br />
                            {@html $currentJob.description}
                        </p>
                        <p>
                            <span>2. Yêu cầu công việc, kỹ năng:</span><br />
                            {@html $currentJob.requirement}
                        </p>
                        <p>
                            <span> 3. Quyền lợi:</span><br />
                            {@html $currentJob.benefit}
                        </p>
                        <p>
                            <span>4. Thời gian làm việc:</span><br />
                            Từ 8h30-17h45 từ Thứ 2-7 ( Nghỉ bất kỳ 2 ngày/tháng).<br
                            />
                        </p>
                        <p>
                            <span>5. Thông tin liên hệ - Địa chỉ:</span><br />
                            Tầng 4, Tòa Golden Land Building - 275 Nguyễn Trãi, Thanh
                            Xuân, Hà Nội. <br />
                            - SĐT: 033 4 532 210 <br />
                            - Mail: hr@tulpo.vn <br />
                            - Skype: leuhoavc_1<br />
                        </p>
                        <div class="grid">
                            <div class="item">
                                <div class="title">
                                    Cơ hội đào tạo và phát triển
                                </div>
                                <ul>
                                    <li>
                                        Đối với vị trí Internship/ Fresher: được
                                        đào tạo, có trợ cấp, cơ hội trở thành
                                        nhân viên chính thức.
                                    </li>
                                    <li>
                                        Đối với vị trí Junior/ Mid-senior: có lộ
                                        trình phát triển và thăng tiến rõ ràng,
                                        có cơ hội lead riêng các dự án.
                                    </li>
                                    <li>
                                        Môi trường làm việc năng động, trẻ trung
                                        với 99% là 9x, đồng nghiệp thân thiện,
                                        hỗ trợ hết mình trong công việc.
                                    </li>
                                    <li>
                                        Văn phòng hiện đại, đầy đủ tiện nghi,
                                        không gian mở và xanh tạo cảm hứng làm
                                        việc.
                                    </li>
                                    <li>
                                        Hoạt động tập thể sôi nổi: du lịch hàng
                                        năm, team building, year end party, v.v.
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <div class="title">Quyền lợi</div>
                                <ul>
                                    <li>
                                        Thu nhập hấp dẫn, tương xứng với năng
                                        lực và kinh nghiệm làm việc.
                                    </li>
                                    <li>
                                        Thưởng đa dạng: Thưởng tháng lương 13,
                                        thưởng dự án, thưởng các dịp lễ, tết,
                                        thưởng sinh nhật công ty, v.v.
                                    </li>
                                    <li>
                                        Xét tăng lương 2 lần/năm dựa trên năng
                                        lực và hiệu quả công việc.
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <div class="title">Phúc lợi xứng đáng</div>
                                <ul>
                                    <li>
                                        BHYT, BHXH, BHTN theo quy định của Nhà
                                        nước.
                                    </li>
                                    <li>Khám sức khỏe định kỳ 1 năm/ lần.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="form">
            <div class="container">
                <div class="heading">Ứng tuyển ngay</div>
                <form on:submit={onSubmit}>
                    <div class="item">
                        <label for="name">Họ và tên</label>
                        <input type="text" name="name" required />
                    </div>
                    <div class="item">
                        <label for="tel">Số điện thoại liên hệ </label>
                        <input type="tel" name="tel" required />
                    </div>
                    <div class="item">
                        <label for="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div class="item">
                        <label for="birthday">Ngày sinh </label>
                        <input type="text" name="birthday" required />
                    </div>
                    <div class="item">
                        <label for="letter">Thư xin việc ( nếu có)</label>
                        <input type="text" name="letter" />
                    </div>
                    <div class="item">
                        <label for="file">CV / Sơ yếu lí lich</label>
                        <input type="file" on:change={onFileChange} />
                        <div class="upload">
                            {#if isUploaded}Tải lên thành công{:else}Click để
                                tải lên CV / Sơ yếu lí lịch của bạn{/if}
                        </div>
                    </div>

                    <button
                        >{#if isSuccess}Ứng tuyển thành công{:else}Nộp hồ sơ
                            ngay{/if}</button
                    >
                </form>
            </div>
        </div>
    </div>
    <Footer />
</div>

<style lang="scss">
    @import "./recruitdetails.scss";
</style>
