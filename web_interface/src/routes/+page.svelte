<main>
    <SelectionContainer />
    <Cavans />
    <PropMenu />
</main>


<script>
    import {init_context} from "$lib/state/context"

    import SelectionContainer from "./select/selection_container.svelte";
    import Cavans from "./canvas/cavans.svelte";
    import PropMenu from "./props/prop_menu.svelte";


    init_context();

</script>



<style lang="scss">
    :global(html,body) {
        padding: 0;
        margin: 0;
        font-family: "inter";
    }

    main {
        width: 100vw;
        height: 100vh;
        
        display: flex;
    }
</style>