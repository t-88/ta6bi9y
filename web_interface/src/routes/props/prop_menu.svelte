<main class="bordered">
    <Bar title={"App"} menu_bar={false}/>
    <div id="prop-container">
        <BackgroundProp/>
    </div>

</main>

<script>
    import Bar from "../comps/bar.svelte";
    import BackgroundProp from "../comps/props/background_prop.svelte";

</script>


<style lang="scss">
    main {
        flex: 1;
    }
    #prop-container {
        margin-top: 40px;
    }
</style>