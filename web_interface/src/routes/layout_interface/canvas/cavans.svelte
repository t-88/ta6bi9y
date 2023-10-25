
<main >
    <div id="canvas" style={`width: ${$canvas_width}px; height: ${$canvas_height}px;`} class="bordered"> 
        <div id="phone-bar-top" style={`height: ${$phone_top_height}px`} class="phone-bar bordered"></div>
        
        {#if !sim_is_running}
            <SimulatorBody />
        {:else}
            <CanvasBody />
        {/if}


        <div id="phone-bar-bottom" style={`height: ${$phone_bottom_height}px`} class="phone-bar bordered"></div>
    </div>
        
    <Button class="btn" style={`right:  10px;`} title="Run" on_click={run_app} />
    <!-- <Button class="btn" style={`left:  10px;`} title="Code!"on_click={on_code} /> -->
</main>

<script>
    import { goto } from "$app/navigation";

    import { 
        canvas_width        ,
        canvas_height       ,
        phone_top_height    ,
        phone_bottom_height ,
    } from "$lib/state/store";

    import SimulatorBody from "../simulator/simulator_body.svelte";
    import sim from "$lib/engine/simulator";


    let sim_is_running = false;
    sim.is_running.subscribe((val) => sim_is_running = val);

    
    import "../../global.css"

    import CanvasBody from "./canvas_body.svelte";
    import Button from "../comps/ui/button.svelte";


    function on_code() {
        goto("/coding_arena",false);
    }

    function run_app() {
        sim.is_running.set(true);
    }

    

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
        width : 80px;
        height : "40px";
    }

</style>