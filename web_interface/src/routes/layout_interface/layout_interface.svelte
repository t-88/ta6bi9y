<main>
    {#if !is_running} 
        <div id="overlay"></div>
    {/if}

    <SelectionContainer />
    <Cavans />
    <PropMenu />
</main>


<script>
    import SelectionContainer from "./select/selection_container.svelte";
    import Cavans from "./canvas/cavans.svelte";
    import PropMenu from "./props/prop_menu.svelte";

    import sim from "$lib/engine/simulator";

    let is_running = false;
    sim.is_running.subscribe((val) => is_running = val);
</script>



<style lang="scss">
    :global(html,body) {
        padding: 0;
        margin: 0;
        font-family: "inter";
        
    }
    :global(::-webkit-scrollbar) {
        display: none;
    }

    main {
        width: 100vw;
        height: 100vh;
        
        display: flex;
    }
    #overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(128, 128, 128, 0.242);
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        pointer-events: none;
    }
</style>