<div id="simulator" style={`width: ${$canvas_width}px; height: ${$canvas_height}px;`}> 
    <div id="phone-bar-top" style={`height: ${$phone_top_height}px`} class="phone-bar bordered"></div>
    <div id="phone-bar-bottom" style={`height: ${$phone_bottom_height}px`} class="phone-bar bordered"></div>
</div>

<script>
    import { 
        canvas_width        ,
        canvas_height       ,
        phone_top_height    ,
        phone_bottom_height ,
    } from "$lib/state/store";

    import SimulatorBody from "./simulator_body.svelte";

    import sim from "$lib/engine/simulator";
    import "../../global.css"
    import { onMount } from "svelte";


    let ref_main;

</script>


<style lang="scss">
    #simulator {
        margin: auto;

        display: flex;

        flex-direction: column;
        border-radius: 5px;
    }

    .phone-bar { 
        width: 100%;
        background-color: red;
    }
    #phone-bar-top {
        align-self: start;
        border-top: 0;
        border-left: 0;
    }
    #phone-bar-bottom {
        align-self: end;
        border-bottom: 0;
        border-left: 0;
    }
</style>