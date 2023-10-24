<main>
    <SelectionContainer />
    <Cavans />
    <PropMenu />
</main>


<script>
    import SelectionContainer from "./select/selection_container.svelte";
    import Cavans from "./canvas/cavans.svelte";
    import PropMenu from "./props/prop_menu.svelte";
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
</style>