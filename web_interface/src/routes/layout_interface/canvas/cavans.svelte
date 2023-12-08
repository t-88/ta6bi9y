
<main >
    <div id="canvas" style={`width: ${$canvas_width}px; height: ${$canvas_height}px;`} class="bordered"> 
        <div id="phone-bar-top" style={`height: ${$phone_top_height}px`} class="phone-bar bordered"></div>
        
        {#if !sim_is_running}
            <CanvasBody />
        {:else}
            <SimulatorBody />
        {/if}
        <div id="phone-bar-bottom" style={`height: ${$phone_bottom_height}px`} class="phone-bar bordered"></div>
    </div>
        
    <Button class="btn" style={`right:  10px;`} title={btn_text} on_click={run_app} />
    <Button class="btn" style={`left:  10px;`} title="Compile" on_click={compile_app} />
    <Button class="btn" style={`left:  40px;`} title="Export" on_click={export_app} />
</main>

<script>
    import { goto } from "$app/navigation";
    import { get } from "svelte/store";
    import { 
        canvas_width        ,
        canvas_height       ,
        phone_top_height    ,
        phone_bottom_height ,
    } from "$lib/state/store";

    import SimulatorBody from "../simlator/simulator_body.svelte";
    import sim from "$lib/engine/simulator";
    import "../../global.css"


    let sim_is_running = false;
    sim.is_running.subscribe((val) => sim_is_running = val);
    

    import CanvasBody from "./canvas_body.svelte";
    import Button from "../comps/ui/button.svelte";
    import { canvas_store } from "$lib/engine/canvas";


    function on_code() {
        goto("/coding_arena",false);
    }

    function run_app() {
        sim.is_running.set(!get(sim.is_running));
    }
    function compile_app() {
        canvas_store.compile_app();
    }

    function export_app() {
        canvas_store.export_app();
    }

    let btn_text = "Run";
    sim.is_running.subscribe((val) => btn_text = val ? "Exit" : "Run");



</script>


<style lang="scss">
    main {
        flex: 2;
        display: flex;
        overflow: hidden;
        position: relative;
    }    

    #canvas {
        margin: auto;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
    }

    .phone-bar { 
        z-index: 2;
        width: 100%;
        background-color: var(--grey);
    }
    #phone-bar-top {
        align-self: start;
        border-top: 0;
        border-left: 0;
    }
    #phone-bar-bottom {
        align-self: end;
        border-bottom: 0;
        border-right: 0;
    }

    main :global(.btn) {
        position: absolute;
        bottom: 10px;
    }

</style>