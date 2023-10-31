<main>
    {#if is_running}
        <div class="overlay"> </div>
    {/if}
    <SelectMenu />
    <TreeMenu />
</main>

<script>
    import SelectMenu from "./select_menu.svelte";
    import TreeMenu from "./tree/tree_menu.svelte";


    import sim from "$lib/engine/simulator";
    let is_running;
    sim.is_running.subscribe((val) => is_running = val);

</script>

<style lang="scss">
    main {
        width: 25%;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        position: relative;
    }
    .overlay {
        height: 100%;
        width: 100%;
        background: rgba(128, 128, 128, 0.1);
        position: absolute;
        z-index: 2;
    }
</style>