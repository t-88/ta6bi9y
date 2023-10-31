<main>
    <SelectionMenu />
    <Arena/>
</main>


<script>
    import SelectionMenu from "./selection_menu/selection_menu.svelte";
    import Arena from "./arena/arena.svelte";
</script>


<style>
    :global(html,body) {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: "inter";
        overflow: hidden;
    }
    :global(::-webkit-scrollbar) { display: none; }

    main {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>