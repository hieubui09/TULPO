<script>
    import { link } from "svelte-spa-router";
    let hover = true;
    let active_page = [true, false, false, false, false, false];
    export let current_page;
    switch (current_page) {
        case "home":
            active_page = [false, false, false, false, false, false];
            active_page[0] = true;
            break;
        case "service":
            active_page = [false, false, false, false, false, false];
            active_page[1] = true;
            break;
        case "procedure":
            active_page = [false, false, false, false, false, false];
            active_page[2] = true;
            break;
        case "product":
            active_page = [false, false, false, false, false, false];
            active_page[3] = true;
            break;
        case "careers":
            active_page = [false, false, false, false, false, false];
            active_page[4] = true;
            break;
        case "recruit":
            active_page = [false, false, false, false, false, false];
            active_page[5] = true;
            break;
    }
    let isMobileMenu = false;
    function getMobileMenu() {
        isMobileMenu = !isMobileMenu;
        if (isMobileMenu&&!isSubMenu) {
            document.querySelector(".menu--mobile").style.left = "0";
        } else {
            document.querySelector(".menu--mobile").style.left = "100%";
        }
        if(isSubMenu){
            document.querySelector(".menu--mobile").style.left = "100%";
            document.querySelector(".sub-menu--mobile").style.left = "100%";
            isSubMenu=!isSubMenu;
        }
    }
    let isSubMenu = false;
    function getSubMenu() {
        isSubMenu = !isSubMenu;
        if (isSubMenu) {
            document.querySelector(".sub-menu--mobile").style.left = "0";
            document.querySelector(".menu--mobile").style.left = "-100%";
        } else {
            document.querySelector(".sub-menu--mobile").style.left = "100%";
            document.querySelector(".menu--mobile").style.left = "0";
        }
    }
</script>

<header>
    <div class="container">
        <div class="logo">
            <a href="/" use:link>
                <img src="./assets/logo.png" alt="logo TulPo" />
            </a>
        </div>
        <div class="nav-menu">
            <div
                class="menu-item"
                class:menu-item--active={hover && active_page[0]}
                on:mouseover={() => (hover = false)}
                on:mouseout={() => (hover = true)}
            >
                <a href="/" use:link> Trang chủ</a>
            </div>
            <div
                class="menu-item menu-item--sub"
                class:menu-item--active={hover && active_page[1]}
                on:mouseover={() => (hover = false)}
                on:mouseout={() => (hover = true)}
            >
                Dịch vụ
                <div class="sub-menu">
                    <div class="sub-menu__item">
                        <a href="/service/dapp" use:link
                            >Ứng dụng phi tập trung (DAPP)</a
                        >
                    </div>
                    <div class="sub-menu__item">
                        <a href="/service/botmarketing" use:link
                            >BOT Marketing</a
                        >
                    </div>
                    <div class="sub-menu__item">
                        <a href="/service/multilevelmarketing" use:link
                            >Hệ thống Multilevel Marketing</a
                        >
                    </div>
                    <div class="sub-menu__item">
                        <a href="/service/binary-option" use:link
                            >Sàn giao dịch Binary Option</a
                        >
                    </div>
                    <div class="sub-menu__item">
                        <a href="/service/e-wallet" use:link
                            >Ví tiền kỹ thuật số</a
                        >
                    </div>
                </div>
            </div>
            <div
                class="menu-item"
                class:menu-item--active={hover && active_page[2]}
                on:mouseover={() => (hover = false)}
                on:mouseout={() => (hover = true)}
            >
                <a href="/procedure" use:link> Quy trình</a>
            </div>
            <div
                class="menu-item  menu-item--sub"
                class:menu-item--active={hover && active_page[3]}
                on:mouseover={() => (hover = false)}
                on:mouseout={() => (hover = true)}
            >
                Sản phẩm
                <div class="sub-menu">Submenu</div>
            </div>
            <div
                class="menu-item"
                class:menu-item--active={hover && active_page[4]}
                on:mouseover={() => (hover = false)}
                on:mouseout={() => (hover = true)}
            >
                <a href="/careers" use:link>Careers</a>
            </div>
            <div
                class="menu-item"
                class:menu-item--active={hover && active_page[5]}
                on:mouseover={() => (hover = false)}
                on:mouseout={() => (hover = true)}
            >
                <a href="/recruit" use:link> Tuyển dụng</a>
            </div>
        </div>
        <div class="menu__burger" on:click={getMobileMenu}>
            <img src="./assets/icon-burger.png" alt="menu" />
        </div>

        <div class="menu--mobile">
            <div class="nav">
                <div class="menu-item">
                    <a href="/" use:link> Trang chủ</a>
                </div>
                <div class="menu-item menu-item--sub" on:click={getSubMenu}>
                    Dịch vụ
                </div>
                <div class="menu-item">
                    <a href="/procedure" use:link> Quy trình</a>
                </div>
                <div class="menu-item  menu-item--sub">
                    Sản phẩm
                    <!-- <div class="sub-menu">Submenu</div> -->
                </div>
                <div class="menu-item">
                    <a href="/careers" use:link>Careers</a>
                </div>
                <div class="menu-item">
                    <a href="/recruit" use:link> Tuyển dụng</a>
                </div>
            </div>
            <div class="close" on:click={getMobileMenu}>
                <img src="./assets/icon-close.png" alt="close" />
            </div>
        </div>
        <div class="sub-menu--mobile">
            <div class="back" on:click={getSubMenu}>
                <img src="./assets/icon-back.png" alt="back" />
            </div>
            <div class="nav">
                <div class="sub-menu__item">
                    <a href="/service/dapp" use:link
                        >Ứng dụng phi tập trung (DAPP)</a
                    >
                </div>
                <div class="sub-menu__item">
                    <a href="/service/botmarketing" use:link>BOT Marketing</a>
                </div>
                <div class="sub-menu__item">
                    <a href="/service/multilevelmarketing" use:link
                        >Hệ thống Multilevel Marketing</a
                    >
                </div>
                <div class="sub-menu__item">
                    <a href="/service/binary-option" use:link
                        >Sàn giao dịch Binary Option</a
                    >
                </div>
                <div class="sub-menu__item">
                    <a href="/service/e-wallet" use:link>Ví tiền kỹ thuật số</a>
                </div>
                
            </div>
            <div class="close" on:click={getMobileMenu}>
                <img src="./assets/icon-close.png" alt="close" />
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    @import "./header.scss";
</style>
