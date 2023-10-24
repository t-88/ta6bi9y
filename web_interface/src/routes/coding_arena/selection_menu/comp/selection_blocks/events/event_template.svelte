<main>
    <SelectionTemplateBlock class="child" title={title} on_click={on_click} />
</main>

<script>
    import SelectionTemplateBlock from "../selection_template_block.svelte";

    export let title = "";
    export let on_click = () => {};
</script>


<style>
</style>