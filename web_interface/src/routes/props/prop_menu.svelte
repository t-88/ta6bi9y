<main class="bordered">
    <Bar title={"App"} menu_bar={false}/>
    <div id="prop-container">
        {#if selected_widget}
            {#if selected_widget.props.fill_color}
                <BackgroundProp prop={selected_widget.props.fill_color}/>
            {/if}
            {#if selected_widget.props.size}
                <SizeProp prop={selected_widget.props.size}/>
            {/if}            
        {/if}        
    </div>

</main>

<script>
    import Bar from "../comps/props/bar.svelte";
    import BackgroundProp from "../comps/props/background_prop.svelte";
    import SizeProp from "../comps/props/size_prop.svelte";

    import pmenu_state from "$lib/engine/prop_menu";


    let selected_widget = undefined;
    pmenu_state.selected_widget.subscribe((value) => {selected_widget = value});




</script>


<style lang="scss">
    main {
        width: 25%;
        min-width: 350px;
    }
    #prop-container {
        margin-top: 40px;
    }
</style>