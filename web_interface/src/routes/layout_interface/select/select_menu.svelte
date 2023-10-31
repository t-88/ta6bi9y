<main class="bordered">
    <Bar title={"Basic Shapes"} />
    <RectSelect />
    <!-- <BtnSelect  /> -->
</main>

<script>
    import Bar from "../comps/ui/bar.svelte";
    import RectSelect from "../comps/selectables/rect_select.svelte";
    import BtnSelect from "../comps/selectables/btn_select.svelte";
</script>

<style lang="scss">
    main {
        flex: 1 0 0;
    }

</style>