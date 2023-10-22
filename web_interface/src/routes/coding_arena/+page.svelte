<main>
    <BlockSelection />
    <BlockArena/>
</main>


<script>
    import BlockSelection from "./block_selection.svelte";
    import BlockArena from "./block_arena.svelte";
</script>


<style>
    :global(html,body) {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: "inter";
        
    }
    :global(::-webkit-scrollbar) {
        display: none;
    }

    main {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>