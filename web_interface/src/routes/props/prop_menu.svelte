<main class="bordered">
    <Bar title={"App"} menu_bar={false}/>
    <div id="prop-container">
        <SizeProp      />
        <BackgroundProp/>
    </div>

</main>

<script>
    import Bar from "../comps/props/bar.svelte";
    import BackgroundProp from "../comps/props/background_prop.svelte";
    import SizeProp from "../comps/props/size_prop.svelte";

</script>


<style lang="scss">
    main {
        flex: 1;
    }
    #prop-container {
        margin-top: 40px;
    }
</style>