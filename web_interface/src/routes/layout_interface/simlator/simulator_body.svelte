<main>
    {#each children as child}
        {#if !get(child.deleted)}
            <svelte:component this={child.component} {...child.component_props} />
        {/if}
    {/each}
</main>


<script>
    import "../../global.css"
    import { canvas_store  } from "$lib/engine/canvas";
    import sim from "$lib/engine/simulator";
    import { get } from "svelte/store";

    let children = [];
    let cur_widget = undefined;


    sim.children.subscribe(value => {children = [...value]; });
    canvas_store.cur_widget.subscribe(value => {  cur_widget =  value; });

    sim.on_start();
</script>

<style>

    main {
        height: 100%;
        background-color: white;
        z-index: 2;
        position: relative;
        overflow: hidden;
    }

</style>