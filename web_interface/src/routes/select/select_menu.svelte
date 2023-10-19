<main class="bordered">
    <Bar title={"Basic Shapes"} />
    <RectWidget />
    <BtnWidget />
</main>

<script>
    import Bar from "../comps/bar.svelte";
    import RectWidget from "../comps/widgets/rect_widget.svelte";
    import BtnWidget from "../comps/widgets/btn_widget.svelte";
</script>

<style lang="scss">
    main {
        flex: 1;
    }
</style>