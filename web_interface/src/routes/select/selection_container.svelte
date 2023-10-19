<main>
    <SelectMenu />
    <TreeMenu />
</main>

<script>
    import SelectMenu from "./select_menu.svelte";
    import TreeMenu from "./tree_menu.svelte";
</script>

<style lang="scss">
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
</style>