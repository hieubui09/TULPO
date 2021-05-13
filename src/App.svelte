<script>
    import { Router, routes } from "svelte-hash-router";
    import Careers from "./view/Careers/Careers.svelte";
    import Home from "./view/Home/Home.svelte";
    import Showmore from "./view/Home/Showmore.svelte";
    import Procedure from "./view/Procedure/Procedure.svelte";
    import Recruit from "./view/Recruit/Recruit.svelte";
    import BotMarketing from "./view/Service/BotMarketing/bot-marketing.svelte";
    import Dapp from "./view/Service/Dapp/dapp.svelte";
    import MultilevelMarketing from "./view/Service/MultilevelMarketing/multilevel-marketing.svelte";
    import About from "./view/Home/About.svelte";
    import EWallet from "./view/Service/E-wallet/E-wallet.svelte";
    import BinaryOption from "./view/Service/Binary/Binary-option.svelte";
import RecruitDetails from "./view/Recruit/RecruitDetails.svelte";

    routes.set({
        "/": Home,
        "/about-us": About,
        "/show-more": Showmore,
        "/careers": Careers,
        "/recruit": Recruit,
        "/recruit/details":RecruitDetails,
        "/procedure": Procedure,
        "/service": {
            "/dapp": Dapp,
            "/botmarketing": BotMarketing,
            "/multilevelmarketing": MultilevelMarketing,
            "/e-wallet": EWallet,
            "/binary-option": BinaryOption,
        },
    });
</script>

<Router />

<style>
</style>
