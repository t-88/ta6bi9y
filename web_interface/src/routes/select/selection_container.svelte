<main>
    <SelectMenu />
    <TreeMenu />
</main>

<script>
    import SelectMenu from "./select_menu.svelte";
    import TreeMenu from "./tree/tree_menu.svelte";
</script>

<style lang="scss">
    main {
        width: 25%;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
</style>