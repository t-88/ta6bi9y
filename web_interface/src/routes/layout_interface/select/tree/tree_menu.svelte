<main class="bordered">
    <Bar title={"Tree"} />

    <section>
        {#if children}
            {#each children as child}
                <Node widget={child} />
            {/each}
        {/if}
    </section>
</main>

<script>
    import Bar from "../../comps/ui/bar.svelte";
    import Node from "./node.svelte";

    import { canvas_store } from "$lib/engine/canvas";


    let children;
    canvas_store.children.subscribe((value) => {children = value});  

</script>

<style lang="scss">
    main {
        flex: 1;
        height: 0;


        border-top: none;
        display: flex;
        flex-direction: column;
    }
    section {
        overflow-y: scroll;
    }
</style>