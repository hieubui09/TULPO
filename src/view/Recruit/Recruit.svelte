<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import { jobList, currentJob } from "../../../store.js";
    import { link } from "svelte-spa-router";
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
    let job = $jobList;
  
    let selected = [];
    let keyword;
    let test;
    function getSelected() {  
        if (keyword!==""){  
            job = [];       
            for(let i of $jobList){
                if(i.title.includes(keyword)){
                    job.push(i);                  
                }
            }
            test = keyword;
            keyword ="";
            selected =[];
            return     

        }else{
                selected = [];
                job = [];
                for (let i in document.querySelectorAll(".select__sub>input")) {
                    if (document.querySelectorAll(".select__sub>input")[i].checked) {
                        selected.push(
                            document.querySelectorAll(".select__sub>input")[i].value
                        );
                    }
                }

                if (selected.includes("IT phần mềm")) {
                    for (let i in $jobList) {
                        if ($jobList[i].field == "IT phần mềm") {
                            job.push($jobList[i]);
                        }
                    }
                
                }
                if (selected.includes("Hành chính/Văn phòng")) {
                    for (let i in $jobList) {
                        if ($jobList[i].field == "Hành chính/Văn phòng") {
                            job.push($jobList[i]);
                        }
                    }
                }
                if (selected.includes("Marketing")) {
                    for (let i in $jobList) {
                        if ($jobList[i].field == "Marketing") {
                            job.push($jobList[i]);
                        }
                    }
                }
                if (selected.includes("Thiết kế")) {
                    for (let i in $jobList) {
                        if ($jobList[i].field == "Thiết kế") {
                            job.push($jobList[i]);
                        }
                    }
                }
            }
       
    }
</script>

<div class="wrapper">
    <Header current_page={"recruit"} />
    <div class="recruit">
        <div class="banner" />
        <main>
            <div class="container">
                <div class="filter">
                    <input 
                        id="input"
                        class="input"
                        type="text"
                        placeholder="Nhập từ khóa"
                        bind:value={keyword}
                    />
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
                                <input
                                    type="checkbox"
                                    id="field4"
                                    name="field4"
                                    value="Marketing"
                                />
                                <label for="field4"> Marketing</label><br />
                            </div>
                        {/if}
                    </div>

                    <div class="button" type="submit" on:click={getSelected}>
                        <img src="./assets/icon-search.png" alt="search" />
                    </div>
                </div>
                <div class="tab">
                    <div class="option">
                        
                        <div class="option__item">Danh sách việc làm
                            {#if test}
                            - "{test}"
                            <!-- {:else}
                            {test = ""}  -->
                            {/if}
                        </div>

                        <div class="option__result">
                            {#each selected as value, i}
                                <p>
                                    <span
                                        on:click={() => {
                                            selected.splice(i, 1);
                                            selected = selected.slice(0);
                                        }}>&#9746;</span
                                    >{value}
                                </p>
                            {/each}
                        </div>
                    </div>
                    <div class="result">
                        {#each job as { id, title, salary, deadline }, i}
                            <div class="result__item">
                                <div class="heading">
                                    <a
                                        href="/recruit/details"
                                        use:link
                                        on:click={() => {
                                            $currentJob = job[i];
                                        }}>{title}</a
                                    >
                                </div>
                                <div class="details">
                                    <div class="details__item">
                                        <img
                                            src="./assets/icon-usd.png"
                                            alt="salary"
                                        />{salary}
                                    </div>
                                    <div class="details__item">
                                        <img
                                            src="./assets/icon-clock.png"
                                            alt="deadline"
                                        />
                                        {deadline}
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="content">
                    <div class="heading">Quy trình tuyển dụng</div>
                    <div class="details">
                        <div class="details__item">
                            <img src="./assets/img-recruit1.png" alt="step1" />
                            Nhận và sàng lọc hồ sơ
                        </div>
                        <div class="details__item">
                            <img src="./assets/img-recruit2.png" alt="step2" />
                            Liên hệ ứng viên
                        </div>
                        <div class="details__item">
                            <img src="./assets/img-recruit3.png" alt="step3" />
                            Phỏng vấn
                        </div>
                        <div class="details__item">
                            <img src="./assets/img-recruit4.png" alt="step4" />
                            Phỏng vấn vòng 2 (nếu có)
                        </div>
                        <div class="details__item">
                            <img src="./assets/img-recruit5.png" alt="step5" />
                            Thông báo kết quả phỏng vấn và ký kết hợp đồng làm việc
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <Footer />
</div>

<style lang="scss">
    @import "./recruit.scss";
</style>
